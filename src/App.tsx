import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import InstagramWidget from './components/InstagramWidget'
import ScrollManager from './components/ScrollManager'
import UnderwaterBackground from './components/UnderwaterBackground'
import Home from './pages/Home'
import BranchPage from './pages/BranchPage'
import { branches } from './data'

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <UnderwaterBackground />
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {branches.map((branch) => (
            <Route
              key={branch.slug}
              path={`/${branch.slug}`}
              element={<BranchPage branch={branch} />}
            />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <InstagramWidget />
    </div>
  )
}
