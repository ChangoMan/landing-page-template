"use client";

import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  url: string;
  className?: string;
  children: React.ReactNode;
}

interface LogoImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

interface LogoTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

const Logo = ({ url, className, children, ...props }: LogoProps) => {
  return (
    <a
      href={url}
      className={cn("flex max-h-8 items-center gap-2", className)}
      {...props}
    >
      {children}
    </a>
  );
};

const LogoImage = ({ src, alt, className, ...props }: LogoImageProps) => (
  <img src={src} alt={alt} className={cn("block h-8", className)} {...props} />
);

const LogoText = ({ children, className, ...props }: LogoTextProps) => (
  <span
    className={cn("text-lg font-semibold tracking-tighter", className)}
    {...props}
  >
    {children}
  </span>
);

export { Logo, LogoImage, LogoText };
