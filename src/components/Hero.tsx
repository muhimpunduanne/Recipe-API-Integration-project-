import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                🍳 Welcome to Our Recipes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
            >
              Discover & Share
              <br />
              <span className="text-primary-100">Amazing Recipes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-primary-50 leading-relaxed"
            >
              Join our community of food lovers. Explore thousands of recipes, share your culinary creations, and find your next favorite dish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/register" className="btn-primary bg-white text-primary-500 hover:bg-primary-50">
                Get Started
              </Link>
              <a href="#recipes" className="btn-secondary border-white text-white hover:bg-white/10">
                Explore Recipes
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-display font-bold">50+</div>
                <div className="text-primary-100 text-sm">Recipes</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <div className="text-3xl font-display font-bold">30+</div>
                <div className="text-primary-100 text-sm">Categories</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <div className="text-3xl font-display font-bold">100+</div>
                <div className="text-primary-100 text-sm">Users</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="h-64 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=500&fit=crop"
                    alt="Delicious food"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
                    alt="Tasty dish"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4 mt-8"
              >
                <div className="h-48 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
                    alt="Fresh ingredients"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=500&fit=crop"
                    alt="Gourmet meal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-gray-900 rounded-xl shadow-2xl p-6 w-72"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                  👨‍🍳
                </div>
                <div>
                  <div className="font-display font-bold text-lg">Emily Johnson</div>
                  <div className="text-sm text-gray-600">Master Chef</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                "This platform has revolutionized how I share recipes with my community!"
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <a href="#recipes" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-sm font-semibold">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
