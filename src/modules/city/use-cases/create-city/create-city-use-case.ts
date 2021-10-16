import { UseCase } from '@/presentation/use-case'
import { CreateCityDto } from '../../dtos/create-city.dto'
import { City } from '../../infra/typeorm/entities/city'
import { CityRepository } from '../../repositories/city-repository'

export class CreateCityUseCase implements UseCase {
  constructor(private readonly cityRepository: CityRepository) {}

  async perform(cityData: CreateCityDto): Promise<City> {
    const city = await this.cityRepository.create(cityData)
    return city
  }
}
