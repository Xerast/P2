package com.revature.foodinstagram.services;

import com.revature.foodinstagram.beans.Restaurant;
import com.revature.foodinstagram.repositories.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class RestaurantServices {

    private final RestaurantRepo restaurantRepo;

    @Autowired
    public RestaurantServices(RestaurantRepo restaurantRepo){
        this.restaurantRepo = restaurantRepo;
    }

    public List<Restaurant> getAllRestaurant() {
        return restaurantRepo.findAll();
    }
    
}