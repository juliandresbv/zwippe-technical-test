import { Body, Controller, Post } from '@nestjs/common';

import { FailTransactionDto } from './dtos/fail-transaction.dto';
import { SuccessTransactionDto } from './dtos/success-transaction.dto';
import { FailTransactionResponse } from './responses/fail-transaction.response';
import { SuccessTransactionResponse } from './responses/success-transaction.response';

import { TransactionsUseCases } from '../../../application/use-cases/transactions/transactions.use-cases';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsUseCases: TransactionsUseCases) {}

  @Post('success')
  public async successTransaction(
    @Body() successTransactionDto: SuccessTransactionDto,
  ): Promise<SuccessTransactionResponse> {
    // console.log(
    //   '🚀 ~ file: transactions.controller.ts:14 ~ TransactionsController ~ successTransactionDto:',
    //   successTransactionDto,
    // );

    return this.transactionsUseCases.successTransaction(successTransactionDto);
  }

  @Post('fail')
  public async failTransaction(
    @Body() failTransactionDto: FailTransactionDto,
  ): Promise<FailTransactionResponse> {
    // console.log(
    //   '🚀 ~ file: transactions.controller.ts:25 ~ TransactionsController ~ failTransaction ~ failTransactionDto:',
    //   failTransactionDto,
    // );

    return this.transactionsUseCases.failTransaction(failTransactionDto);
  }
}
