import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Dashboard from '@pages/Dashboard';
import RecipeDetail from '@pages/RecipeDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
