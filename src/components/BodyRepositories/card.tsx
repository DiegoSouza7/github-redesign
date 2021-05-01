import { Flex, Icon, Stack, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { ImHammer2 } from "react-icons/im";
import { IoMdGitCommit } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

type CardProps = {
  repo: {
    id: number;
    name: string;
    description: string;
    updated_at: string;
    language: string;
    stars: number;
    commits?: {
      totalCommits: number;
      commitisDates: string;
    };
    license?: {
      key: string;
      name: string;
    };
  }
}

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.2
    }
  },
}
const series = [
  { name: 'series1', data: [5, 2, 9, 6, 20, 1, 10] }
]

export function Card({ repo }: CardProps) {

  return (
    <Flex
      mt="20px"
      flexDirection="column"
      w="300px"
      h="350px"
      alignSelf="center"
      justifySelf="center"
      boxShadow="2px 2px 2px 2px#eff0f1"
    >
      <Stack
        flexDirection="column"
        spacing="2"
        w="90%"
        h="90%"
        m="auto auto"
      >
        <Text
          color="gray.600"
          fontWeight={700}
          fontSize="lg"
        >
          {repo.name}
        </Text>
        <Text
          color="gray.500"
          fontWeight={400}
        >
          {format(
            new Date(repo.updated_at),
            'dd MMM yyyy',
            {
              locale: ptBR,
            }
          )}
        </Text>
        <Text
          color="gray.600"
          fontWeight={500}
          noOfLines={3}
        >
          {repo.description}
        </Text>
        <Chart options={options} series={series} type="area" width="100%" />
        <Flex
          w="90%"
          justifyContent="space-between"
          alignItems="center"
          m="0 auto"
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
          >
            <Icon as={RiStarSFill} fontSize="16" color="gray.600" />
            <Text ml="5px" color="gray.600">583</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
          >
            <Icon as={IoMdGitCommit} fontSize="16" color="gray.600" />
            <Text ml="5px" color="gray.600">20</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
          >
            {repo.license && <Icon as={ImHammer2} fontSize="16" color="gray.600" />}
            {repo.license && <Text ml="5px" color="gray.600">MIT</Text>}
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  )
}