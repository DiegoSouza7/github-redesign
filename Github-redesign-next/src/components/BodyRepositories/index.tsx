import { SimpleGrid } from "@chakra-ui/react";
import { useUserContext } from "../../contexts/UserContext";
import { Card } from "./card";

type Repository = {
  id: number;
  name: string;
  description: string;
  updated_at: string;
  language: string;
  owner: {
    login: string;
  };
  license?: {
    key: string;
    name: string;
  };
}

export function Body() {
  const { repositories } = useUserContext()

  if (repositories) {
    return (
      <SimpleGrid
        flex="1"
        minChildWidth="300px"
        gap="4"
        align="flex-start"
        justify="center"
        ml="8"
      >
        {repositories.map((repo: Repository) => (
          <Card
            key={repo.id}
            repo={repo}
          />
        ))}
      </SimpleGrid>
    )
  }

  return <h1>Carregando</h1>
}