package com.example.messageapi.controller;

import com.example.messageapi.service.MessageService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping("/send")
    public String sendMessage(@RequestBody String message) {
        return messageService.sendMessage(message);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Message API is running!";
    }
}
