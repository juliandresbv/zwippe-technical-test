package com.kafka.consumer.framework.clients.http.apis.transactions.dtos;

import lombok.*;

@AllArgsConstructor
public class SuccessTransactionDto {
  @Getter
  @Setter
  private String correlationId;

  @Getter
  @Setter
  private String accountId;

  @Getter
  @Setter
  private Float amount;

  @Getter
  @Setter
  private String status;
}
