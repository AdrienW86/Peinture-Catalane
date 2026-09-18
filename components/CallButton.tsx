export default function CallButton() {
  return (
    <a
      href="tel:+33743260451"
      aria-label="Appeler Peinture Occitane au 07 43 26 04 51"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[#dfbf87]/40 bg-[#c9a66b] text-[#0b0f10] shadow-[0_8px_30px_rgba(0,0,0,0.28)] transition-all duration-300 hover:bg-[#dfbf87] lg:hidden"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <path
          d="M5.5 3.5H8.5L10 7.5L8 9C9.1 11.4 10.9 13.2 13 14.5L15 12.5L19 14V17C19 18.1 18.1 19 17 19C10.4 19 5 13.6 5 7C5 5.9 5.2 4.7 5.5 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap bg-[#111719] px-4 py-2 text-[11px] font-medium text-[#f3f0e9] shadow-lg sm:block">
        07 43 26 04 51
      </span>
    </a>
  );
}