package com.kafka.consumer.framework.clients.http.apigateway;

import java.net.URI;
import java.net.http.*;

import org.springframework.stereotype.*;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class TransactionsApiGateway {
  private HttpClient httpClient;

  private String apiBaseUrl;

  public TransactionsApiGateway() {
    this.httpClient = HttpClient.newHttpClient();
    this.apiBaseUrl = "http://0.0.0.0:3000";
  }

  public <T> HttpResponse<String> makeHttpRequest(String endpointResource, String method, T data) throws Exception {
    ObjectMapper objectMapper = new ObjectMapper();
    String jsonString = objectMapper.writeValueAsString(data);

    HttpRequest request = HttpRequest
        .newBuilder()
        .uri(URI.create(this.apiBaseUrl + endpointResource))
        .method(method, HttpRequest.BodyPublishers.ofString(jsonString))
        .header("Content-Type", "application/json")
        .build();

    return this.httpClient.send(request, HttpResponse.BodyHandlers.ofString());
  }
}
