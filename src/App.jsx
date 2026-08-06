import './App.css'
import Perfil from './components/perfil'
import Petcard from './components/petcard';

function App() {
  
  const idade = 3
  
  return (
    <main>
      <h1>Aula 06/08/26</h1>
      <p>Idade em meses: {idade * 12}</p>

      <h2>TUTORIAL</h2>
      <Perfil/>

      <h2>ATIVIDADE 1</h2>
      <Petcard/>

      <h2>ATIVIDADE 2</h2>
    </main>
   )
}

export default App
