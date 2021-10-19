export class MissingParamError extends Error {
  constructor(param: string) {
    super()
    this.name = 'Missing param error'
    this.message = `${param} is missing`
  }
}
