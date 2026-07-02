import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const styles =
  "inline-flex items-center justify-center gap-2 rounded-house bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors ease-house duration-300 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button className={`${styles} ${className ?? ""}`} {...props} />
  );
}

export function LinkButton({ className, href, ...props }: LinkButtonProps) {
  return (
    <a href={href} className={`${styles} ${className ?? ""}`} {...props} />
  );
}
