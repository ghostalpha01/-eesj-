
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => (
  <div className="text-center p-6">
    <h1 className="text-3xl font-bold">Bem-vindo à EESJ</h1>
    <p className="mt-4">Formando líderes cristãos para servir a Deus e ao próximo.</p>
    <Button className="mt-6" asChild>
      <Link to="/sobre">Saiba Mais</Link>
    </Button>
  </div>
);

const Sobre = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Sobre a EESJ</h1>
    <p className="mt-4">Nossa missão é formar líderes fortes na fé e na vida.</p>
  </div>
);

const Contato = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Contato</h1>
    <p className="mt-4">Fale conosco pelo Instagram ou envie uma mensagem.</p>
  </div>
);

const Videos = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Vídeos</h1>
    <p className="mt-4">Confira nossos conteúdos no YouTube e Instagram.</p>
  </div>
);

const Doacoes = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Doações</h1>
    <p className="mt-4">Apoie nossa missão contribuindo com doações.</p>
  </div>
);

const Treinamentos = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Treinamentos</h1>
    <p className="mt-4">Programas de liderança e fortalecimento espiritual.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="p-4 bg-blue-600 text-white flex justify-around">
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/videos">Vídeos</Link>
          <Link to="/doacoes">Doações</Link>
          <Link to="/treinamentos">Treinamentos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/treinamentos" element={<Treinamentos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
