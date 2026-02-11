import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function CustomLink({ href, children, ...props }: CustomLinkProps) {
  const isInternalLink = href.startsWith("/");
  const isAnchorLink = href.startsWith("#");

  if (isInternalLink || isAnchorLink) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
