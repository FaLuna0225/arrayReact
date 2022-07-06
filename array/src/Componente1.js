import React, { useState } from "react";




function Componente1(){

    const [emojiRandom, setEmojiRandom]=useState(["😃","🥰","👀","🤭","❤️","😂","😏"])

    function agreagarEmojiRandom(){
        let emojisRandom = Math.floor(Math.random() * emojiRandom.length);
        setEmojiRandom([...emojiRandom,emojisRandom])
    }

    return (
        <div>
            <h1>Items de esta lista</h1>
            <button onClick={agreagarEmojiRandom.map((item) => <p>{item}</p>)}>Agregar Emoji</button>
        </div>
    )
}

export default Componente1