'use client';

import { getAuthToken } from "@/auth/login"
import { getUserByToken } from "@/service/user";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const User = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<null | IUser>(null);

  useEffect(() => {
    const verifyLogin = async () => {
      const token = getAuthToken();
      if(token) {
        const user = await getUserByToken(token);

        if(user && !user.error) {
          setCurrentUser(user as IUser);
          return;
        } 
      }

      router.push('/login');
    }

    verifyLogin();
  }, [])

  if(!currentUser) {
    return <>Carregando</>
  }
  return (<p>Ola {currentUser.name}</p>)
}

export default User