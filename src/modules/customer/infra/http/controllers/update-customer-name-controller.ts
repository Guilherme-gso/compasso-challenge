import { HttpRequest, ok, fail } from '@/presentation/helpers/http-helper'
import { Controller, HttpResponse, UseCase } from '@/presentation/protocols'

export class UpdateCustomerNameController implements Controller {
  constructor(private readonly usecase: UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { customerId, newCustomerName } = httpRequest.body
      const newCustomer = await this.usecase.perform({
        customerId,
        newCustomerName
      })
      return ok(newCustomer)
    } catch (error) {
      return fail(error)
    }
  }
}
