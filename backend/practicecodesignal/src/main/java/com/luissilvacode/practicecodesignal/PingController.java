package com.luissilvacode.practicecodesignal;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PingController {

    @PostMapping("/ping")
    public String ping(@RequestBody String message) {
        return "Backend received: " + message;
    }
}