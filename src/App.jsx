import { BrowserRouter, Route, Routes } from "react-router-dom";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<IncomePage/>}> </Route>
        <Route path="/expense" element={<ExpensePage/>}> </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
