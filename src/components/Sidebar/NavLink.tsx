import { Button, Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
  quantity?: number;
}

export function NavLink({ icon, quantity, children, href, ...rest }: NavLinkProps) {

  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest} >
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
    </ActiveLink>
  )
}