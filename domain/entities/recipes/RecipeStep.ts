export interface RecipeStep {
  id: number,
  imageUrl: string,
  content: string,
  order: number,
  recipeId: number, //FK
}