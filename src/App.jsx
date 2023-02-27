import './App.css';
import SearchBar from "./components/SearchBar";
import Table from "./components/Table"
import { useEffect, useState } from 'react';
import LoadingGif from './images/1_F_5AEXIfr1AXuShXhYT4zg.gif'
// 963ce38cfcaa8fcd34d414e49d4f4a32eec493e6

//  9d7ace816f9b3fa0972320e6f29223a9525198bb
function App() {

  const [emojis, setEmojis] = useState([])
  const [searchWord, setSearchWord] = useState("")

  async function getEmojis(){
    const res = await fetch('https://emoji-api.com/emojis?access_key=963ce38cfcaa8fcd34d414e49d4f4a32eec493e6')
    const data = await res.json()

    console.log(data)
    if(res.ok){
      setEmojis(data)
    }
  }

  useEffect(() => {
    getEmojis()
  },[])

  return (
    <div className="App">
     <h1 className='emojiheader'>Emoji Search</h1>
      <SearchBar setSearchWord={setSearchWord}/>
      {emojis.length !== 0 ? <Table emojis={emojis} searchWord={searchWord}/> : <img className='loader' src={LoadingGif}/> }
    </div>
  );
}

export default App;
