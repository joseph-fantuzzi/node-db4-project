const router = require("express").Router();

const Recipes = require("./recipes-model");

router.get("/", (req, res, next) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:recipe_id", (req, res, next) => {
  Recipes.getRecipeById(req.params.recipe_id)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
