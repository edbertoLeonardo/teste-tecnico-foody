import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import './App.css'
import Pedidos from './pages/Pedidos'


function Home() {
  return (
    <div className="app">
      <header className="header">
        <h1>Foody</h1>
        <p>Seus pedidos, acompanhados em tempo real.</p>
      </header>

      <main className="container">
        <section className="welcome">
          <h2>Bem-vindo ao Foody!</h2>
          <p>Acompanhe seus pedidos e faça novos pedidos.</p>

          <button className="btn-primary">
            Novo pedido
          </button>
        </section>

        <section className="pedidos">
          <h2>Meus pedidos</h2>
          <p className="mensagem">
            Seus pedidos aparecerão aqui.
          </p>
        </section>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
