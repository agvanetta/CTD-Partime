package com.dh.cuentaservice.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/cuenta")
public class CuentaController {

    @Value("${server.port}")
    private String port;

    @Value("${message}")
    private String message;

    @Value("${global-message}")
    private String globalMessage;

    @GetMapping("/port")
    public String getPropertiesFromConfigServer() {
        return port;
    }

    @GetMapping
    public Map<String, String> getAll (){
        Map<String ,String> properties = new HashMap<>();
        properties.put("Port", port);
        properties.put("Message", message);
        properties.put("Global message", globalMessage);
        return properties;
    }
}
