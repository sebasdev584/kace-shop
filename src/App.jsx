import DetalleProducto from "./components/ui/DetalleProducto"
import Home from "./components/ui/Home"
import Layout from "./components/ui/Layout"
import { Route, Switch } from "wouter"

function App() {

  return (
    <>
      <Layout />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/product/:id">
          {params => <Home id={params.id} />}
        </Route>
        <Route path="/detalle" component={DetalleProducto} />
      </Switch>
    </>
  )
}

export default App
