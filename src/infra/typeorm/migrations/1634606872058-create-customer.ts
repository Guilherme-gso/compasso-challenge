import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createCustomer1634606872058 implements MigrationInterface {
  private customers = new Table({
    name: 'customers',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        isUnique: true
      },
      {
        name: 'fullName',
        type: 'varchar'
      },
      {
        name: 'sex',
        type: 'varchar',
        length: '1'
      },
      {
        name: 'birthDate',
        type: 'varchar'
      },
      {
        name: 'age',
        type: 'int'
      },
      {
        name: 'cityOfResidence',
        type: 'varchar'
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
    await queryRunner.createTable(this.customers)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.customers)
  }
}
