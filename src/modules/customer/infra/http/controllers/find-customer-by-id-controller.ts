import { HttpRequest, ok, fail } from '@/presentation/helpers/http-helper'
import { Controller, HttpResponse, UseCase } from '@/presentation/protocols'

export class FindCustomerByIdController implements Controller {
  constructor(private readonly usecase: UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { customerId } = httpRequest.params
      const customer = await this.usecase.perform(customerId)
      return ok(customer)
    } catch (error) {
      return fail(error)
    }
  }
}
