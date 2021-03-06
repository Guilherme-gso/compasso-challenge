import {
  Connection,
  ObjectType,
  Repository,
  createConnection,
  getConnection,
  getConnectionManager,
  getRepository
} from 'typeorm'
import { ConnectionNotFoundError } from './errors'

export class PgConnection {
  private static instance: PgConnection

  private connection?: Connection

  private constructor() {}

  static getInstance(): PgConnection {
    if (!PgConnection.instance) PgConnection.instance = new PgConnection()
    return PgConnection.instance
  }

  async connect(): Promise<void> {
    const hasDefaultConnection = getConnectionManager().has('default')
    if (hasDefaultConnection) this.connection = getConnection()
    else this.connection = await createConnection()
  }

  async disconnect(): Promise<void> {
    if (!this.connection) throw new ConnectionNotFoundError()
    await getConnection().close()
    this.connection = undefined
  }

  getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
    if (!this.connection) throw new ConnectionNotFoundError()
    return getRepository(entity)
  }
}
