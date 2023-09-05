import { formatCurrencyToCents, formatCentsToCurrency } from './formatters'

describe('Formatters', () => {
  describe('formatCurrencyToCents', () => {
    it('shold return value in cents', () => {
      const testValue = '10,52'
      const testValueInCents = 1052
      expect(formatCurrencyToCents(testValue)).toBe(testValueInCents)
    })

    it('shold return value in cents with completed value', () => {
      const testValue = '10'
      const testValueInCents = 1000
      expect(formatCurrencyToCents(testValue)).toBe(testValueInCents)
    })
  })

  describe('formatCentsToCurrency', () => {
    it('shold return formated value', () => {
      const valueInCents = 950
      const formatedValue = '9,50'
      expect(formatCentsToCurrency(valueInCents)).toBe(formatedValue)
    })
  })
})
