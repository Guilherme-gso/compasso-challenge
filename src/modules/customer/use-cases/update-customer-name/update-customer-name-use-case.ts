import { NotFoundCustomerError } from '@/presentation/errors/not-found-customer-error'
import { UseCase } from '@/presentation/protocols/use-case'
import { UpdateCustomerDto } from '../../dtos/update-customer.dto'
import { Customer } from '../../infra/typeorm/entities/customer'
import { CustomerRepository } from '../../repositories/customer-repository'

export class UpdateCustomerNameUseCase implements UseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async perform(updateCustomerData: UpdateCustomerDto): Promise<Customer> {
    const customerExists = await this.customerRepository.findById(
      updateCustomerData.customerId
    )

    if (!customerExists) {
      throw new NotFoundCustomerError()
    }

    await this.customerRepository.updateCustomerName(updateCustomerData)
    customerExists.fullName = updateCustomerData.newCustomerName
    return customerExists
  }
}
