import DetalleProducto from "./components/ui/DetalleProducto"
import Home from "./components/ui/Home"
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
        </Switch>
      </main>
    </>
  )
}

export default App
