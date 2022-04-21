const recipes = [
  {
    recipe_name: "White Wine Lemon Tilapia",
  },
  {
    recipe_name: "Butter Crusted Chicken Piccata",
  },
  {
    recipe_name: "Roasted Garlic Cream Penne alla Vodka ",
  },
];

const ingredients = [
  {
    ingredient_name: "White Wine",
    ingredient_unit: "ounces",
  },
  {
    ingredient_name: "Lemon",
    ingredient_unit: "slices",
  },
  {
    ingredient_name: "Tilapia",
    ingredient_unit: "pounds",
  },
  {
    ingredient_name: "Butter",
    ingredient_unit: "ounces",
  },
  {
    ingredient_name: "Chicken",
    ingredient_unit: "pounds",
  },
  {
    ingredient_name: "Capers",
    ingredient_unit: "tablespoon",
  },
  {
    ingredient_name: "Garlic",
    ingredient_unit: "tablespoon",
  },
  {
    ingredient_name: "Heavy Cream",
    ingredient_unit: "ounces",
  },
  {
    ingredient_name: "Penne Pasta",
    ingredient_unit: "pounds",
  },
  {
    ingredient_name: "Vodka",
    ingredient_unit: "ounces",
  },
];

const steps = [
  {
    step_order: 1,
    step_text: "Cook tilapia filets in pan until golden brown",
    recipe_id: 1,
  },
  {
    step_order: 2,
    step_text: "Add white wine and lemon",
    recipe_id: 1,
  },
  {
    step_order: 1,
    step_text: "Cook chicken in pan until internal temperature of 160 degrees",
    recipe_id: 2,
  },
  {
    step_order: 2,
    step_text: "Add capers and let simmer with butter and garlic in pan for 5 minutes",
    recipe_id: 2,
  },
  {
    step_order: 1,
    step_text: "Cook penne pasta in boiling water for 3 minutes, then drain pasta",
    recipe_id: 3,
  },
  {
    step_order: 2,
    step_text: "Add vodka and heavy cream and mix thoroughly",
    recipe_id: 3,
  },
];

const step_ingredients = [
  {
    step_id: 2,
    ingredient_id: 1,
    quantity: 16,
  },
  {
    step_id: 2,
    ingredient_id: 2,
    quantity: 4,
  },
  {
    step_id: 1,
    ingredient_id: 3,
    quantity: 1,
  },
  {
    step_id: 4,
    ingredient_id: 4,
    quantity: 6,
  },
  {
    step_id: 3,
    ingredient_id: 5,
    quantity: 2,
  },
  {
    step_id: 4,
    ingredient_id: 6,
    quantity: 2,
  },
  {
    step_id: 4,
    ingredient_id: 7,
    quantity: 1,
  },
  {
    step_id: 6,
    ingredient_id: 8,
    quantity: 10,
  },
  {
    step_id: 5,
    ingredient_id: 9,
    quantity: 2,
  },
  {
    step_id: 6,
    ingredient_id: 10,
    quantity: 12,
  },
];

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes);
  await knex("ingredients").insert(ingredients);
  await knex("steps").insert(steps);
  await knex("step_ingredients").insert(step_ingredients);
};
