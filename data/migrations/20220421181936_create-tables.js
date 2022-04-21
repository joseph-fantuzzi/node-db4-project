/**
 * RECIPES TABLE:
 *    recipe_id -> primary key
 *    recipe_name -> unique, not nullable
 *    created_at -> table.timestamp('created_at').defaultTo(knex.fn.now())
 *
 * INGREDIENTS TABLE:
 *    ingredient_id -> primary key
 *    ingredient_name -> unique, not nullable
 *    ingredient_unit -> not nullable
 *
 * STEPS TABLE:
 *    step_id -> primary key
 *    step_text -> not nullable
 *    step_order -> not nullable
 *    recipe_id -> foreign key for recipe table
 *
 * STEP_INGREDIENTS TABLE:
 *    step_id -> foreign key for steps table
 *    ingredient_id -> foreign key for ingredients table
 *    primary_key -> step_id + ingredient_id
 *    quantity -> not nullable
 */

exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name").notNullable().unique();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("ingredient_id");
      tbl.string("ingredient_name").notNullable().unique();
      tbl.integer("ingredient_unit").notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("step_id");
      tbl.string("step_text").notNullable();
      tbl.integer("step_order").notNullable();
      tbl.integer("recipe_id").unsigned().notNullable().references("recipe_id").inTable("recipes");
    })
    .createTable("step_ingredients", (tbl) => {
      tbl.integer("step_id").unsigned().notNullable().references("step_id").inTable("steps");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients");
      tbl.primary(["step_id", "ingredient_id"]);
      tbl.integer("quantity").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
