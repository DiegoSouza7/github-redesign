import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  location: string;
  public_repos: number;
  blog: string;
  company?: string;
}

type Repository = {
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

type UserContextProps = {
  userName: string;
  userProfile: User;
  userProfileStars: number;
  repositories: Repository[];
  setSearchNameUser: (name: string) => void;
}

type UserProviderProps = {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextProps)

export function UserContextProvider({ children }: UserProviderProps) {
  const [userProfile, setUserProfile] = useState<User>()
  const [userProfileStars, setUserProfileStars] = useState(0)
  const [userName, setUserName] = useState('DiegoSouza7')
  const [repositories, setRepositories] = useState<Repository[]>()
  const history = useRouter()

  function setSearchNameUser(name: string) {
    setUserName(name)
    history.push(`repositories`)
  }

  useEffect(() => {
    api.get(`users/${userName}`).then(response => {
      setUserProfile(response.data)
    })
    api.get(`users/${userName}/starred`).then(response => {
      setUserProfileStars(response.data.length)
    })
  }, [userName])

  useEffect(() => {

    api.get(`users/${userName}/repos`).then(response => {
      setRepositories(response.data)
    })

    if(repositories) {
      // repositories.map(repo => {
      //   console.log(repo)
      //   api.get(`repos/${userName}/${repo.name}/stargazers`).then(response => {
      //     setRepositories(repo.stars = response.data.length)
      //   })
  
      //   api.get(`repos/${userName}/${repo.name}/commits`).then(response => {
      //     return repo.commits = {
      //       totalCommits: response.data.length,
      //       commitisDates: response.data.map(date => {
      //         return date.commit.author.date
      //       })
      //     }
      //   })
      // })
    }
  }, [userName])

  return (
    <UserContext.Provider value={{
      userProfile,
      userName,
      userProfileStars,
      repositories,
      setSearchNameUser,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}