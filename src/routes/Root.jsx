import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Home } from "../pages/Home";
import Parceiro from "../pages/Parceiros";
import Propositos from "../pages/Propositos";
import { Products } from "../pages/Produtos";
import { Receitas } from "../pages/Receitas";
import { OndeComprar } from "../pages/OndeComprar";
import Construcao from "../pages/404";
import { Sidebar } from "../components/Sidebar";

const Root = () => {
  return (
    <Router id="page-wrap">
      <Sidebar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      
      />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onde-comprar" element={<OndeComprar />} />
        <Route path="/propositos" element={<Propositos />} />
        <Route path="/parceiro" element={<Parceiro />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="*" element={<Construcao />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Root;
