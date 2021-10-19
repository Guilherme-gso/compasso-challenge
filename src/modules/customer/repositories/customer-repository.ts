import { CreateCustomerDto } from '../dtos/create-customer.dto'
import { UpdateCustomerDto } from '../dtos/update-customer.dto'
import { Customer } from '../infra/typeorm/entities/customer'

export interface CustomerRepository {
  create(customerData: CreateCustomerDto): Promise<Customer>
  findByName(customerName: string): Promise<Customer[]>
  findById(customerId: string): Promise<Customer | undefined>
  removeById(customerId: string): Promise<void>
  updateCustomerName(updateCustomerDto: UpdateCustomerDto): Promise<void>
}
