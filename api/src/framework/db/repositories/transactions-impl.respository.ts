import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TransactionsEntity } from '../entities/transactions.entity';
import { TransactionsModel } from '../../../domain/models/transactions.model';
import { TransactionsRepository } from '../../../domain/repositories/interfaces/transactions.repository';

@Injectable()
export class TransactionsImplRepository implements TransactionsRepository {
  constructor(
    @InjectRepository(TransactionsEntity)
    private readonly transactionsRepository: Repository<TransactionsEntity>,
  ) {}

  public async createTransaction(
    transaction: TransactionsModel,
  ): Promise<TransactionsEntity> {
    console.log(
      '🚀 ~ file: transactions-impl.respository.ts:19 ~ TransactionsImplRepository ~ transaction:',
      transaction,
    );

    return this.transactionsRepository.save(transaction);
  }
}
