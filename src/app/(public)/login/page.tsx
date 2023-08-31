'use client';

import { setAuthToken } from "@/auth/login";
import { login } from "@/service/user";
import { ILoginAttributes } from "@/types";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data: Record<string, string>) => {
    const loginResponse = await login(data as unknown as ILoginAttributes)

    if(loginResponse.token) {
      setAuthToken(loginResponse.token);
      router.push('/home')
    }
  }

  return (
    <div>
      <p>Login</p>
      <Link href={'/register'}>
       Register
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('email', { required: true })} />
        <input type='password'  {...register('password', { required: true })} />
        
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login;