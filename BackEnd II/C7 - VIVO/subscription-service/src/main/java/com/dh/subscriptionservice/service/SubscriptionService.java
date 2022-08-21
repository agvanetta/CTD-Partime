package com.dh.subscriptionservice.service;

import com.dh.subscriptionservice.model.Subscription;
import com.dh.subscriptionservice.repository.SubscrptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubscriptionService {

    private SubscrptionRepository subscrptionRepository;

    @Autowired
    public SubscriptionService(SubscrptionRepository subscrptionRepository) {
        this.subscrptionRepository = subscrptionRepository;
    }

    public Subscription findByUserId(Integer userId){
        return this.subscrptionRepository.findByUserId(userId);
    }
}
