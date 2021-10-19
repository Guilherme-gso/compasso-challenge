import { UseCase } from '@/presentation/protocols'
import { TypeORMCustomerRepository } from '../../infra/typeorm/repositories/typeorm-customer-repository'
import { FindCustomerByIdUseCase } from '../../use-cases/find-customer-by-id/find-customer-by-id-use-case'

export function makeFindCustomerByIdUseCase(): UseCase {
  const typeOrmCustomerRepository = new TypeORMCustomerRepository()
  const usecase = new FindCustomerByIdUseCase(typeOrmCustomerRepository)
  return usecase
}
