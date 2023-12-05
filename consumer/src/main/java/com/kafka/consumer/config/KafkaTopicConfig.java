package com.kafka.consumer.config;

import java.util.*;

import org.springframework.kafka.core.KafkaAdmin;
import org.springframework.context.annotation.*;
import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class KafkaTopicConfig {
  @Value(value = "${spring.kafka.transactions.bootstrap-servers}")
  private String bootstrapServers;

  @Bean
  public KafkaAdmin kafkaAdmin() {
    Map<String, Object> configs = new HashMap<>();

    configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);

    return new KafkaAdmin(configs);
  }

  @Bean
  NewTopic transactions() {
    return new NewTopic("transactions", 1, (short) 1);
  }
}
