// components/Button.js
import Link from "next/link";

export default function Button({ href, children, variant = "gold", className = "", ...props }) {
  const variantClass =
    variant === "gold" ? "btn-gold" : variant === "navy" ? "btn-navy" : "btn-outline";

  if (href) {
    return (
      <Link href={href} className={`btn ${variantClass} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`btn ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}