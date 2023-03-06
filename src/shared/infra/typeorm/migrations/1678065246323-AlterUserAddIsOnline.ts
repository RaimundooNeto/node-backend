import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterUserAddIsOnline1678065246323 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'isOnline',
        type: 'boolean',
        default: false,
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'isOnline')
  }
}
