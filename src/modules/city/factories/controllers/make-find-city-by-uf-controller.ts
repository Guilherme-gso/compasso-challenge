import { Controller } from '@/presentation/protocols'
import { FindCityByUfController } from '../../infra/http/controllers/find-city-by-uf-controller'
import { makeFindCityByUfUseCase } from '../use-cases/make-find-city-by-uf-use-case'

export function makeFindCityByUfController(): Controller {
  const usecase = makeFindCityByUfUseCase()
  const controller = new FindCityByUfController(usecase)
  return controller
}
