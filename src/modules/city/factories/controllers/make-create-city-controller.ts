import { makeCreateCityUseCase } from '@/modules/city/factories/use-cases/make-create-city-use-case'
import { CreateCityController } from '@/modules/city/infra/http/controllers/create-city-controller'
import { Controller } from '@/presentation/protocols'

export function makeCreateCityController(): Controller {
  const usecase = makeCreateCityUseCase()
  const controller = new CreateCityController(usecase)
  return controller
}
