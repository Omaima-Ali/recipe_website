// Mock Data
const MOCK_USER = {
  id: 'u1',
  name: 'Alex Gordon',
  avatarUrl: 'https://picsum.photos/seed/user1/100/100'
};

const MOCK_CATEGORIES = [
  { id: 'c1', name: 'Breakfast', slug: 'breakfast', imageUrl: 'https://picsum.photos/seed/breakfast/400/300', recipeCount: 120 },
  { id: 'c2', name: 'Vegan', slug: 'vegan', imageUrl: 'https://picsum.photos/seed/vegan/400/300', recipeCount: 85 },
  { id: 'c3', name: 'Desserts', slug: 'desserts', imageUrl: 'https://picsum.photos/seed/dessert/400/300', recipeCount: 200 },
  { id: 'c4', name: 'Quick Meals', slug: 'quick-meals', imageUrl: 'https://picsum.photos/seed/quick/400/300', recipeCount: 340 },
];

const MOCK_RECIPES = [
  { id: 'r1', title: 'Avocado Toast Deluxe', imageUrl: 'https://picsum.photos/seed/toast/600/400', rating: 4.8, reviewCount: 124, cookTimeMinutes: 10, calories: 320, author: 'Chef Anna' },
  { id: 'r2', title: 'Spicy Ramen Bowl', imageUrl: 'https://picsum.photos/seed/ramen/600/400', rating: 4.9, reviewCount: 89, cookTimeMinutes: 25, calories: 450, author: 'RamenKing' },
  { id: 'r3', title: 'Berry Smoothie', imageUrl: 'https://picsum.photos/seed/smoothie/600/400', rating: 4.5, reviewCount: 56, cookTimeMinutes: 5, calories: 180, author: 'HealthyLife' },
  { id: 'r4', title: 'Grilled Salmon', imageUrl: 'https://picsum.photos/seed/salmon/600/400', rating: 4.7, reviewCount: 210, cookTimeMinutes: 30, calories: 520, author: 'OceanCatch' },
];

// Simulated Service Layer - Replace these internals with Axios calls when backend is ready
export const api = {
  getCurrentUser: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_USER), 500);
    });
  },

  getCategories: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_CATEGORIES), 800);
    });
  },

  getTrendingRecipes: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_RECIPES), 1200); // Slightly longer delay to test loading states independently
    });
  }
};