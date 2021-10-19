import { UseCase } from '@/presentation/protocols'
import { TypeORMCustomerRepository } from '../../infra/typeorm/repositories/typeorm-customer-repository'
import { CreateCustomerUseCase } from '../../use-cases/create-customer/create-customer-use-case'

export function makeCreateCustomerUseCase(): UseCase {
  const typeOrmCustomerRepository = new TypeORMCustomerRepository()
  const usecase = new CreateCustomerUseCase(typeOrmCustomerRepository)
  return usecase
}
