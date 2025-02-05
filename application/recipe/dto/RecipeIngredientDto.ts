export interface RecipeIngredientDto {
  id: number,
  recipeId: number,
  ingredientName: string,
  ingredientAmount: string,
}

export interface RecipeIngredientCreateDto {
  name: string,
  amount: string,
}
