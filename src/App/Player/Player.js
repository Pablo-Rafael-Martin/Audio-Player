import './style.css';


// Composto pela capa, nome e botões
function Player({capa, author, title}){
    return (
        <div id='Player'>
            <img src={capa}/>
            <div className='container-audio-info'>
                <span className='título'>{title}</span>
                <span className='autor'>{author}</span>
            </div>
            <div id='container-botões'>
                <button id="voltar-faixa" class="bi bi-skip-start-fill"></button>
                <button id="tocar-faixa" class="bi bi-play-circle-fill"></button>
                <button id="próxima-faixa" class="bi bi-skip-end-fill"></button>
            </div>
        </div>
    );
}

export default Player;