import './App.css';
import Perfil from './components/perfil';
import Petcard from './components/petcard';
import Listacuidados from './components/listacuidados';
import Caixa from './components/Caixa';
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';

function App() {
  
  const idade = 3
  
  return (
    <main>
      <Cabecalho/>

      <h1>Aula 06/08/26</h1>
      <p>Idade em meses: {idade * 12}</p>

      <h2>TUTORIAL</h2>
      <Perfil/>
      <br></br>

      <h2>ATIVIDADE 1</h2>
      <Petcard/>

      <h2>ATIVIDADE 2</h2>
      <Listacuidados/>
      <br></br>

      <h1>Aula 10/08/26</h1>
      <Caixa titulo="Pets">
        <p>vira children</p>
      </Caixa>

      <br></br> <Petcard nome="robson" especie="pessoa do bem" idade={19} vacinado={false} />
      <Petcard nome="Luscaguinha" especie="gente" idade={25} vacinado={true} />
      <Petcard nome="Kauan (eu)" especie="pessoa" idade={16} vacinado={true} />

      <br></br><Rodape/>
    </main>
   )
}

export default App
