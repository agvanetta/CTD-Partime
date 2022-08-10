package com.example.RobinhoodBACK.Dto;

import com.example.RobinhoodBACK.Entities.UserRoles;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserDto {

    private Integer id;
    private String name;
    private String lastname;
    private String email;
    private Long bankaccount;
    private double money;
    private String country;

}
