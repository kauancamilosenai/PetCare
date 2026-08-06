import './App.css'
import Perfil from './components/perfil'

function App() {
  
  const idade = 3
  
  return (
    <main>
      <h1>Aula 06/08/26</h1>
      <p>Idade em meses: {idade * 12}</p>
      <Perfil/>
    </main>
   )
}

export default App
