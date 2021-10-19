import { HttpRequest, ok, fail } from '@/presentation/helpers/http-helper'
import { Controller, HttpResponse, UseCase } from '@/presentation/protocols'

export class FindCityByUfController implements Controller {
  constructor(private readonly usecase: UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { uf } = httpRequest.query
      const cities = await this.usecase.perform(uf)
      return ok(cities)
    } catch (error) {
      return fail(error)
    }
  }
}
