import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ListTypePokemon } from "./components/ListTypePokemon";
import { Navbar } from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import { DatosPokemonContextProvider } from "./contexts/DatosPokemonContextProvider";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Types } from "./pages/Types";

function App() {
  return (
    <DatosPokemonContextProvider>

    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/types" element={<Types />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/pokemon/:type" element={<ListTypePokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </DatosPokemonContextProvider>

  );
}

export default App;
