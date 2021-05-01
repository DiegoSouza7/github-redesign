import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import {BsSearch} from 'react-icons/bs'
import {FaRegUser} from 'react-icons/fa'
import {BiBell} from 'react-icons/bi'
import {IoIosArrowDown, IoMdArrowDropdown} from 'react-icons/io'
import { useUserContext } from "../../contexts/UserContext";
import { ImSearch } from "react-icons/im";
import { SubmitHandler, useForm } from "react-hook-form";

type SearchFormData = {
  search: string;
}

export function Header () {
  const { register, handleSubmit } = useForm()
  const {userProfile, searchRepository, orderByrepositories} = useUserContext()

  const handleSearch: SubmitHandler<SearchFormData> = (data) => {
    searchRepository(data.search)
  }

  function handleOrderRepositories(order: string) {
    orderByrepositories(order)
  }

  if(userProfile) {
    return (
      <Flex
        w="100%"
        h="150px"
        borderBottom="1px solid #eff0f1"
        flexDirection="column"
      >
        <Flex
          w="90%"
          justifyContent="space-between"
          alignItems="center"
          h="30px"
          m="0 auto"
        >
          <Icon as={BsSearch} color="gray.600" cursor="pointer" />
          <Flex>
            <Flex w="40px" cursor="pointer">
              <Icon as={BiBell} color="gray.600" />
              <Icon as={IoMdArrowDropdown} color="gray.600" />
            </Flex>
            <Flex w="40px" cursor="pointer">
              <Icon as={FaRegUser} color="gray.600" />
              <Icon as={IoMdArrowDropdown} color="gray.600" />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="90%"
          h="30px"
          m="0 auto"
          mt="20px"
        >
          <Text
            color="gray.600"
            fontSize="2xl"
            fontWeight={700}
          >
            Repositories
          </Text>
        </Flex>
        <Flex
          w="90%"
          h="30px"
          m="0 auto"
          mt="20px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            color="gray.600"
            fontSize="lg"
            fontWeight={700}
          >
            {userProfile.public_repos} Repositories has created so far
          </Text>

          <Flex
            as="form"
            justifyContent="space-between"
            alignItems="center"
            onSubmit={handleSubmit(handleSearch)}
          >
            <Button type="submit" bg="transparent" border="none" _hover={{
              bg: "transparent", border: "none"
            }}>
              <Icon
                as={ImSearch}
                color="gray.600"
                fontSize="20"
              />
            </Button>
            <Input
              name="search"
              placeholder="SEARCH"
              color="gray.600"
              border="none"
              {...register('search')}
            />
          </Flex>
          
          <Flex
            justifyContent="space-between"
            alignItems="center"
            w="300px"
          >
            <Flex
              justifyContent="space-evenly"
              onClick={() => handleOrderRepositories('type')}
              cursor="pointer"
            >
              <Text
                color="gray.600"
                fontWeight={700}
              >
                TYPE
              </Text>
              <Icon as={IoIosArrowDown} color="gray.600" ml="5px" />
            </Flex>
            <Flex
              justifyContent="space-evenly"
              onClick={() => handleOrderRepositories('language')}
              cursor="pointer"
            >
              <Text
                color="gray.600"
                fontWeight={700}
              >
                LANGUAGE
              </Text>
              <Icon as={IoIosArrowDown} color="gray.600" ml="5px" />
            </Flex>
            <Flex
              justifyContent="space-evenly"
              onClick={() => handleOrderRepositories('date')}
              cursor="pointer"
            >
              <Text
                color="gray.600"
                fontWeight={700}
              >
                DATE
              </Text>
              <Icon as={IoIosArrowDown} color="gray.600" ml="5px" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
  }

  return (
    <h1>Carregando</h1>
  )
}