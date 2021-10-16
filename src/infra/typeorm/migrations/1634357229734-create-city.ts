import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createCity1634357229734 implements MigrationInterface {
  private cities = new Table({
    name: 'cities',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        isUnique: true
      },
      {
        name: 'name',
        type: 'varchar',
        isUnique: true
      },
      {
        name: 'uf',
        type: 'varchar',
        length: '2'
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()'
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()'
      }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.cities)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.cities)
  }
}
