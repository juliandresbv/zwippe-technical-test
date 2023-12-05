import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionsEntity } from './framework/db/entities/transactions.entity';
import { TransactionsUseCases } from './application/use-cases/transactions/transactions.use-cases';
import { TransactionsController } from './adapter/controllers/transactions/transactions.controller';
import { TransactionsImplRepository } from './framework/db/repositories/transactions-impl.respository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionsEntity]),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: '0.0.0.0',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'postgres',
        entities: [TransactionsEntity],
        synchronize: true,
      }),
    }),
  ],
  controllers: [TransactionsController],
  providers: [
    TransactionsUseCases,
    {
      provide: 'TransactionsRepository',
      useClass: TransactionsImplRepository,
    },
  ],
})
export class AppModule {}
