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
}


type UserContextProps = {
  userProfile: User;
  setSearchNameUser: (name: string) => void;
}

type UserProviderProps = {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextProps)

export function UserContextProvider({ children }: UserProviderProps) {
  const [userProfile, setUserProfile] = useState<User>()
  const [userName, setUserName] = useState('DiegoSouza7')

  function setSearchNameUser(name: string) {
    setUserName(name)
  }

  useEffect(() => {
    api.get(userName).then(response => {
      setUserProfile(response.data)
    })
  }, [userName])


  return (
    <UserContext.Provider value={{
      userProfile,
      setSearchNameUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}