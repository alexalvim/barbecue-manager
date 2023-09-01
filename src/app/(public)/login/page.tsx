'use client';

import { setAuthToken } from "@/auth/login";
import { login } from "@/service/user";
import { ILoginAttributes } from "@/types";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ActionsHolder, ContentHolder, ContentWrapper } from "./styles";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { useState } from "react";
import { ErrorArea } from "@/components/ErrorArea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginUserFormSchema = z.object({
  email: z.string()
    .nonempty('O Email do usuário é obrigatório')
    .email('Valor não corresponde a um email'),
  password: z.string()
    .nonempty('A Senha do usuário é obrigatória')
    .min(8, 'Senha deve conter ao menos 8 caracteres'),
})

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginUserFormSchema)
  });
  const [formError, setFormError] = useState<string>('');
  const onSubmit = async (data: Record<string, string>) => {
    const loginResponse = await login(data as unknown as ILoginAttributes)

    if(loginResponse.token) {
      setAuthToken(loginResponse.token);
      router.push('/home')
    } else {
      if(loginResponse.error === 'Email or password wrong') {
        setFormError('Email ou senha incorretos')
      } else {
        setFormError('Erro na conexão com o servidor')
      }
    } 
  }

  return (
    <ContentWrapper>
      <ContentHolder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            label={'Login'}
            placeholder={'email'}
            type={'email'}
            error={errors.email || null}
            formProps={{...register('email')}}/>

          <Field
            label={'Senha'}
            placeholder={'senha'}
            type={'password'}
            error={errors.password || null}
            formProps={{...register('password')}}/>

          {formError ? 
            <ErrorArea
              message={formError}/>: null}

          <ActionsHolder>
            <Link href={'/register'}>
              Cadastrar-se
            </Link>
            
            <Button
              value='Entrar'
              as='input'
              type="submit" />
          </ActionsHolder>
        </form>
      </ContentHolder>
    </ContentWrapper>
  )
}

export default Login;