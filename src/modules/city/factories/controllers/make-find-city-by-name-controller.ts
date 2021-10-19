import { Controller } from '@/presentation/protocols'
import { FindCityByNameController } from '../../infra/http/controllers/find-city-by-name-controller'
import { makeFindCityByNameUseCase } from '../use-cases/make-find-city-by-name-use-case'

export function makeFindCityByNameController(): Controller {
  const usecase = makeFindCityByNameUseCase()
  const controller = new FindCityByNameController(usecase)
  return controller
}
