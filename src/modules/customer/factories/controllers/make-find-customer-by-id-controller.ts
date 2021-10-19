import { Controller } from '@/presentation/protocols'
import { FindCustomerByIdController } from '../../infra/http/controllers/find-customer-by-id-controller'
import { makeFindCustomerByIdUseCase } from '../use-cases/make-find-customer-by-id-use-case'

export function makeFindCustomerByIdController(): Controller {
  const usecase = makeFindCustomerByIdUseCase()
  const controller = new FindCustomerByIdController(usecase)
  return controller
}
