package com.ctd.C5SpringCloudConfig;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class C5SpringCloudConfigApplication {

	public static void main(String[] args) {
		SpringApplication.run(C5SpringCloudConfigApplication.class, args);
	}

}
