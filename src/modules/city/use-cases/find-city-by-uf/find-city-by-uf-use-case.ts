import { UseCase } from '@/presentation/protocols/use-case'
import { City } from '../../infra/typeorm/entities/city'
import { CityRepository } from '../../repositories/city-repository'

export class FindFakeCityByUfUseCase implements UseCase {
  constructor(private readonly cityRepository: CityRepository) {}

  async perform(uf: string): Promise<City> {
    const city = await this.cityRepository.findByUf(uf)

    if (!city) {
      // throws error
      throw new Error()
    }

    return city
  }
}
