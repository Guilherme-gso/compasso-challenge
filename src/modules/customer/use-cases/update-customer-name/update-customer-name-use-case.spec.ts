import { NotFoundCustomerError } from '@/presentation/errors/not-found-customer-error'
import { CustomerRepository } from '../../repositories/customer-repository'
import { FakeCustomerRepository } from '../../repositories/implementations/fake-customer-repository'
import { UpdateCustomerNameUseCase } from './update-customer-name-use-case'

let fakeCustomerRepository: CustomerRepository
let updateCustomerNameUseCase: UpdateCustomerNameUseCase

describe('update-customer-name-use-case', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository()
    updateCustomerNameUseCase = new UpdateCustomerNameUseCase(
      fakeCustomerRepository
    )
  })

  it('should update the customer name', async () => {
    const customer = await fakeCustomerRepository.create({
      fullName: 'Guilherme Oliveira',
      sex: 'M',
      age: 18,
      birthDate: '26/08/2003',
      cityOfResidence: 'Hortolândia'
    })
    const updatedCustomer = await updateCustomerNameUseCase.perform({
      customerId: customer.id,
      newCustomerName: 'Guilherme Gonçalves'
    })
    expect(customer.fullName).toBe(updatedCustomer.fullName)
  })

  it('should not change a non-existent customer', async () => {
    await expect(
      updateCustomerNameUseCase.perform({
        customerId: 'non-existent-id',
        newCustomerName: 'Guilherme Gonçalves'
      })
    ).rejects.toBeInstanceOf(NotFoundCustomerError)
  })
})
