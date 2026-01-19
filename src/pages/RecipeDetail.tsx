import { useParams, useNavigate } from 'react-router-dom';
import { useGetRecipeQuery } from '@/features/recipes/recipesApi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: recipe, isLoading, isError } = useGetRecipeQuery(Number(id));

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600 font-semibold">Loading recipe...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (isError || !recipe) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Recipe Not Found</h2>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the recipe you're looking for.</p>
            <button onClick={() => navigate('/')} className="btn-primary">
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="container-custom pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-primary-500 text-white text-sm font-bold px-3 py-1 rounded-full uppercase">
                    {recipe.difficulty}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {recipe.cuisine}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
                  {recipe.name}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{recipe.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                    <span>{recipe.caloriesPerServing} cal</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-custom py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Ingredients */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500">
                    🥘
                  </span>
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500">
                    📝
                  </span>
                  Instructions
                </h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-gray-700 pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  Quick Info
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">Prep Time</span>
                    <span className="font-semibold text-gray-900">{recipe.prepTimeMinutes} min</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">Cook Time</span>
                    <span className="font-semibold text-gray-900">{recipe.cookTimeMinutes} min</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">Total Time</span>
                    <span className="font-semibold text-gray-900">
                      {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">Servings</span>
                    <span className="font-semibold text-gray-900">{recipe.servings}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Calories</span>
                    <span className="font-semibold text-gray-900">{recipe.caloriesPerServing} per serving</span>
                  </div>
                </div>
              </motion.div>

              {/* Tags */}
              {recipe.tags && recipe.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-primary rounded-2xl shadow-lg p-6 text-white"
              >
                <h3 className="text-xl font-display font-bold mb-4">
                  Love this recipe?
                </h3>
                <p className="text-primary-50 mb-4 text-sm">
                  Save it to your favorites and share it with friends!
                </p>
                <div className="space-y-2">
                  <button className="w-full bg-white text-primary-500 px-4 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                    Save Recipe
                  </button>
                  <button className="w-full bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                    Share Recipe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => navigate(-1)}
              className="btn-outline inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Recipes
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetail;
