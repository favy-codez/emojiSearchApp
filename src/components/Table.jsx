const Table = ({ emojis, searchWord }) => {

    return (
        <div className="emojiContainer">
            {emojis.filter((val) => {
                if (searchWord === "") return val
                else if (val.unicodeName.toLowerCase().includes(searchWord.toLowerCase()) || val.character.toLowerCase().includes(searchWord.toLowerCase())) return val
            }).map((emoji) => (
                <div key={emoji.unicodeName} className="emojiCard" onClick={() => navigator.clipboard.writeText(emoji.character)}>
                    <div>
                        <p className='character'>{emoji.character}</p>
                        <p className='unicodeName'>{emoji.unicodeName}</p>
                    </div>
                    <p className='copy'>Click to copy</p>
                </div>
            ))}
        </div>
    )
}

export default Table