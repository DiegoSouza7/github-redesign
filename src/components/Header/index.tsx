import { Flex, Icon, Text } from "@chakra-ui/react";
import {BsSearch} from 'react-icons/bs'
import {FaRegUser} from 'react-icons/fa'
import {BiBell} from 'react-icons/bi'
import {IoMdArrowDropdown} from 'react-icons/io'
import { useUserContext } from "../../contexts/UserContext";

export function Header () {
  const {userProfile} = useUserContext()
  return (
    <Flex
      flex={1}
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
      >
        <Text
          color="gray.600"
          fontSize="lg"
          fontWeight={700}
        >
          {userProfile.public_repos} Repositories has created so far
        </Text>
      </Flex>
    </Flex>
  )
}