import { TypeORMCityRepository } from '../../infra/typeorm/repositories/typeorm-city-repository'
import { UseCase } from '@/presentation/protocols'
import { FindCityByNameUseCase } from '../../use-cases/find-city-by-name/find-city-by-name-use-case'

export function makeFindCityByNameUseCase(): UseCase {
  const typeormCityRepository = new TypeORMCityRepository()
  const usecase = new FindCityByNameUseCase(typeormCityRepository)
  return usecase
}
