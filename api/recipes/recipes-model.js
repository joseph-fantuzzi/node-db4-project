// {
//    "recipe_id" : 1,
//    "recipe_name": "Spaghetti Bolognese",
//    "created_at": "2021-01-01 08:23:19.120",
//    "steps": [
//      {
//        "step_id": 11,
//        "step_number": 1,
//        "step_instructions": "Put a large saucepan on a medium heat",
//        "ingredients": []
//      },
//      {
//        "step_id": 12,
//        "step_number": 2,
//        "step_instructions": "Add 1 tbsp olive oil",
//        "ingredients": [
//          { "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
//        ]
//      },
//    ]
//  }

const db = require("../../data/db-config");

function getRecipes() {
  return db("recipes");
}

function getRecipeById(recipe_id) {
  return db("recipes").where({ recipe_id }).first();
}

module.exports = { getRecipes, getRecipeById };
