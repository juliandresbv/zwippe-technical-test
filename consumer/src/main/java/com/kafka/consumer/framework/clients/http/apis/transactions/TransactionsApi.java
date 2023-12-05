package com.kafka.consumer.framework.clients.http.apis.transactions;

import org.springframework.stereotype.*;

import com.kafka.consumer.framework.clients.http.apigateway.TransactionsApiGateway;
import com.kafka.consumer.framework.clients.http.apis.transactions.dtos.FailTransactionDto;
import com.kafka.consumer.framework.clients.http.apis.transactions.dtos.SuccessTransactionDto;

@Service
public class TransactionsApi {
  private final TransactionsApiGateway transactionsApiGateway;

  public TransactionsApi(TransactionsApiGateway transactionsApiGateway) {
    this.transactionsApiGateway = transactionsApiGateway;
  }

  public void successTransaction(SuccessTransactionDto successTransactionDto) {
    try {
      this.transactionsApiGateway.<SuccessTransactionDto>makeHttpRequest(
          "/transactions/success",
          "POST",
          successTransactionDto);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public void failTransaction(FailTransactionDto failTransactionDto) {
    try {
      this.transactionsApiGateway.<FailTransactionDto>makeHttpRequest(
          "/transactions/fail",
          "POST",
          failTransactionDto);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
