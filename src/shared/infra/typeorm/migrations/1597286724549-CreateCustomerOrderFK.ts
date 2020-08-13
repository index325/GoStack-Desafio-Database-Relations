import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateCustomerOrderFK1597286724549 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey(
      'orders',
      new TableForeignKey({
        name: 'CustomerOrder',
        columnNames: ['customer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'customers',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('customers', 'CustomerOrder');
  }
}
