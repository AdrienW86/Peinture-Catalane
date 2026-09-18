"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Peinture intérieure",
  "Peinture extérieure",
  "Rénovation",
  "Ravalement de façade",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [selectedProject, setSelectedProject] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot anti-spam
    const website = String(formData.get("website") ?? "");

    if (website) {
      // On simule volontairement un succès pour les bots.
      setStatus("success");
      setFeedback("Votre demande a bien été envoyée.");
      form.reset();
      setSelectedProject("");
      return;
    }

    const payload = {
      projectType: selectedProject,
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      city: String(formData.get("city") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            "Impossible d’envoyer votre demande pour le moment."
        );
      }

      setStatus("success");
      setFeedback(
        "Votre demande a bien été envoyée. Merci pour votre message."
      );

      form.reset();
      setSelectedProject("");
    } catch (error) {
      setStatus("error");

      setFeedback(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue lors de l’envoi."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-black/15"
    >
      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">
          Site internet
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* TYPE DE PROJET */}
      <fieldset className="border-b border-black/10 py-10">
        <legend className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f7b43]">
          01 · Votre projet
        </legend>

        <div className="mt-7 flex flex-wrap gap-3">
          {projectTypes.map((type) => {
            const selected = selectedProject === type;

            return (
              <button
                key={type}
                type="button"
                aria-pressed={selected}
                disabled={status === "loading"}
                onClick={() => setSelectedProject(type)}
                className={`border px-5 py-3 text-xs transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${
                  selected
                    ? "border-[#111719] bg-[#111719] text-[#f3f0e9]"
                    : "border-black/15 text-[#62635d] hover:border-[#9f7b43] hover:text-[#111719]"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        <input
          type="hidden"
          name="projectType"
          value={selectedProject}
        />
      </fieldset>

      {/* IDENTITÉ */}
      <div className="grid md:grid-cols-2">
        <div className="border-b border-black/10 py-10 md:border-r md:pr-8">
          <label
            htmlFor="name"
            className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f7b43]"
          >
            02 · Nom *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            disabled={status === "loading"}
            placeholder="Votre nom"
            className="mt-6 w-full border-0 bg-transparent p-0 font-serif text-2xl text-[#111719] outline-none placeholder:text-[#a5a39c] disabled:opacity-60"
          />
        </div>

        <div className="border-b border-black/10 py-10 md:pl-8">
          <label
            htmlFor="email"
            className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f7b43]"
          >
            03 · Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={status === "loading"}
            placeholder="votre@email.fr"
            className="mt-6 w-full border-0 bg-transparent p-0 font-serif text-2xl text-[#111719] outline-none placeholder:text-[#a5a39c] disabled:opacity-60"
          />
        </div>
      </div>

      {/* TÉLÉPHONE + VILLE */}
      <div className="grid md:grid-cols-2">
        <div className="border-b border-black/10 py-10 md:border-r md:pr-8">
          <label
            htmlFor="phone"
            className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f7b43]"
          >
            04 · Téléphone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            disabled={status === "loading"}
            placeholder="Votre numéro"
            className="mt-6 w-full border-0 bg-transparent p-0 font-serif text-2xl text-[#111719] outline-none placeholder:text-[#a5a39c] disabled:opacity-60"
          />
        </div>

        <div className="border-b border-black/10 py-10 md:pl-8">
          <label
            htmlFor="city"
            className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f7b43]"
          >
            05 · Ville du chantier *
          </label>

          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            maxLength={100}
            disabled={status === "loading"}
            placeholder="Ex. Perpignan"
            className="mt-6 w-full border-0 bg-transparent p-0 font-serif text-2xl text-[#111719] outline-none placeholder:text-[#a5a39c] disabled:opacity-60"
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="border-b border-black/10 py-10">
        <label
          htmlFor="message"
          className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9f7b43]"
        >
          06 · Votre demande *
        </label>

        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          disabled={status === "loading"}
          placeholder="Parlez-nous de votre projet, des pièces ou surfaces concernées, de vos envies..."
          className="mt-6 w-full resize-none border-0 bg-transparent p-0 font-serif text-2xl leading-[1.25] text-[#111719] outline-none placeholder:text-[#a5a39c] disabled:opacity-60"
        />
      </div>

      {/* FEEDBACK */}
      <div
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "success" && (
          <div
            role="status"
            className="mt-8 border-l-2 border-[#9f7b43] bg-[#e4e0d7] px-6 py-5"
          >
            <p className="font-serif text-xl text-[#111719]">
              Demande envoyée
            </p>

            <p className="mt-2 text-sm leading-6 text-[#62635d]">
              {feedback}
            </p>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="mt-8 border-l-2 border-[#111719] bg-black/[0.04] px-6 py-5"
          >
            <p className="font-serif text-xl text-[#111719]">
              L&apos;envoi a échoué
            </p>

            <p className="mt-2 text-sm leading-6 text-[#62635d]">
              {feedback}
            </p>
          </div>
        )}
      </div>

      {/* ENVOI */}
      <div className="flex flex-col gap-7 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-6 text-[#777871]">
          Les informations saisies sont utilisées pour traiter votre demande.
          Les champs marqués d&apos;un * sont obligatoires.{" "}
          <a
            href="/politique-de-confidentialite"
            className="border-b border-[#9f7b43] text-[#62635d] transition-colors hover:text-[#111719]"
          >
            En savoir plus sur vos données et vos droits
          </a>
          .
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex min-w-52 items-center justify-center gap-7 bg-[#111719] px-7 py-4 text-sm font-medium text-[#f3f0e9] transition-colors duration-300 hover:bg-[#c9a66b] hover:text-[#0b0f10] disabled:cursor-wait disabled:opacity-60"
        >
          {status === "loading"
            ? "Envoi en cours..."
            : "Envoyer ma demande"}

          {status !== "loading" && (
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          )}
        </button>
      </div>
    </form>
  );
}