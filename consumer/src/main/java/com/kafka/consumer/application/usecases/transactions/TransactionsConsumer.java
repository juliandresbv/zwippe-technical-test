package com.kafka.consumer.application.usecases.transactions;

import org.springframework.stereotype.*;
import org.springframework.kafka.support.*;
import org.springframework.kafka.annotation.*;
import org.springframework.messaging.handler.annotation.*;

import com.kafka.consumer.domain.models.TransactionsModel;
import com.kafka.consumer.framework.clients.http.apis.transactions.TransactionsApi;
import com.kafka.consumer.framework.clients.http.apis.transactions.dtos.FailTransactionDto;
import com.kafka.consumer.framework.clients.http.apis.transactions.dtos.SuccessTransactionDto;

@Service("TransactionsConsumer")
public class TransactionsConsumer {
  private final TransactionsApi transactionsApi;

  public TransactionsConsumer(TransactionsApi transactionsApi) {
    this.transactionsApi = transactionsApi;
  }

  @KafkaListener(topics = "${spring.kafka.transactions.topic.transactions}", containerFactory = "TransactionsConcurrentKafkaListenerContainerFactory")
  public void consumeTransactions(@Payload TransactionsModel transaction, Acknowledgment ack) {
    String status = transaction.getStatus();

    if (status.equals("APPROVED")) {
      SuccessTransactionDto successTransactionDto = new SuccessTransactionDto(
          transaction.getId().toString(),
          transaction.getAccount(),
          Float.valueOf(transaction.getAmount()),
          transaction.getStatus());

      this.transactionsApi.successTransaction(successTransactionDto);
    } else if (status.equals("REJECTED")) {
      FailTransactionDto failTransactionDto = new FailTransactionDto(
          transaction.getId().toString(),
          transaction.getAccount(),
          Float.valueOf(transaction.getAmount()),
          transaction.getStatus());

      this.transactionsApi.failTransaction(failTransactionDto);
    }

    ack.acknowledge();
  }
}
