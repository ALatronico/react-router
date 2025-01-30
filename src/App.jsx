import About from "./pages/About"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Layout from "./layouts/Layout"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={Home} />
          <Route path="/chi-siamo" Component={About} />
          <Route path="/posts" Component={Posts} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App