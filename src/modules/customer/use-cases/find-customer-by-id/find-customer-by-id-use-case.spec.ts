import { NotFoundCustomerError } from '@/presentation/errors/not-found-customer-error'
import { CustomerRepository } from '../../repositories/customer-repository'
import { FakeCustomerRepository } from '../../repositories/implementations/fake-customer-repository'
import { FindCustomerByIdUseCase } from './find-customer-by-id-use-case'

let fakeCustomerRepository: CustomerRepository
let findCustomerByIdUseCase: FindCustomerByIdUseCase

describe('find-customer-by-id-use-case', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository()
    findCustomerByIdUseCase = new FindCustomerByIdUseCase(
      fakeCustomerRepository
    )
  })

  it('should find customer by id', async () => {
    const createdCustomer = await fakeCustomerRepository.create({
      fullName: 'Guilherme Oliveira',
      sex: 'M',
      age: 18,
      birthDate: '26/08/2003',
      cityOfResidence: 'Hortolândia'
    })

    const customer = await findCustomerByIdUseCase.perform(createdCustomer.id)
    expect(customer).toHaveProperty('id')
  })

  it('should not find a non-existent customer', async () => {
    await expect(
      findCustomerByIdUseCase.perform('non-existent-id')
    ).rejects.toBeInstanceOf(NotFoundCustomerError)
  })
})
