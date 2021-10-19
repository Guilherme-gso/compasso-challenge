import { UseCase } from '@/presentation/protocols'
import { TypeORMCustomerRepository } from '../../infra/typeorm/repositories/typeorm-customer-repository'
import { UpdateCustomerNameUseCase } from '../../use-cases/update-customer-name/update-customer-name-use-case'

export function makeUpdateCustomerNameUseCase(): UseCase {
  const typeOrmCustomerRepository = new TypeORMCustomerRepository()
  const usecase = new UpdateCustomerNameUseCase(typeOrmCustomerRepository)
  return usecase
}
