package com.kafka.consumer.framework.config;

import java.util.*;

import org.springframework.kafka.core.*;
import org.springframework.context.annotation.*;
import org.springframework.kafka.annotation.EnableKafka;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.listener.ContainerProperties;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.kafka.support.serializer.JsonDeserializer;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;

import com.kafka.consumer.domain.models.TransactionsModel;

@EnableKafka
@Configuration("TransactionsKafkaConsumerConfig")
public class TransactionsKafkaConsumerConfig {
  @Value(value = "${spring.kafka.transactions.bootstrap-servers}")
  private String bootstrapServers;

  @Value(value = "${spring.kafka.transactions.consumer.group-id.transactions}")
  private String groupId;

  @Bean("TransactionsConsumerFactory")
  public ConsumerFactory<String, TransactionsModel> createTransactionsConsumerFactory() {
    Map<String, Object> configs = new HashMap<>();

    configs.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
    configs.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);

    configs.put(ConsumerConfig.CLIENT_ID_CONFIG, UUID.randomUUID().toString());
    configs.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
    configs.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, TransactionsModel.class);
    configs.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);

    return new DefaultKafkaConsumerFactory<>(
        configs,
        new StringDeserializer(),
        new JsonDeserializer<>(TransactionsModel.class));
  }

  @Bean("TransactionsConcurrentKafkaListenerContainerFactory")
  public ConcurrentKafkaListenerContainerFactory<String, TransactionsModel> createTransactionsConcurrentKafkaListenerContainerFactory() {
    ConcurrentKafkaListenerContainerFactory<String, TransactionsModel> transactionsConcurrentKafkaListenerContainerFactory = new ConcurrentKafkaListenerContainerFactory<>();

    transactionsConcurrentKafkaListenerContainerFactory.setConsumerFactory(createTransactionsConsumerFactory());
    transactionsConcurrentKafkaListenerContainerFactory.getContainerProperties()
        .setAckMode(ContainerProperties.AckMode.MANUAL_IMMEDIATE);

    return transactionsConcurrentKafkaListenerContainerFactory;
  }
}
