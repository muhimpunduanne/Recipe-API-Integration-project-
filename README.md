# 🍳 Our Recipes - TypeScript Recipe Management Application

A modern, full-featured recipe management application built with **React**, **TypeScript**, **Redux Toolkit Query (RTK Query)**, and the DummyJSON API. Discover, share, and manage amazing recipes from around the world with complete type safety.

![Our Recipes Banner](https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=400&fit=crop)

## 🚀 Live Demo

**Live URL:** [Your Deployed App URL Here]

## ✨ Features

### 🏠 Landing Page
- **Hero Section** - Eye-catching hero with gradient backgrounds and animated elements
- **Recipes Section** - Browse through a curated collection of recipes
- **Advanced Search** - Search recipes by name, cuisine, or ingredients
- **Smart Pagination** - Navigate through recipes with ease
- **Sorting Options** - Sort by name, rating, or other attributes (ascending/descending)
- **Responsive Design** - Beautiful on all devices

### 🔐 Authentication
- **Login System** - Secure authentication using DummyJSON API
- **Register Page** - User registration interface (demo mode)
- **Protected Routes** - Dashboard access only for authenticated users
- **Session Management** - Persistent login with localStorage
- **User Profile Display** - View logged-in user information

### 📊 Admin Dashboard
- **CRUD Operations** - Full Create, Read, Update, Delete functionality for recipes
- **User Profile** - Display authenticated user information from `/auth/me` endpoint
- **Recipe Management Table** - View all recipes in an organized table
- **Add New Recipe** - Create recipes with rich form inputs
- **Edit Recipe** - Update existing recipes seamlessly
- **Delete Recipe** - Remove recipes with confirmation
- **Real-time Updates** - Automatic cache invalidation with RTK Query

### 🎨 Design & UX
- **Modern UI** - Clean, professional interface with Tailwind CSS
- **Smooth Animations** - Framer Motion for delightful interactions
- **Custom Color Scheme** - Unique orange gradient theme
- **Custom Fonts** - Playfair Display and Inter font pairing
- **Loading States** - Elegant loading indicators
- **Error Handling** - User-friendly error messages
- **Responsive Navigation** - Mobile-friendly navbar with dropdown menus

## 🛠️ Technologies Used

### Core
- **React 18** - Modern React with hooks
- **TypeScript 5.3** - Full type safety
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Client-side routing

### State Management & API
- **Redux Toolkit** - State management with TypeScript
- **RTK Query** - Powerful data fetching and caching with types
- **DummyJSON API** - Backend API for recipes and authentication

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Custom CSS** - Additional styling and animations

### Code Quality
- **TypeScript** - Static type checking
- **Path Aliases** - Clean imports with @ prefix
- **ESLint** - Code linting with TypeScript rules
- **Type Definitions** - Custom types for all data structures

## 📁 Project Structure

```
our-recipes/
├── public/
├── src/
│   ├── assets/               # Images, fonts, static files
│   ├── components/           # Reusable components (TSX)
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── RecipeCard.tsx
│   │   └── RecipesSection.tsx
│   ├── features/             # Feature-based modules
│   │   ├── auth/
│   │   │   ├── authApi.ts   # RTK Query API for authentication
│   │   │   └── authSlice.ts  # Redux slice for auth state
│   │   └── recipes/
│   │       └── recipesApi.ts # RTK Query API for recipes
│   ├── pages/                # Page components (TSX)
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── Dashboard.tsx
│   │   └── RecipeDetail.tsx
│   ├── store/                # Redux store configuration
│   │   ├── index.ts
│   │   └── hooks.ts          # Typed Redux hooks
│   ├── types/                # TypeScript type definitions
│   │   ├── recipe.ts
│   │   ├── auth.ts
│   │   └── index.ts
│   ├── utils/                # Utility functions
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   ├── vite-env.d.ts         # Vite type declarations
│   └── index.css             # Global styles
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json             # TypeScript configuration
├── tsconfig.node.json        # Node TypeScript configuration
├── vite.config.ts            # Vite configuration with path aliases
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── README.md
```

## 🎯 Path Aliases

The project uses path aliases for cleaner imports:

```typescript
@/          → src/
@components → src/components/
@features   → src/features/
@pages      → src/pages/
@store      → src/store/
@utils      → src/utils/
@types      → src/types/
@assets     → src/assets/
```

## 📘 TypeScript Benefits

### Type-Safe API Calls
```typescript
import type { Recipe, CreateRecipeInput } from '@types/recipe';

const { data, isLoading } = useGetRecipesQuery({ 
  limit: 10, 
  skip: 0 
});
// data is automatically typed as RecipesResponse
```

### Typed Redux Hooks
```typescript
import { useAppSelector, useAppDispatch } from '@store/hooks';

const user = useAppSelector(selectCurrentUser); // Fully typed
const dispatch = useAppDispatch(); // Typed dispatch
```

### Interface-Driven Development
```typescript
interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

const RecipeCard = ({ recipe, index }: RecipeCardProps) => {
  // TypeScript ensures correct prop usage
};
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/our-recipes.git
cd our-recipes
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Type Check

```bash
npm run type-check
```

### Preview production build

```bash
npm run preview
```

## 🔑 Demo Credentials

Use these credentials to log in:

- **Username:** `emilys`
- **Password:** `emilyspass`

Other available users from DummyJSON:
- **Username:** `michaelw`, **Password:** `michaelwpass`
- **Username:** `sophiab`, **Password:** `sophiabpass`

## 📡 API Endpoints

### Recipes API
- **GET** `/recipes` - Get all recipes
- **GET** `/recipes?limit=10&skip=0` - Pagination
- **GET** `/recipes/search?q=pizza` - Search recipes
- **GET** `/recipes?sortBy=name&order=asc` - Sort recipes
- **GET** `/recipes/:id` - Get single recipe
- **POST** `/recipes/add` - Add new recipe
- **PUT** `/recipes/:id` - Update recipe
- **DELETE** `/recipes/:id` - Delete recipe

### Authentication API
- **POST** `/auth/login` - User login
- **GET** `/auth/me` - Get current user profile (requires token)
- **POST** `/auth/refresh` - Refresh access token

## 🎨 TypeScript Features Showcase

### Custom Types

```typescript
// src/types/recipe.ts
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
}
```

### Typed RTK Query

```typescript
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
    getRecipes: builder.query<RecipesResponse, RecipeQueryParams>({
      // Fully typed query
    }),
  }),
});
```

### Typed State Management

```typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

## 🚀 Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

2. **Netlify**
```bash
npm run build
# Deploy dist folder to Netlify
```

3. **GitHub Pages**
```bash
npm install gh-pages --save-dev
npm run deploy
```

## 🎯 Key Features Implementation

### 1. Type-Safe Pagination
- Strongly typed limit and skip parameters
- Type-safe page calculations
- Typed pagination state

### 2. Type-Safe Search
- Typed search parameters
- Type-safe query building
- Typed search results

### 3. Type-Safe CRUD Operations
- Strongly typed create/update inputs
- Type-safe mutation hooks
- Typed response handling

### 4. Type-Safe Authentication
- Typed credentials
- Type-safe token management
- Typed user state

## 🐛 Known Limitations

- DummyJSON is a mock API, so:
  - New recipes are simulated (not permanently stored)
  - Updates and deletes are simulated
  - Registration is for demo purposes only
  - Use provided demo credentials for actual login

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com) for the free API
- [Unsplash](https://unsplash.com) for beautiful food images
- [Tailwind CSS](https://tailwindcss.com) for the styling framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [TypeScript](https://www.typescriptlang.org/) for type safety

---

**⭐ If you like this project, please give it a star on GitHub!**

**Built with TypeScript for Enhanced Developer Experience and Type Safety** 🎯
