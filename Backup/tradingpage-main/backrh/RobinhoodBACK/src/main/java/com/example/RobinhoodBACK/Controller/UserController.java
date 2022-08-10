package com.example.RobinhoodBACK.Controller;

import com.example.RobinhoodBACK.Entities.User;
import com.example.RobinhoodBACK.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/test")
    public String home(){
        return "<h1>Welcome</h1>";
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<?> user() throws Exception{
        UserDetails userDatails = (UserDetails)
                SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = new User();
        user.setName(userDatails.getUsername());
        return ResponseEntity.ok(user);
    }

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User save(@RequestBody User user){
        return userService.save(user);
    }

    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody User user) {
        userService.update(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/lists")
    public List<User> findAll(){
        return userService.findAll();
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        userService.delete(id);
        return "User "+id+ " was delete.";
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable Integer id){
        return userService.findById(id);
    }
}
