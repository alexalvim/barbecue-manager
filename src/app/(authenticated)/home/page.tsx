'use client';

import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react"

const User = () => {
  const user = useContext(AuthContext)

  if(!user) {
    return (
      <>Carregando</>
    )
  }

  return (<p>Ola {user.name}</p>)
}

export default User