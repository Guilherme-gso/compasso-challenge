export class InvalidCustomerSexError extends Error {
  constructor() {
    super()
    this.name = 'InvalidCustomerSexError'
    this.message = 'invalid customer sex'
  }
}
