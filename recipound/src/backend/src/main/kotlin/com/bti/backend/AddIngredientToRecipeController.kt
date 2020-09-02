package com.bti.backend

import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.PostMapping

@RestController
class AddIngredientToRecipeController {

    @PostMapping("/add-ingredient")
    fun addIngredient() {
        return; 
    }

}