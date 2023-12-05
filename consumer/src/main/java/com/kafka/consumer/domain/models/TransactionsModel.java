package com.kafka.consumer.domain.models;

import lombok.*;

public class TransactionsModel {
  @Getter
  @Setter
  private Integer id;

  @Getter
  @Setter
  private String account;

  @Getter
  @Setter
  private String amount;

  @Getter
  @Setter
  private String status;

  @Override
  public String toString() {
    return String.format("TransactionsModel{id=%s, account=%s, amount=%s, status=%s}",
        this.id,
        this.account,
        this.amount,
        this.status);
  }
}
