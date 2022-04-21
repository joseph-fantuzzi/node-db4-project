const router = require("express").Router();

const Recipes = require("./recipes-model");

router.get("/", (req, res) => {
  res.json("Router is working.");
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
