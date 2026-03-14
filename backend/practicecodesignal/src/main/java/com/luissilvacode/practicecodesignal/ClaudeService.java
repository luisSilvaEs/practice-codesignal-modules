package com.luissilvacode.practicecodesignal;

import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Model;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ClaudeService {

    @Value("${anthropic.api.key}")
    private String apiKey;

    public String getJoke() {
        AnthropicClient client = AnthropicOkHttpClient.builder()
                .apiKey(apiKey)
                .build();

        MessageCreateParams params = MessageCreateParams.builder()
                .model(Model.CLAUDE_HAIKU_4_5)
                .maxTokens(256L)
                .addUserMessage("Tell me a short funny joke, just the joke, no intro.")
                .build();

        Message message = client.messages().create(params);

        return message.content().stream()
                .flatMap(block -> block.text().stream())
                .map(textBlock -> textBlock.text())
                .findFirst()
                .orElse("No joke today, sorry!");
    }
}