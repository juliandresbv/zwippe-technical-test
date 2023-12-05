import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionsEntity } from './framework/db/entities/transactions.entity';
import { TransactionsController } from './adapter/controllers/transactions/transactions.controller';
import { TransactionsImplRepository } from './framework/db/repositories/transactions-impl.respository';
import { TransactionsImplUseCases } from './application/use-cases/transactions/transactions-impl.use-cases';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionsEntity]),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: '0.0.0.0',
        port: 5432,
        username: 'admin',
        password: 'admin',
        database: 'postgres',
        entities: [TransactionsEntity],
        synchronize: true,
      }),
    }),
  ],
  controllers: [TransactionsController],
  providers: [
    {
      provide: 'TransactionsUseCases',
      useClass: TransactionsImplUseCases,
    },
    {
      provide: 'TransactionsRepository',
      useClass: TransactionsImplRepository,
    },
  ],
})
export class AppModule {}
