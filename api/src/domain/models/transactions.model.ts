export class TransactionsModel {
  id?: string;
  correlationId: string;
  accountId: string;
  amount: number;
  status: string;

  constructor(newTransactionsModel: {
    id?: string;
    correlationId?: string;
    accountId?: string;
    amount?: number;
    status?: string;
  }) {
    this.id = newTransactionsModel.id;
    this.correlationId = newTransactionsModel.correlationId;
    this.accountId = newTransactionsModel.accountId;
    this.amount = newTransactionsModel.amount;
    this.status = newTransactionsModel.status;
  }
}
