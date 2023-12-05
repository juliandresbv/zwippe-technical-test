export class TransactionsModel {
  id: string;
  processId: string;
  accountId: string;
  status: string;

  constructor(newTransactionsModel: {
    id?: string;
    processId?: string;
    accountId?: string;
    status?: string;
  }) {
    this.id = newTransactionsModel.id;
    this.processId = newTransactionsModel.processId;
    this.accountId = newTransactionsModel.accountId;
    this.status = newTransactionsModel.status;
  }
}
