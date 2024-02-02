import './App.css';
import Player from './Player/Player';
import capa from '../assets/imagens/dom-casmurro.jpeg';
import audio1 from '../assets/áudios/1.mp3';
import audio2 from '../assets/áudios/2.mp3';
import audio3 from '../assets/áudios/3.mp3';
import audio4 from '../assets/áudios/4.mp3';
import audio5 from '../assets/áudios/5.mp3';
import audio6 from '../assets/áudios/6.mp3';
import audio7 from '../assets/áudios/7.mp3';
import audio8 from '../assets/áudios/8.mp3';
import audio9 from '../assets/áudios/9.mp3';
import audio10 from '../assets/áudios/10.mp3';
import { useState, useRef, useEffect } from 'react'

function App() {
  const promise = [
    {capa: capa, title: "Capítulo 1", author: 'Machado de Assis', track: audio1},
    {capa: capa, title: "Capítulo 2", author: 'Machado de Assis', track: audio2},
    {capa: capa, title: "Capítulo 3", author: 'Machado de Assis', track: audio3},
    {capa: capa, title: "Capítulo 4", author: 'Machado de Assis', track: audio4},
    {capa: capa, title: "Capítulo 5", author: 'Machado de Assis', track: audio5},
    {capa: capa, title: "Capítulo 6", author: 'Machado de Assis', track: audio6},
    {capa: capa, title: "Capítulo 7", author: 'Machado de Assis', track: audio7},
    {capa: capa, title: "Capítulo 8", author: 'Machado de Assis', track: audio8},
    {capa: capa, title: "Capítulo 9", author: 'Machado de Assis', track: audio9},
    {capa: capa, title: "Capítulo 10", author: 'Machado de Assis', track: audio10},
  ];

  const [indexFaixaAtual, setIndexFaixaAtual] = useState(0);

  function proximaFaixa() {
    setIndexFaixaAtual((index) => (index + 1) % promise.length);
  }

  function faixaAnterior() {
    setIndexFaixaAtual((index) => (index - 1 + promise.length) % promise.length);
  }

  const faixaAtual = promise[indexFaixaAtual];





  return (
    <div id="App">
      <Player 
      capa={faixaAtual.capa} 
      title={faixaAtual.title} 
      author={faixaAtual.author} 
      track={faixaAtual.track} 
      proximaFaixa={proximaFaixa} 
      faixaAnterior={faixaAnterior}
      />
    </div>
  );
}

export default App;
