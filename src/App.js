import React, { useState } from 'react';
import './App.css';

function App() {

  // armazenar o estado do jogo (ENTRADA, RODANDO, FIM)
  const [estado, setEstado] = useState('ENTRADA')
  
  // armazenar o estado do palpite da máquina
  const [palpite, setPalpite] = useState(150)
  
  // armazenar o número de palpites
  const [numPalpites, setNumPalpites] = useState(1)
  
  // setando o valor mínimo e o valor máximo
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)


  // ENTRADA DO JOGO
  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
  }
  if (estado === 'ENTRADA') {
    return <button onClick={iniciarJogo}>Começar a jogar</button>
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) /2) + min
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpites(numPalpites + 1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }

  const acertou = () => {
    setEstado('FIM')
  }
  if(estado === 'FIM'){
    return (
    <div>
      <p>Acertei o número {palpite} com {numPalpites} chutes!</p>
      <button onClick={iniciarJogo}>Iniciar Novamente</button>
    </div>
    )
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
// nosso chute pode ser de 0 <> 300 
// quanto palpites que a maquina deu
export default App;
