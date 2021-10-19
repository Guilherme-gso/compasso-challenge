import { TypeORMCityRepository } from '../../infra/typeorm/repositories/typeorm-city-repository'
import { UseCase } from '@/presentation/protocols'
import { FindCityByUfUseCase } from '../../use-cases/find-city-by-uf/find-city-by-uf-use-case'

export function makeFindCityByUfUseCase(): UseCase {
  const typeormCityRepository = new TypeORMCityRepository()
  const usecase = new FindCityByUfUseCase(typeormCityRepository)
  return usecase
}
