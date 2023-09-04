import { useContext } from 'react'
import { ContentHolder, ContentWrapper, HeaderTitle } from './styles'
import { AuthContext } from '@/context/AuthProvider'
import { LinkButton } from '../Link'
import { clearAuthToken } from '@/auth/login'
import { useRouter } from 'next/navigation'

export const Header = () => {
  const user = useContext(AuthContext)
  const router = useRouter()

  if (!user) {
    return (
      <ContentWrapper>
        <ContentHolder>Carregando</ContentHolder>
      </ContentWrapper>
    )
  }
  return (
    <ContentWrapper>
      <ContentHolder>
        <div>
          <HeaderTitle>Olá, {user?.name}</HeaderTitle>
          <LinkButton
            onClick={() => {
              clearAuthToken()
              router.push('/login')
            }}
          >
            Sair
          </LinkButton>
        </div>
      </ContentHolder>
    </ContentWrapper>
  )
}
