import { HttpRequest, ok, fail } from '@/presentation/helpers/http-helper'
import { Controller, HttpResponse, UseCase } from '@/presentation/protocols'

export class CreateCustomerController implements Controller {
  constructor(private readonly usecase: UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { fullName, age, birthDate, cityOfResidence, sex } =
        httpRequest.body

      const customer = await this.usecase.perform({
        fullName,
        age,
        birthDate,
        cityOfResidence,
        sex
      })

      return ok(customer)
    } catch (error) {
      return fail(error)
    }
  }
}
