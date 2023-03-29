/* eslint-disable prettier/prettier */
export const dbProperties:any = {
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: '',
    database: 'chestangularv2',
    synchronize: true,
    logging: false,
    entities: ['src/move/entities/**/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
    subscribers: ['src/**/**.subsciber{.ts,.js}'],
    cli: {
        entitiesDir: 'src/move/entities',
        migrationsDir: 'src/migrations'
    }
  };