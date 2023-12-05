export interface FailTransactionDto {
  correlationId: string;
  accountId: string;
  amount: number;
  status: string;
}
