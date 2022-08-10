package com.example.RobinhoodBACK.Repository;

import com.example.RobinhoodBACK.Entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends MongoRepository<User, Integer> {

    Optional<User> findByEmail(String email);
}
