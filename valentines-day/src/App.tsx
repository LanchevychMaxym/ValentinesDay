import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useSound from 'use-sound'
import gif from './assets/cute-bear.gif'
import gif2 from './assets/cute-bear2.gif'
import mySound from './assets/music.mp3'

function App() {

  const [count, setCount] = useState(0);
  const [noVisible, setNoVisible] = useState(true);
  const [yesClicked, setYesClicked] = useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [yesHeight, setYesHeight] = useState(40)
  const [fontSize, setFontSize] = useState(20)
  const [playSound, {pause}] = useSound(mySound, {
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(true),
  });
  
  let noOptions = ["Ні", "Ти впевнена?", "Точно впевнена?", "Точно-точно?", "Добре подумала?", "Останній шанс!", "Реально ні?", "Це остаточна відповідь?", "Подумай ще раз!", "Ти можеш зробити велику помилку!", "Та май Бога в серці!", "Чому ти така холодна?", "Ти розбиваєш мені серце...;("]
  const onClickNo = () =>
  {
    if(count == noOptions.length - 1)
    {
      setCount(0);
      setNoVisible(false)
    }
    else
    {
      setCount(count + 1);
      setYesHeight(yesHeight + 40)
      setFontSize(fontSize + 10)
    }
  }

  const onClickYes = () =>
  {
    setYesClicked(true)
    playSound()
  }


  useEffect(() => {
    playSound()
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
        Vilentine's proposal
      </header> */}
      {
        !yesClicked?
      <div className='mainblock'>
        <img src={gif}></img>
        <div className='MainText'>
          <h1>Ти будеш моєю Валентинкою?</h1>
          <div className='buttons'>
            <button className="mybtn btn btn-success" onClick={onClickYes} style={{height : `${yesHeight}px`, width : `${yesHeight}px`, fontSize : `${fontSize}px`}}>Так</button>
            {noVisible == true ? <button className="mybtn btn btn-danger" onClick={onClickNo} style={{height : `40px`}}>{noOptions[count]}</button> : null}
          </div>
        </div>
      </div> :
      <div className='mainblock'>
        <img src={gif2}></img>
        <h1>Ти моя киця 😘</h1>
      </div>}
    </div>
  );
}

export default App;
