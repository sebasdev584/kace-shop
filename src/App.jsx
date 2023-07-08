import DetalleProducto from "./components/ui/DetalleProducto"
import Home from "./components/ui/Home"
import VentaProducto from "./components/ui/VentaProducto"
import Layout from "./components/ui/Layout"
import { Route, Switch } from "wouter"

function App() {
  return (
    <>
      <Layout />
      <main className="bg-black flex justify-center items-center min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/product/:id">
            {params => <Home id={params.id} />}
          </Route>
          <Route path="/detalle" component={DetalleProducto} />
          <Route path="/venta" component={VentaProducto} />
        </Switch>
      </main>
    </>
  )
}

export default App
