package com.mcihlar.messageapi.controller;

import com.mcihlar.messageapi.service.MessageService;
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
        return "Perfect, the API is working! Now please enter your message to the field below to get the instructions.";
    }
}
