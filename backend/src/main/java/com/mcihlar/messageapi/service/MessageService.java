package com.mcihlar.messageapi.service;

import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class MessageService {
    public String sendMessage(String message) {
        // In a real-world scenario, this could integrate with a messaging system
        return "Message sent: " + message + 
               " (Unique ID: " + UUID.randomUUID() + ")";
    }
}
