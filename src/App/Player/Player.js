import './style.css';


// Composto pela capa, nome e botões
function Player({capa, author, title}){
    return (
        <div id='Player'>
            <img src={capa}/>
            <div className='audio-name'>
                <span className='título'>{title}</span>
                <span className='autor'>{author}</span>
            </div>
        </div>
    );
}

export default Player;