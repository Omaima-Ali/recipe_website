import React, { useEffect, useState } from 'react';
import { Banner } from '../components/Banner';
import { CategoryCard } from '../components/CategoryCard';
import { RecipeCard } from '../components/RecipeCard';
import { api } from '../services/api';
import { Loader2 } from 'lucide-react';

export const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [trendingRecipes, setTrendingRecipes] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingRecipes, setLoadingRecipes] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, recipesData] = await Promise.all([
          api.getCategories(),
          api.getTrendingRecipes()
        ]);
        setCategories(categoriesData);
        setTrendingRecipes(recipesData);
      } catch (err) {
        setError('Failed to load data from the server. Please try again later.');
      } finally {
        setLoadingCategories(false);
        setLoadingRecipes(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center bg-red-50 m-4 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-2">Something went wrong</h2>
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-12">
        {/* Featured Categories Section */}
        <section id="categories">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Categories</h2>
            <a href="#categories" className="text-brand-600 font-semibold hover:text-brand-700 flex items-center">
              View All
            </a>
          </div>
          
          {loadingCategories ? (
            <div className="flex justify-center py-12">
               <Loader2 className="animate-spin text-brand-500" size={40} />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </section>

        {/* Trending Recipes Section */}
        <section id="browse">
          <div className="flex items-center justify-between mb-8">
            <div>
               <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
               <p className="text-gray-500 mt-1">Top rated recipes from our community this week.</p>
            </div>
          </div>

          {loadingRecipes ? (
             <div className="flex justify-center py-12">
               <Loader2 className="animate-spin text-brand-500" size={40} />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </section>
        
        {/* Newsletter / CTA Section */}
        <section className="bg-brand-50 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Share your cooking skills</h2>
                <p className="text-lg text-gray-600 mb-6">Create an account to save your favorite recipes, create shopping lists, and upload your own culinary masterpieces.</p>
                <button className="bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition-colors shadow-lg">
                    Start Cooking Today
                </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
                     <div className="bg-gray-100 rounded-xl h-48 w-64 flex items-center justify-center text-gray-400 mb-4">
                        <span className="text-4xl">📸</span>
                     </div>
                     <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                     <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};