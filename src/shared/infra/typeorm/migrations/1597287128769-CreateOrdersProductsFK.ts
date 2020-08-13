import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateOrdersProductsFK1597287128769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey(
      'orders_products',
      new TableForeignKey({
        name: 'OrderFK',
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'orders_products',
      new TableForeignKey({
        name: 'ProductFK',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('orders_products', 'OrderFK');
    await queryRunner.dropForeignKey('orders_products', 'ProductFK');
  }
}
