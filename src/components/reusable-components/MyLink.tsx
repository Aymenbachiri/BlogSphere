import Link from "next/link";

type MyLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function MyLink({
  children,
  href,
  className,
  onClick,
  ...rest
}: MyLinkProps) {
  return (
    <Link href={href} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
