import { createBrowserRouter } from 'react-router'
import Root from './root/Root'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import ServiceAreas from './pages/ServiceAreas'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import SeoSettings from './pages/SeoSettings'
import BlogPost from './pages/BlogPost'
import FAQ from './pages/FAQ'
import LocalService from './pages/LocalService'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: Services },
      { path: 'gallery', Component: Gallery },
      { path: 'about', Component: About },
      { path: 'service-areas', Component: ServiceAreas },
      { path: 'reviews', Component: Reviews },
      { path: 'contact', Component: Contact },
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: BlogPost },
      { path: 'faq', Component: FAQ },
      { path: 'seo-settings', Component: SeoSettings },
      { path: ':citySlug/:serviceSlug', Component: LocalService },
    ],
  },
])
