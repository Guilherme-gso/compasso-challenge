import { NotFoundCityError } from '@/presentation/errors/not-found-city-error'
import { CityRepository } from '../../repositories/city-repository'
import { FakeCityRepository } from '../../repositories/implementations/fake-city-repository'
import { FindCityByNameUseCase } from './find-city-by-name-use-case'

let fakeCityRepository: CityRepository
let findCityByNameUseCase: FindCityByNameUseCase

describe('find-city-by-name-use-case', () => {
  beforeEach(() => {
    fakeCityRepository = new FakeCityRepository()
    findCityByNameUseCase = new FindCityByNameUseCase(fakeCityRepository)
  })

  it('should find city by name', async () => {
    const createdCity = await fakeCityRepository.create({
      name: 'São Paulo',
      uf: 'SP'
    })

    const city = await findCityByNameUseCase.perform(createdCity.name)
    expect(city).toHaveProperty('id')
  })

  it('should not find a non-existent city', async () => {
    await expect(
      findCityByNameUseCase.perform('non-existent-name')
    ).rejects.toBeInstanceOf(NotFoundCityError)
  })
})
