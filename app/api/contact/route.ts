import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedProjectTypes = [
  "Peinture intérieure",
  "Peinture extérieure",
  "Rénovation",
  "Ravalement de façade",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const city = clean(body.city);
    const message = clean(body.message);
    const projectType = clean(body.projectType);

    if (!name || !email || !city || !message) {
      return NextResponse.json(
        {
          error: "Veuillez remplir tous les champs obligatoires.",
        },
        {
          status: 400,
        }
      );
    }

    if (name.length > 100 || city.length > 100) {
      return NextResponse.json(
        {
          error: "Certaines informations sont trop longues.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          error: "Votre message est trop long.",
        },
        {
          status: 400,
        }
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return NextResponse.json(
        {
          error: "Veuillez renseigner une adresse email valide.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      projectType &&
      !allowedProjectTypes.includes(projectType)
    ) {
      return NextResponse.json(
        {
          error: "Le type de projet sélectionné est invalide.",
        },
        {
          status: 400,
        }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (
      !process.env.RESEND_API_KEY ||
      !contactEmail ||
      !fromEmail
    ) {
      console.error("Configuration Resend incomplète.");

      return NextResponse.json(
        {
          error: "Le service de contact est momentanément indisponible.",
        },
        {
          status: 500,
        }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Non renseigné");
    const safeCity = escapeHtml(city);
    const safeProjectType = escapeHtml(
      projectType || "Non renseigné"
    );
    const safeMessage = escapeHtml(message).replaceAll(
      "\n",
      "<br />"
    );

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],

      replyTo: email,

      subject: `Nouvelle demande — ${projectType || "Projet"} — ${city}`,

      html: `
        <div
          style="
            max-width: 640px;
            margin: 0 auto;
            padding: 40px;
            background: #f3f0e9;
            color: #111719;
            font-family: Arial, Helvetica, sans-serif;
          "
        >
          <p
            style="
              margin: 0 0 12px;
              color: #9f7b43;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
            "
          >
            Peinture Occitane
          </p>

          <h1
            style="
              margin: 0 0 32px;
              font-size: 30px;
              font-weight: 400;
            "
          >
            Nouvelle demande de contact
          </h1>

          <div
            style="
              border-top: 1px solid #d3d0c8;
              padding-top: 24px;
            "
          >
            <p><strong>Nom :</strong> ${safeName}</p>

            <p>
              <strong>Email :</strong>
              ${safeEmail}
            </p>

            <p>
              <strong>Téléphone :</strong>
              ${safePhone}
            </p>

            <p>
              <strong>Ville :</strong>
              ${safeCity}
            </p>

            <p>
              <strong>Projet :</strong>
              ${safeProjectType}
            </p>
          </div>

          <div
            style="
              margin-top: 32px;
              border-top: 1px solid #d3d0c8;
              padding-top: 24px;
            "
          >
            <p
              style="
                margin-bottom: 12px;
                color: #9f7b43;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
              "
            >
              Message
            </p>

            <p
              style="
                margin: 0;
                font-size: 15px;
                line-height: 1.7;
              "
            >
              ${safeMessage}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return NextResponse.json(
        {
          error:
            "Impossible d’envoyer votre demande pour le moment.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Erreur formulaire contact :", error);

    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l’envoi de votre demande.",
      },
      {
        status: 500,
      }
    );
  }
}