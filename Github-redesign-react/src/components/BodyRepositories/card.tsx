import { Flex, Icon, Text, theme } from "@chakra-ui/react";
import { ImHammer2 } from "react-icons/im";
import { IoMdGitCommit } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Chart from 'react-apexcharts'

type CardProps = {
  repo: {
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
}

type Commit = {
  commit: {
    author: {
      date: string
    }
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
  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ]
  }
}

export function Card({ repo }: CardProps) {
  const [stars, setStars] = useState(0)
  const [totalCommits, setTotalCommits] = useState(0)
  const [commitsDates, setCommitsDates] = useState([''])

  const series = [
    {
      name: 'commitsDates', data: [
        commitsDates.filter((date) => date === 'Jan').length,
        commitsDates.filter((date) => date === 'fev').length,
        commitsDates.filter((date) => date === 'mar').length,
        commitsDates.filter((date) => date === 'abr').length,
        commitsDates.filter((date) => date === 'mai').length,
        commitsDates.filter((date) => date === 'jun').length,
        commitsDates.filter((date) => date === 'Jul').length,
        commitsDates.filter((date) => date === 'ago').length,
        commitsDates.filter((date) => date === 'set').length,
        commitsDates.filter((date) => date === 'out').length,
        commitsDates.filter((date) => date === 'nov').length,
        commitsDates.filter((date) => date === 'dez').length,
      ]
    }
  ]

  useEffect(() => {
    api.get(`repos/${repo.owner.login}/${repo.name}/stargazers`).then(response => {
      setStars(response.data.length)
    })
    api.get(`repos/${repo.owner.login}/${repo.name}/commits`).then(response => {
      setTotalCommits(response.data.length)
      const commitsDates = response.data.map((commit: Commit) =>
        format(
          new Date(commit.commit.author.date),
          'MMM',
          {
            locale: ptBR,
          }
        ))
      setCommitsDates(commitsDates)
    })
  }, [repo])

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
      <Flex
        flexDirection="column"
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
          mt="5px"
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
          mt="5px"
        >
          {repo.description}
        </Text>
        <Chart mt="5px" options={options} series={series} type="area" width="100%" />
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
            <Text ml="5px" color="gray.600">{stars}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
          >
            <Icon as={IoMdGitCommit} fontSize="16" color="gray.600" />
            <Text ml="5px" color="gray.600">{totalCommits}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
          >
            {repo.license && <Icon as={ImHammer2} fontSize="16" color="gray.600" />}
            {repo.license && <Text ml="5px" color="gray.600">MIT</Text>}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}