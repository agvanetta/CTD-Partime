package com.example.RobinhoodBACK.Util;

import com.example.RobinhoodBACK.Entities.User;
import com.example.RobinhoodBACK.Entities.UserRoles;
import com.example.RobinhoodBACK.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;


@Component
public class DataLoader implements ApplicationRunner {

    private UserRepository userRepository;

    @Autowired
    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        String password = passwordEncoder.encode("admin");
        String password2 = passwordEncoder.encode("user");

        userRepository.save(new User(1,"Agustin", "Vanetta", "agvanetta", "agvanetta@test.com",
                password, 7894654l, 100000d, "Argentina", UserRoles.USER));

    }
}