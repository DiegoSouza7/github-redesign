import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false

  if (asPath === rest.href) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        bgColor: isActive && 'blue.700'
      })}
    </Link>
  )
}