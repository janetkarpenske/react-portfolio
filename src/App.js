import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import Projects from './pages/Projects';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import ParticlesComponent from './components/particles';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'about',
        element: <AboutPage />
      }
    ]
  }
])


function App() {
  return (
    <>
      <ParticlesComponent id="particles" />
      <RouterProvider router={router} />
    </>);
}

export default App;
