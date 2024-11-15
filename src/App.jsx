import "./App.css";
import FormLogin from "./components/FormLogin/FormLogin";
import Header from "./components/Header/Header";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

const Container = styled.div`
  padding-left: 110px;
  padding-right: 110px;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<FormLogin />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
