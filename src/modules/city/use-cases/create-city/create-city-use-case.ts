import { CityAlreadyExistsError } from '@/presentation/errors/city-already-exists-error'
import { InvalidUfError } from '@/presentation/errors/invalid-uf-error'
import { MissingParamError } from '@/presentation/errors/missing-param-error'
import { UseCase } from '@/presentation/protocols/use-case'
import { CreateCityDto } from '../../dtos/create-city.dto'
import { City } from '../../infra/typeorm/entities/city'
import { CityRepository } from '../../repositories/city-repository'

export class CreateCityUseCase implements UseCase {
  constructor(private readonly cityRepository: CityRepository) {}

  async perform(cityData: CreateCityDto): Promise<City> {
    const cityExists = await this.cityRepository.findByName(cityData.name)
    if (!cityData.name) throw new MissingParamError('name')
    if (!cityData.uf) throw new MissingParamError('uf')
    if (cityExists) throw new CityAlreadyExistsError()
    if (cityData.uf.length !== 2) throw new InvalidUfError()
    const city = await this.cityRepository.create(cityData)
    return city
  }
}
