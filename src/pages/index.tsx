import { Button, Flex, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import { useUserContext } from '../contexts/UserContext'

type SearchFormData = {
  name: string;
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm()
  const history = useRouter()
  const { setSearchNameUser } = useUserContext()

  const handleSignIn: SubmitHandler<SearchFormData> = (data) => {
    const {name} = data
    setSearchNameUser(name.replace(/\s/g, ''))
    history.push(`repositories`)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bg="blue.400"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="blue.600"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="name"
            type="text"
            label="Nome do usuário github"
            placeholder="Nome sem espaços"
            {...register('name')}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          bgColor="green.500"
          _hover={{ bgColor: 'green.400' }}
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}