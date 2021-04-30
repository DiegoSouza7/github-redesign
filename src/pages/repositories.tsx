import { Flex } from "@chakra-ui/react";
import { Body } from "../components/BodyRepositories";
import { Header } from "../components/HeaderRepositories";
import { Profile } from "../components/Profile";
import { Sidebar } from "../components/Sidebar";

export default function Repositories() {
  return (
    <Flex
      gridTemplateColumns="220px 250px 1fr"
    >
      <Sidebar />
      <Profile />
      <Flex
        flexDirection="column"
        w="100%"
        overflowY="scroll"
        h="100vh"
      >
        <Header />
        <Body />
      </Flex>
    </Flex>

  )
}