import { Body, Controller, Inject, Post } from '@nestjs/common';

import { FailTransactionDto } from './dtos/fail-transaction.dto';
import { SuccessTransactionDto } from './dtos/success-transaction.dto';
import { FailTransactionResponse } from './responses/fail-transaction.response';
import { SuccessTransactionResponse } from './responses/success-transaction.response';

import { TransactionsUseCases } from '../../../domain/interfaces/use-cases/transactions.use-cases';

@Controller('transactions')
export class TransactionsController {
  constructor(
    @Inject('TransactionsUseCases')
    private readonly transactionsUseCases: TransactionsUseCases,
  ) {}

  @Post('success')
  public async successTransaction(
    @Body() successTransactionDto: SuccessTransactionDto,
  ): Promise<SuccessTransactionResponse> {
    return this.transactionsUseCases.successTransaction(successTransactionDto);
  }

  @Post('fail')
  public async failTransaction(
    @Body() failTransactionDto: FailTransactionDto,
  ): Promise<FailTransactionResponse> {
    return this.transactionsUseCases.failTransaction(failTransactionDto);
  }
}
