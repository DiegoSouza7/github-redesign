import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text, } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ElementType } from 'react'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}


export function NavLinkProfile({ icon, children, href, ...rest }: NavLinkProps) {
  const { asPath } = useRouter()

  if(asPath.substring(1) === href) {
    return (
      <ChakraLink
      w="100%"
      display="grid"
      gridTemplateColumns="30px 1fr"
      href={href}
      {...rest}
    >
      <Icon
        as={icon}
        fontSize="20"
        color="blue.500"
      />
      <Text
        color="blue.500"
        fontWeight="medium"
      >
        {children}
      </Text>
    </ChakraLink>
    )
  }

  return (
    <ChakraLink
      w="100%"
      display="grid"
      gridTemplateColumns="30px 1fr"
      href={href}
      {...rest}
    >
      <Icon
        as={icon}
        fontSize="20"
        color="gray.500"
      />
      <Text
        color="gray.500"
        fontWeight="medium"
      >
        {children}
      </Text>
    </ChakraLink>
  )
}