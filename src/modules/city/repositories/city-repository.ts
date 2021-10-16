import { CreateCityDto } from '../dtos/create-city.dto'
import { City } from '../infra/typeorm/entities/city'

export interface CityRepository {
  create(cityData: CreateCityDto): Promise<City>
}
