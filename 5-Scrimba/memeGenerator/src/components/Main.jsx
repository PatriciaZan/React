import React, { useEffect, useState } from 'react'

const Main = () => {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottonText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes ] = useState({})

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function randomMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        console.log(allMemes[randomNumber]);
        const newMemeUrl = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }

    function handleChange(event){
        //console.log("Changed!");
        const {value, name} = event.currentTarget
        //console.log(value);
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
        
        
    }
  return (
    <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottonText}
                    />
                </label>
                <button onClick={randomMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottonText}</span>
            </div>
        </main>
  )
}

export default Main