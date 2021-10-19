import { Controller } from '@/presentation/protocols'
import { FindCustomerByNameController } from '../../infra/http/controllers/find-customer-by-name-controller'
import { makeFindCustomerByNameUseCase } from '../use-cases/make-find-customer-by-name-use-case'

export function makeFindCustomerByNameController(): Controller {
  const usecase = makeFindCustomerByNameUseCase()
  const controller = new FindCustomerByNameController(usecase)
  return controller
}
