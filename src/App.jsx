import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Game from './game/Game'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Game />
      <Footer />
    </div>
  )
}

export default App
