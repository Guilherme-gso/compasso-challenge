import { UseCase } from '@/presentation/use-case'
import { TypeORMCityRepository } from '../../infra/typeorm/repositories/typeorm-city-repository'
import { CreateCityUseCase } from '@/modules/city/use-cases/create-city/create-city-use-case'

export function makeCreateCityUseCase(): UseCase {
  const typeormCityRepository = new TypeORMCityRepository()
  const usecase = new CreateCityUseCase(typeormCityRepository)
  return usecase
}
