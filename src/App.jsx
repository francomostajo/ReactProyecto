import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi Tienda Online"}/>
    </div>
  )
}

export default App
