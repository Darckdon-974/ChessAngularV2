export const dbProperties: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'chess',
  synchronize: true,
  logging: false,
  entities: ['src/move/entities/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  subscribers: ['src/**/**.subsciber{.ts,.js}'],
  cli: {
    entitiesDir: 'src/move/entities',
    migrationsDir: 'src/migrations',
  },
};
