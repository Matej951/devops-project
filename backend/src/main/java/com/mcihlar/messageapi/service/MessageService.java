package com.mcihlar.messageapi.service;

import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class MessageService {
    public String sendMessage(String message) {
        return "Thanks for your message: " + message + ". (Unique message ID is: " + UUID.randomUUID() + "). Now please go through the different tabs to learn about this project, its tech stack, security and monitoring. You can then find the whole source code in the 'Source code' tab.";
    }
}