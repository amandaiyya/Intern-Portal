import { Routes, Route, Navigate } from 'react-router-dom';
import {
  SignUp,
  Login,
  Home,
  Dashboard,
  Leaderboard
} from './pages';
import { DivideIcon } from '@heroicons/react/24/solid';

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
            <>
              <div className='w-screen h-screen bg-[#eef3f7] flex justify-center items-center'>
                <div className='bg-white p-5 rounded-sm shadow-md md:text-xl text-red-500'>404 Not found ...</div>
              </div>
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App
