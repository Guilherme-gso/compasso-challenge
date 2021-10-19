export class InvalidUfError extends Error {
  constructor() {
    super()
    this.name = 'InvalidUfError'
    this.message = 'invalid format in uf'
  }
}
