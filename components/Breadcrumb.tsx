import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({
  items,
  className = "",
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d’Ariane"
      className={`flex flex-wrap items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#aaa8a2] ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-3">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors duration-300 hover:text-[#c9a66b]"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "text-[#f3f0e9]" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span className="text-[#c9a66b]" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}