import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Article from './components/Article'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>

      <Header />
      <Main />
      <Article />
      <Footer />

    </div>

  )
}

export default App
