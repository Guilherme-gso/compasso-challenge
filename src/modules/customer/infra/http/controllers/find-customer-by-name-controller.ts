import { HttpRequest, ok, fail } from '@/presentation/helpers/http-helper'
import { Controller, HttpResponse, UseCase } from '@/presentation/protocols'

export class FindCustomerByNameController implements Controller {
  constructor(private readonly usecase: UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { customerName } = httpRequest.query
      const customers = await this.usecase.perform(customerName)
      return ok(customers)
    } catch (error) {
      return fail(error)
    }
  }
}
