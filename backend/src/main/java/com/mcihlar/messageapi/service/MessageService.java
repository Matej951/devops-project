package com.mcihlar.messageapi.service;

import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class MessageService {
    public String sendMessage(String message) {
/*        return "Message sent: " + message +
               " (Unique ID: " + UUID.randomUUID() + ")";*/
        return "Thanks for your meassage:" + [message]. + "Go checkout 'Source Code' section for the source code of this project which you can find on GitHub!";
    }
}
