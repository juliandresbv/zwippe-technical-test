import { FailTransactionDto } from '../../../adapter/controllers/transactions/dtos/fail-transaction.dto';
import { SuccessTransactionDto } from '../../../adapter/controllers/transactions/dtos/success-transaction.dto';
import { FailTransactionResponse } from '../../../adapter/controllers/transactions/responses/fail-transaction.response';
import { SuccessTransactionResponse } from '../../../adapter/controllers/transactions/responses/success-transaction.response';

export interface TransactionsUseCases {
  successTransaction(
    successTransactionDto: SuccessTransactionDto,
  ): Promise<SuccessTransactionResponse>;

  failTransaction(
    failTransactionDto: FailTransactionDto,
  ): Promise<FailTransactionResponse>;
}
