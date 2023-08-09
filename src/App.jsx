//----------------------------------------------------------------
import "./App.scss";
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import Header from "./components/header/Header";
//----------------------------------------------------------------

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
