import {people} from './people.json'
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [playSong, setPlaySong] = useState(false);

  let extraImage = null;
  if (selectedPerson) {
    extraImage = <img src={selectedPerson+".jpg"} className="main-background" alt={selectedPerson}/>
  }

  let soundcloudPlayer = "Next Level Loft";
  if (playSong) {
    soundcloudPlayer = (
      <div>
        <iframe title="soundcloudplayer" width="70%" height="80" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1018227754&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="main-header">
        {soundcloudPlayer}
      </header>
      <img src="main-background.jpg" className="main-background" alt="Next Level Loft group" />
      {extraImage}
      <svg className="select-wrapper" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 75">
        <g className="select-fill">
          {people.map(person => {
            let ret = null;
            if (person.name === "headphones") {
              ret = (<path d={person.pathdata} className="select-person"
                onClick={()=>setPlaySong(true)}
                onMouseEnter={() => {setSelectedPerson(person.name)}}
                onMouseLeave={() => {if (selectedPerson === person.name) {setSelectedPerson(null);}}}
              />);
            } else {
              ret = (
              <a key={person.name} href={person.link} target="_blank" rel="noreferrer">
                <path d={person.pathdata} className="select-person"
              onMouseEnter={() => {setSelectedPerson(person.name)}}
              onMouseLeave={() => {if (selectedPerson === person.name) {setSelectedPerson(null);}}}
                />
              </a>
              );
            }
            return ret;
          })}
        </g>
      </svg>
    </div>
  );
}

export default App;
