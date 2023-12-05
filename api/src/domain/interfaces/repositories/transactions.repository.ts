import { TransactionsModel } from '../../../domain/models/transactions.model';
import { TransactionsEntity } from '../../../framework/db/entities/transactions.entity';

export interface TransactionsRepository {
  createTransaction(
    transaction: TransactionsModel,
  ): Promise<TransactionsEntity>;
}
