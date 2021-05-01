import { Box, Button, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiExternalLink } from 'react-icons/fi';
import { HiUserAdd } from 'react-icons/hi';
import { ImUser, ImUsers } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { RiGitRepositoryLine, RiStarSFill } from "react-icons/ri";
import { useUserContext } from "../../contexts/UserContext";
import { NavLinkProfile } from "./NavLinkProfile";

export function Profile() {
  const { userProfile } = useUserContext()

  if (userProfile) {
    return (
      <Box
        bg="white"
        w="250px"
        minW="250px"
        h="100vh"
        textAlign="center"
        boxShadow="10px 5px 5px #eff0f1"
      >
        <Flex
          w="100%"
          h='300px'
          justifyContent="space-evenly"
          alignItems="center"
          mt="20px"
          flexDirection="column"
        >
          <Image
            src={userProfile.avatar_url}
            alt={userProfile.name}
            width="100px"
            height="100px"
            borderRadius="50%"
          />
          <Text
            color="gray.800"
            fontWeight={700}
            fontSize="xl"
            p="0 10px"
          >
            {userProfile.name}
          </Text>
          {userProfile.company && (
            <Text
              color="gray.600"
              fontWeight={500}
              fontSize="md"
              p="0 10px"
            >
              {userProfile.company}
            </Text>
          )}
          <Text
            color="gray.700"
            fontWeight={500}
            fontSize="md"
            p="0 10px"
          >
            {userProfile.bio}
          </Text>
        </Flex>
        <Flex
          w="80%"
          h="200px"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="column"
          m="0 auto"
          textAlign="left"
        >
          <Link
            w="100%"
            display="grid"
            gridTemplateColumns="30px 1fr"
            href={userProfile.blog}
          >
            <Icon
              as={FiExternalLink}
              fontSize="20"
              color="gray.700"
            />
            <Text
              color="gray.700"
              fontWeight="medium"
            >
              Social network
          </Text>
          </Link>
          <Link
            w="100%"
            display="grid"
            gridTemplateColumns="30px 1fr"
          >
            <Icon
              as={MdLocationOn}
              fontSize="20"
              color="gray.700"
            />
            <Text
              color="gray.700"
              fontWeight="medium"
            >
              {userProfile.location}
            </Text>
          </Link>
          <Link
            w="100%"
            display="grid"
            gridTemplateColumns="30px 1fr"
          >
            <Icon
              as={HiUserAdd}
              fontSize="20"
              color="gray.700"
            />
            <Text
              color="gray.700"
              fontWeight="medium"
            >
              {format(
                new Date(userProfile.created_at),
                'dd MMM yyyy',
                {
                  locale: ptBR,
                }
              )}
            </Text>
          </Link>
        </Flex>
        <Button
          border="1px solid blue"
          textColor="blue.500"
          borderRadius="30"
          w="120px"
        >
          Follow
      </Button>
        <Flex
          w="80%"
          h="300px"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="column"
          m="0 auto"
          mt="80px"
          textAlign="left"
        >
          <NavLinkProfile
            href="repositories"
            icon={RiGitRepositoryLine}
          >
            Repositories
          </NavLinkProfile>
          <NavLinkProfile
            href="stars"
            icon={RiStarSFill}
          >
            Stars
          </NavLinkProfile>
          <NavLinkProfile
            href="followers"
            icon={ImUsers}
          >
            Followers
          </NavLinkProfile>
          <NavLinkProfile
            href="following"
            icon={ImUser}
          >
            Following
          </NavLinkProfile>
        </Flex>
      </Box>
    )
  }
  return (
    <h1>carregando</h1>
  )
}