import { UseCase } from '@/presentation/protocols'
import { TypeORMCustomerRepository } from '../../infra/typeorm/repositories/typeorm-customer-repository'
import { FindCustomerByNameUseCase } from '../../use-cases/find-customer-by-name/find-customer-by-name-use-case'

export function makeFindCustomerByNameUseCase(): UseCase {
  const typeOrmCustomerRepository = new TypeORMCustomerRepository()
  const usecase = new FindCustomerByNameUseCase(typeOrmCustomerRepository)
  return usecase
}
