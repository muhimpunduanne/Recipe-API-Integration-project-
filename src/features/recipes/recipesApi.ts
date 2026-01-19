import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { 
  Recipe, 
  RecipesResponse, 
  RecipeQueryParams,
  CreateRecipeInput,
  UpdateRecipeInput 
} from '@types/recipe';
import type { RootState } from '@store/index';
export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://dummyjson.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Recipe'],
  endpoints: (builder) => ({
    // Get all recipes with pagination and search
    getRecipes: builder.query<RecipesResponse, RecipeQueryParams>({
      query: ({ limit = 30, skip = 0, search = '', sortBy = '', order = 'asc' } = {}) => {
        let url = `/recipes?limit=${limit}&skip=${skip}`;
        
        if (search) {
          url = `/recipes/search?q=${search}&limit=${limit}&skip=${skip}`;
        }
        
        if (sortBy && order) {
          url += `${url.includes('?') ? '&' : '?'}sortBy=${sortBy}&order=${order}`;
        }
        
        return url;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.recipes.map(({ id }) => ({ type: 'Recipe' as const, id })),
              { type: 'Recipe', id: 'LIST' },
            ]
          : [{ type: 'Recipe', id: 'LIST' }],
    }),

    // Get single recipe by ID
    getRecipe: builder.query<Recipe, number | string>({
      query: (id) => `/recipes/${id}`,
      providesTags: (result, error, id) => [{ type: 'Recipe', id }],
    }),

    // Add new recipe
    addRecipe: builder.mutation<Recipe, CreateRecipeInput>({
      query: (recipe) => ({
        url: '/recipes/add',
        method: 'POST',
        body: recipe,
      }),
      invalidatesTags: [{ type: 'Recipe', id: 'LIST' }],
    }),

    // Update recipe
    updateRecipe: builder.mutation<Recipe, UpdateRecipeInput>({
      query: ({ id, ...recipe }) => ({
        url: `/recipes/${id}`,
        method: 'PUT',
        body: recipe,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Recipe', id }],
    }),

    // Delete recipe
    deleteRecipe: builder.mutation<{ isDeleted: boolean; deletedOn: string }, number>({
      query: (id) => ({
        url: `/recipes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Recipe', id }],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeQuery,
  useAddRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi;
