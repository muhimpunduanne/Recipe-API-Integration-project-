export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount?: number;
  mealType?: string[];
}

export interface RecipesResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

export interface RecipeQueryParams {
  limit?: number;
  skip?: number;
  search?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export interface CreateRecipeInput {
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  image: string;
  rating: number;
  userId: number;
}

export interface UpdateRecipeInput extends Partial<CreateRecipeInput> {
  id: number;
}
