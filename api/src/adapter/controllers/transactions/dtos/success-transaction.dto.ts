export interface SuccessTransactionDto {
  correlationId: string;
  accountId: string;
  amount: number;
  status: string;
}
