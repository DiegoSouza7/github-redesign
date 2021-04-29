import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex>
      <Sidebar />
      <Profile />
      <Header />
    </Flex>
  )
}