import { Routes, Route, Navigate } from 'react-router-dom';
import {
  SignUp,
  Login,
  Home,
  Dashboard,
  Leaderboard
} from './pages';

function App() {
  return (
    <>
      <Routes>
        {/* Root route */}
        <Route 
          path='/'
          element={
            <Home />
          }
        >
          <Route 
            index
            element={
              <Navigate to='dashboard' />
            }
          />
          <Route 
            path='dashboard'
            element={
              <Dashboard />
            }
          />
          <Route 
            path='leaderboard'
            element={
              <Leaderboard />
            }
          />
        </Route>

        {/* SignUp route */}
        <Route 
          path='/signup'
          element={
            <SignUp />
          }
        />

        {/* Login route */}
        <Route 
          path='/login'
          element={
            <Login />
          }
        />
          

        {/* Wildcard route for undefined paths. Shows a 404 error */}
        <Route 
          path='*'
          element={
            <p>404 Not found</p>
          }
        />
      </Routes>
    </>
  )
}

export default App
