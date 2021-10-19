import { HttpRequest, ok, fail } from '@/presentation/helpers/http-helper'
import { Controller, HttpResponse, UseCase } from '@/presentation/protocols'

export class FindCityByNameController implements Controller {
  constructor(private readonly usecase: UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name } = httpRequest.query
      const city = await this.usecase.perform(name)
      return ok(city)
    } catch (error) {
      return fail(error)
    }
  }
}
