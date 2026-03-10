package com.luissilvacode.practicecodesignal;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PingController {

    private final ClaudeService claudeService;

    public PingController(ClaudeService claudeService) {
        this.claudeService = claudeService;
    }

    @PostMapping("/ping")
    public String ping(@RequestBody String message) {
        String joke = claudeService.getJoke();
        return "Backend received: " + message + " | Claude says: " + joke;
    }
}