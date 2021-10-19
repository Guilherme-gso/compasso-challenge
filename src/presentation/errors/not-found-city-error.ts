export class NotFoundCityError extends Error {
  constructor() {
    super()
    this.name = 'NotFoundCityError'
    this.message = 'not found city'
  }
}
