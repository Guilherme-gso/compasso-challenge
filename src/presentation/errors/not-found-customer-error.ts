export class NotFoundCustomerError extends Error {
  constructor() {
    super()
    this.name = 'NotFoundCustomerError'
    this.message = 'not found customer'
  }
}
