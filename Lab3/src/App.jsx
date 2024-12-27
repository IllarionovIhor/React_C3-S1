import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import NoAccess from './pages/NoAccess'
import SecretPage from './pages/SecretPage'

import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  const [user, setUser] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home user={user} setUser={setUser} />} path='/'/>
        {/* <Route element={<NoAccess/>} path='/'/> */}

        <ProtectedRoutes>
          <Route element={<SecretPage user={user} />} path='/message'/>
        </ProtectedRoutes>
      </Routes>
    </BrowserRouter>
  )
}

export default App
