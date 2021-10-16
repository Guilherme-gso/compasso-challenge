import { UseCase } from '@/presentation/protocols/use-case'
import { Controller } from '@/presentation/protocols/controller'
import {
  created,
  HttpResponse,
  HttpRequest
} from '@/presentation/helpers/http-helper'

export class CreateCityController implements Controller {
  constructor(private readonly usecase: UseCase) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, uf } = httpRequest.body
    await this.usecase.perform({ name, uf })
    return created()
  }
}
