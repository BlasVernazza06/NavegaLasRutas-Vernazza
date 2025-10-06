import './App.css'
import NavBar from './components/nav-bar'
import ItemListContainer from './components/itemlist-container'

function App() {

  return (
    <>
      <header className='w-full'>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="¡Bienvenidos a Aroma! Descubre los mejores cafés del mundo" />
      </main>
    </>
  )
}

export default App