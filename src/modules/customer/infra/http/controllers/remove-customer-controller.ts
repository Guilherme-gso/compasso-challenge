import { HttpRequest, ok, fail } from '@/presentation/helpers/http-helper'
import { Controller, HttpResponse, UseCase } from '@/presentation/protocols'

export class RemoveCustomerController implements Controller {
  constructor(private readonly usecase: UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { customerId } = httpRequest.params
      await this.usecase.perform(customerId)
      return ok({ success: true })
    } catch (error) {
      return fail(error)
    }
  }
}
