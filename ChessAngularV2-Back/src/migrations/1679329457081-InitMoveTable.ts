/* eslint-disable prettier/prettier */
import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableColumn,
} from "typeorm"

export class InitMoveTable1679329457081 implements MigrationInterface {
    name='InitMoveTable1679329457081';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'move',
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
                        length: '30',
                        name: 'name',
                        isNullable: false
                    }),
                    new TableColumn({
                        type: 'text',
                        name: 'description',
                        isNullable: true
                    }),
                    new TableColumn({
                        type: 'text',
                        name: 'url',
                        isNullable: true
                    })
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('chess')
    }

}
