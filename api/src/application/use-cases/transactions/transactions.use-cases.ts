import { Inject, Injectable } from '@nestjs/common';

import { TransactionsModel } from '../../../domain/models/transactions.model';
import { TransactionsRepository } from '../../../domain/repositories/interfaces/transactions.repository';
import { FailTransactionDto } from '../../../adapter/controllers/transactions/dtos/fail-transaction.dto';
import { SuccessTransactionDto } from '../../../adapter/controllers/transactions/dtos/success-transaction.dto';
import { FailTransactionResponse } from '../../../adapter/controllers/transactions/responses/fail-transaction.response';
import { SuccessTransactionResponse } from '../../../adapter/controllers/transactions/responses/success-transaction.response';

@Injectable()
export class TransactionsUseCases {
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
