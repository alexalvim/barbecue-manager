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
    it('shold return formated value with cents', () => {
      const valueInCents = 900
      const formatedValue = '9,00'
      expect(formatCentsToCurrency(valueInCents, true)).toBe(formatedValue)
    })

    it('shold return formated value without cents', () => {
      const valueInCents = 900
      const formatedValue = '9'
      expect(formatCentsToCurrency(valueInCents, false)).toBe(formatedValue)
    })
  })
})
