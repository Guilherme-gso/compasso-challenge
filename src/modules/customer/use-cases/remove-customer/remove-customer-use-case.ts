import { NotFoundCustomerError } from '@/presentation/errors/not-found-customer-error'
import { UseCase } from '@/presentation/protocols/use-case'
import { CustomerRepository } from '../../repositories/customer-repository'

export class RemoveCustomerUseCase implements UseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async perform(customerId: string): Promise<void> {
    const hasCustomerWithCustomerId = await this.customerRepository.findById(
      customerId
    )

    if (!hasCustomerWithCustomerId) {
      throw new NotFoundCustomerError()
    }

    await this.customerRepository.removeById(customerId)
  }
}
