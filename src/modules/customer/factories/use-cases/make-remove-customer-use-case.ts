import { UseCase } from '@/presentation/protocols'
import { TypeORMCustomerRepository } from '../../infra/typeorm/repositories/typeorm-customer-repository'
import { RemoveCustomerUseCase } from '../../use-cases/remove-customer/remove-customer-use-case'

export function makeRemoveCustomerUseCase(): UseCase {
  const typeOrmCustomerRepository = new TypeORMCustomerRepository()
  const usecase = new RemoveCustomerUseCase(typeOrmCustomerRepository)
  return usecase
}
