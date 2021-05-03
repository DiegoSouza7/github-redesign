import { Flex } from "@chakra-ui/react";
import { Profile } from "../components/Profile";
import { Sidebar } from "../components/Sidebar";

export function Rest() {
  return (
    <Flex>
      <Sidebar />
      <Profile />
    </Flex>
  )
}