import { v4 as uuid } from 'uuid'
import { CreateCustomerDto } from '../../dtos/create-customer.dto'
import { UpdateCustomerDto } from '../../dtos/update-customer.dto'
import { Customer } from '../../infra/typeorm/entities/customer'
import { CustomerRepository } from '../customer-repository'

export class FakeCustomerRepository implements CustomerRepository {
  private customers: Array<Customer> = []

  save(customer: Customer): Customer {
    this.customers.push(customer)
    return customer
  }

  async create(customerData: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer()
    Object.assign(customer, { id: uuid(), ...customerData })
    this.save(customer)
    return customer
  }

  async findByName(customerName: string): Promise<Customer[]> {
    return this.customers.filter(customer => customer.fullName === customerName)
  }

  async findById(customerId: string): Promise<Customer | undefined> {
    return this.customers.find(customer => customer.id === customerId)
  }

  async removeById(customerId: string): Promise<void> {
    this.customers.filter(customer => customer.id !== customerId)
  }

  async updateCustomerName(
    updateCustomerDto: UpdateCustomerDto
  ): Promise<void> {
    const customerToBeUpdated = this.customers.find(
      customer => customer.id === updateCustomerDto.customerId
    )

    if (customerToBeUpdated) {
      customerToBeUpdated.fullName = updateCustomerDto.newCustomerName
    }
  }
}
