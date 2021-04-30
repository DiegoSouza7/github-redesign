import { Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { Card } from "./card";

export function Body() {
  return (
    <SimpleGrid
      flex="1"
      minChildWidth="300px"
      gap="4"
      align="flex-start"
      justify="center"
      ml="8"
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </SimpleGrid>
  )
}