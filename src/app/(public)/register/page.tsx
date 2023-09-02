'use client'

import { registerUser, verifyEmailAvailability } from '@/service/user'
import { IRegisterUser } from '@/types'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { ActionsHolder, ContentHolder, ContentWrapper } from './styles'
import { Field } from '@/components/Field'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { ErrorArea } from '@/components/ErrorArea'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty('O Nome do usuário é obrigatório')
    .min(2, 'O Nome deve conter ao menos 2 caracteres'),
  email: z
    .string()
    .nonempty('O Email do usuário é obrigatório')
    .email('Valor não corresponde a um email'),
  password: z
    .string()
    .nonempty('A Senha do usuário é obrigatória')
    .min(8, 'Senha deve conter ao menos 8 caracteres'),
})

const Register = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  })
  const [formError, setFormError] = useState<string>('')

  const onSubmit = async (data: Record<string, string>) => {
    const emailVailability = await verifyEmailAvailability(data.email)

    if (!emailVailability.availability) {
      setFormError('Usuário já existente com esse email')
      return
    }

    if (emailVailability.error) {
      setFormError('Erro na conexão com o servidor')
      return
    }
    const registerStatus = await registerUser(data as unknown as IRegisterUser)

    if (!registerStatus.error) {
      router.push('/login')
    } else {
      setFormError('Erro na conexão com o servidor')
    }
  }

  return (
    <ContentWrapper>
      <ContentHolder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            label={'Nome'}
            placeholder={'nome'}
            type={'text'}
            error={errors.name || null}
            formProps={{ ...register('name') }}
          />

          <Field
            label={'Login'}
            placeholder={'email'}
            type={'email'}
            error={errors.email || null}
            formProps={{ ...register('email') }}
          />

          <Field
            label={'Senha'}
            placeholder={'senha'}
            type={'password'}
            error={errors.password || null}
            formProps={{ ...register('password') }}
          />

          {formError ? <ErrorArea message={formError} /> : null}

          <ActionsHolder>
            <Link href={'/login'}>Voltar para o login</Link>

            <Button value="Cadastrar" as="input" type="submit" />
          </ActionsHolder>
        </form>
      </ContentHolder>
    </ContentWrapper>
  )
}

export default Register
