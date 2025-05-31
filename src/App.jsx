
import { Route, Routes } from 'react-router';
import { lazy } from 'react';
import './App.css';
import AppSuspens from './layouts/AppSuspens';
import MainLayout from './layouts/MainLayout';
import SingleContact from './pages/SingleContact';
import Materials from './pages/Materials'
import Students from './pages/students';
import Ratings from './pages/Ratings'


const NotFoundPage = lazy(()=> import('./pages/404'));
const HomePage = lazy(()=>import('./pages/Home'))
const AboutPage = lazy(()=>import('./pages/About'))
const Contacts = lazy(()=>import('./pages/Contacts'))

function App () {
  return (
<Routes>
  <Route path="/" element={<MainLayout/>}>
     <Route 
     index
  path='/' 
  element={
    <AppSuspens>
        <HomePage/>
    </AppSuspens>
    }
    />

<Route path="/about" element={<AppSuspens><AboutPage /></AppSuspens>}>
  <Route path="2/materials" element={<Materials />} />
  <Route path="2/students" element={<Students />} />
  <Route path="2/ratings" element={<Ratings />} />
</Route>

  <Route 
  path='/contacts' 
  element={<AppSuspens>
    <Contacts/>
  </AppSuspens>}/>

  <Route 
  path='/contacts/:contactId' 
  element={<SingleContact/>}/>

  </Route>
  <Route 
  path='*' 
  element={
 <AppSuspens>
   <NotFoundPage/>
 </AppSuspens>
  } 
  />
</Routes>
  )
}
export default App;
