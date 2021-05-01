import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { AiOutlineGithub } from 'react-icons/ai';
import { GiBinoculars } from 'react-icons/gi';
import { ImUsers } from 'react-icons/im';
import { MdExplore } from 'react-icons/md';
import { RiGitPullRequestFill, RiGitRepositoryLine, RiHandbagLine, RiStarSFill } from 'react-icons/ri';
import { VscIssues } from 'react-icons/vsc';
import { useUserContext } from "../../contexts/UserContext";
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Sidebar() {
  const {userProfile, userProfileStars} = useUserContext()

  if(userProfile && userProfileStars) {
    return (
      <Box
        as="aside"
        w="100%"
        maxWidth="250px"
        bg="blue.600"
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Stack spacing="1" align="flex-start" w="100%" pt="30px">
          <NavSection title="MAIN">
            <NavLink href="/pull" h="50px" alignItems="center" pl="25px" icon={RiGitPullRequestFill}>
              Pull Requests
            </NavLink>
            <NavLink href="/issues" h="50px" alignItems="center" pl="25px" icon={VscIssues}>
              Issues
            </NavLink>
            <NavLink href="/market" h="50px" alignItems="center" pl="25px" icon={RiHandbagLine}>
              Market
            </NavLink>
            <NavLink href="/explore" h="50px" alignItems="center" pl="25px" icon={MdExplore}>
              Explore
            </NavLink>
          </NavSection>
          <NavSection title="OTHER">
            <NavLink href="/overview" h="50px" alignItems="center" pl="25px" icon={GiBinoculars}>
              Overview
            </NavLink>
            <NavLink quantity={userProfile.public_repos} href="/repositories" h="50px" alignItems="center" pl="25px" icon={RiGitRepositoryLine}>
              Repositories
            </NavLink>
            <NavLink quantity={userProfileStars} href="/stars" h="50px" alignItems="center" pl="25px" icon={RiStarSFill}>
              Stars
            </NavLink>
            <NavLink quantity={userProfile.followers} href="/followers" h="50px" alignItems="center" pl="25px" icon={ImUsers}>
              Followers
            </NavLink>
          </NavSection>
        </Stack>
  
        <Flex
          flexDirection="column"
          justify="center"
          alignItems="center"
          marginTop="100%"
        >
          <Icon as={AiOutlineGithub} fontSize="100" />
          <Text
            fontWeight="bold"
            fontSize="2xl"
          >
            Github
          </Text>
        </Flex>
      </Box>
    )
  }

  return (
    <h1>Carregando</h1>
  )
}