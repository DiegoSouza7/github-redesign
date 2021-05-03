import { Button, Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
  quantity?: number;
}

export function NavLink({ icon, quantity, children, href, ...rest }: NavLinkProps) {
  const { pathname } = useLocation()

  if (pathname === href) {
    return (
      <ChakraLink bgColor="blue.700" as={Link} to={href} display="flex" align="center" {...rest} >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
        {quantity && (
          <Button
            w="10px"
            h="20px"
            fontSize="sm"
            ml="12px"
            color="blue.600"
            bg="gray.50"
          >
            {quantity}
          </Button>
        )}
      </ChakraLink>
    )
  }

  return (
    <ChakraLink as={Link} to={href} display="flex" align="center" {...rest} >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
      {quantity && (
        <Button
          w="10px"
          h="20px"
          fontSize="sm"
          ml="12px"
          color="blue.600"
          bg="gray.50"
        >
          {quantity}
        </Button>
      )}
    </ChakraLink>
  )
}