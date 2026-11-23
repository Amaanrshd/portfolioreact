import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const titles = {
  '/': 'Home',
  '/about': 'About',
  '/skills': 'Skills',
  '/projects': 'Projects',
  '/contact': 'Contact',
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${titles[pathname] ?? 'Not found'} | Amaan`
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
