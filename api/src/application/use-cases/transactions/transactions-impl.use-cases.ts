import { Inject, Injectable } from '@nestjs/common';

import { TransactionsModel } from '../../../domain/models/transactions.model';
import { TransactionsUseCases } from '../../../domain/interfaces/use-cases/transactions.use-cases';
import { TransactionsRepository } from '../../../domain/interfaces/repositories/transactions.repository';
import { FailTransactionDto } from '../../../adapter/controllers/transactions/dtos/fail-transaction.dto';
import { SuccessTransactionDto } from '../../../adapter/controllers/transactions/dtos/success-transaction.dto';
import { FailTransactionResponse } from '../../../adapter/controllers/transactions/responses/fail-transaction.response';
import { SuccessTransactionResponse } from '../../../adapter/controllers/transactions/responses/success-transaction.response';

@Injectable()
export class TransactionsImplUseCases implements TransactionsUseCases {
  constructor(
    @Inject('TransactionsRepository')
    private readonly transactionsRepository: TransactionsRepository,
  ) {}

  public async successTransaction(
    successTransactionDto: SuccessTransactionDto,
  ): Promise<SuccessTransactionResponse> {
    const transaction = new TransactionsModel(successTransactionDto);
    const createdTransaction =
      await this.transactionsRepository.createTransaction(transaction);

    return { id: createdTransaction.id };
  }

  public async failTransaction(
    failTransactionDto: FailTransactionDto,
  ): Promise<FailTransactionResponse> {
    const transaction = new TransactionsModel(failTransactionDto);
    const createdTransaction =
      await this.transactionsRepository.createTransaction(transaction);

    return { id: createdTransaction.id };
  }
}
