 import NavBar from "./components/Navbar"; 
 import ItemListContainer from "./components/ItemListContainer"; 
 import './components/Styles/app.css'; 
const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi Tienda Online"}/> 
    </div>
  )
}

export default App
