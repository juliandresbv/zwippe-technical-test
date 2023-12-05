import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TransactionsEntity } from '../entities/transactions.entity';
import { TransactionsModel } from '../../../domain/models/transactions.model';
import { TransactionsRepository } from '../../../domain/interfaces/repositories/transactions.repository';

@Injectable()
export class TransactionsImplRepository implements TransactionsRepository {
  constructor(
    @InjectRepository(TransactionsEntity)
    private readonly transactionsRepository: Repository<TransactionsEntity>,
  ) {}

  public async createTransaction(
    transaction: TransactionsModel,
  ): Promise<TransactionsEntity> {
    return this.transactionsRepository.save(transaction);
  }
}
