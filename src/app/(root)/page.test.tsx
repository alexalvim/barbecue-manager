import { render } from '@testing-library/react'

import RootPage from './page'
import { redirect } from 'next/navigation'

jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
}))

describe('RootPage page', () => {
  it('should redirect correctly', () => {
    render(<RootPage />)

    expect(redirect).toHaveBeenCalledWith('/login')
  })
})
