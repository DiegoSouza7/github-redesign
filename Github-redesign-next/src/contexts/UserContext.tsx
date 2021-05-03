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
  owner: {
    login: string;
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
  searchRepository: (name: string) => void;
  orderByrepositories: (order: string) => void;
}

type UserProviderProps = {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextProps)

export function UserContextProvider({ children }: UserProviderProps) {
  const [userProfile, setUserProfile] = useState<User>()
  const [userProfileStars, setUserProfileStars] = useState(0)
  const userName = 'DiegoSouza7'
  const [repositories, setRepositories] = useState<Repository[]>()

  async function searchRepository(name: string) {
    api.get(`/search/repositories?q=${userName}/${name}&per_page=10`).then(response => {
      setRepositories(response.data.items)
    })
  }

  function orderByrepositories(order: string) {
    if (order === 'date') {
      api.get(`users/${userName}/repos?sort=updated`).then(response => {
        setRepositories(response.data)
      })

    } else if (order === 'language') {
      api.get(`users/${userName}/repos?sort=language`).then(response => {
        setRepositories(response.data)
      })

    } else if (order === 'type') {
      api.get(`users/${userName}/repos?sort=type`).then(response => {
        setRepositories(response.data)
      })
    }
  }

  useEffect(() => {
    api.get(`users/${userName}`).then(response => {
      setUserProfile(response.data)
    })
    api.get(`users/${userName}/starred`).then(response => {
      setUserProfileStars(response.data.length)
    })
    api.get(`users/${userName}/repos`).then(response => {
      setRepositories(response.data)
    })

  }, [userName])

  return (
    <UserContext.Provider value={{
      userProfile,
      userName,
      userProfileStars,
      repositories,
      searchRepository,
      orderByrepositories,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}