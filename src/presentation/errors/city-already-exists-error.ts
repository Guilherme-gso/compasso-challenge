export class CityAlreadyExistsError extends Error {
  constructor() {
    super()
    this.name = 'CityAlreadyExistsError'
    this.message = 'city already created'
  }
}
