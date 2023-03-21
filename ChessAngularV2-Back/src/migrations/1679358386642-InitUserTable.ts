/* eslint-disable prettier/prettier */
import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableColumn,
} from "typeorm"

export class InitUserTable1679358386642 implements MigrationInterface {
    name='InitUserTable1679358386642';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'user',
                columns: [
                    new TableColumn({
                        type: 'int',
                        name: 'id',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: "increment",
                        isNullable: false
                    }),
                    new TableColumn({
                        type: 'varchar',
                        length: '200',
                        name: 'username',
                        isNullable: false
                    }),
                    new TableColumn({
                        type: 'text',
                        name: 'password',
                        isNullable: false
                    }),
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
