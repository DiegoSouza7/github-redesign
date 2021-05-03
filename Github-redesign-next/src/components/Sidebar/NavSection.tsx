import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box w="100%">
      <Text pl="20px" fontSize="small" fontWeight="bold" color="gray.300">{title}</Text>
      <Stack spacing="1" mt="4" mb="4" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}