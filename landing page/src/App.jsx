import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Article from './components/Article'
import Footer from './components/Footer'
import NoteBookVideo from './components/NoteBookVideo'

function App() {
  const [theme, setTheme] = useState('dark') // dark como padrão

  // Essa função troca o tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Aplica a classe dark no html (ou remove)
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main />
      <Article />
      <NoteBookVideo />
      <Footer />
    </div>
  )
}

export default App
