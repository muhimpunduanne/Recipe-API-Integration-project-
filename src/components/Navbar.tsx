import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, selectCurrentUser, logout } from '@features/auth/authSlice';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsProfileOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-2xl">🍳</span>
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-gray-900 group-hover:text-primary-500 transition-colors">
                Our Recipes
              </h1>
              <p className="text-xs text-gray-500">Discover & Share</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-500 font-semibold transition-colors"
            >
              Home
            </Link>
            <a
              href="/#recipes"
              className="text-gray-700 hover:text-primary-500 font-semibold transition-colors"
            >
              Recipes
            </a>

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-primary-500 font-semibold transition-colors"
                >
                  Dashboard
                </Link>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user?.firstName?.[0] || 'U'}
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-600 transition-transform ${
                        isProfileOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        <div className="p-4 bg-gradient-primary text-white">
                          <div className="font-display font-bold text-lg">
                            {user?.firstName} {user?.lastName}
                          </div>
                          <div className="text-sm text-primary-100">{user?.email}</div>
                        </div>
                        <div className="p-2">
                          <Link
                            to="/dashboard"
                            className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                              </svg>
                              Dashboard
                            </div>
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              Logout
                            </div>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-outline">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <a
                  href="/#recipes"
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Recipes
                </a>

                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <div className="px-4 py-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          {user?.firstName?.[0] || 'U'}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {user?.firstName} {user?.lastName}
                          </div>
                          <div className="text-xs text-gray-600">{user?.email}</div>
                        </div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full mt-2 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block mx-4 px-4 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
