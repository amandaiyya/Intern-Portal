import { Routes, Route, Navigate } from 'react-router-dom';
import {
  SignUp,
  Login,
  Dashboard,
} from './pages';

function App() {
  return (
    <>
      <Routes>
        {/* Root route */}
        <Route 
          path='/'
          element={
            <Navigate to='/login' />
          }
        />

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

        {/* Dashboard route */}
        <Route 
          path='/dashboard'
          element={
            <Dashboard />
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
