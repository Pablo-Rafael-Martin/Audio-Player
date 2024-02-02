import './style.css';
import {useState, useRef, useEffect } from 'react';


function Player({capa, author, title, track, proximaFaixa, faixaAnterior}){
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    function tocarFaixa(){
        if (isPlaying) {
            audioRef.current.pause();

        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    const playerIcon = isPlaying ? "bi bi-pause-circle-fill" : "bi bi-play-circle-fill";



    return (
        <div id='Player'>
            <img src={capa}/>
            <div className='container-audio-info'>
                <span className='título'>{title}</span>
                <span className='autor'>{author}</span>
            </div>

            <audio ref={audioRef} id='faixa-atual' src={track}></audio>

            <div id='container-botões'>
                <button id="voltar-faixa" class="bi bi-skip-start-fill" onClick={faixaAnterior}></button>
                <button id="tocar-faixa" class={playerIcon} onClick={tocarFaixa}></button>
                <button id="próxima-faixa" class="bi bi-skip-end-fill" onClick={proximaFaixa}></button>
            </div>
        </div>
    );
}

export default Player;