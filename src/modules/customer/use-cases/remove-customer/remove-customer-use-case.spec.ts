import { NotFoundCustomerError } from '@/presentation/errors/not-found-customer-error'
import { CustomerRepository } from '../../repositories/customer-repository'
import { FakeCustomerRepository } from '../../repositories/implementations/fake-customer-repository'
import { RemoveCustomerUseCase } from './remove-customer-use-case'

let fakeCustomerRepository: CustomerRepository
let removeCustomerUseCase: RemoveCustomerUseCase

describe('remove-customer-use-case', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository()
    removeCustomerUseCase = new RemoveCustomerUseCase(fakeCustomerRepository)
  })

  it('should delete an customer', async () => {
    const createdCustomer = await fakeCustomerRepository.create({
      fullName: 'Guilherme Oliveira',
      sex: 'M',
      age: 18,
      birthDate: '26/08/2003',
      cityOfResidence: 'Hortolândia'
    })

    const removeCustomerById = jest.spyOn(fakeCustomerRepository, 'removeById')
    await removeCustomerUseCase.perform(createdCustomer.id)
    expect(removeCustomerById).toHaveBeenCalledWith(createdCustomer.id)
    expect(removeCustomerById).toHaveBeenCalledTimes(1)
  })

  it('should not remove a non-existent customer', async () => {
    await expect(
      removeCustomerUseCase.perform('non-existent-id')
    ).rejects.toBeInstanceOf(NotFoundCustomerError)
  })
})
