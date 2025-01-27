package com.mcihlar.messageapi.service;

import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class MessageService {
    public String sendMessage(String message) {
        return "Thanks for your message: " + message + ". (Your unique message ID is: " + UUID.randomUUID() + "). Now please go through the different tabs to learn more about this project. You can then find the source code link in the 'Source code' tab.";
    }
}