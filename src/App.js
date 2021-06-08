import { useEffect, useState } from 'react';
import { DigimonCard } from './components/DigimonCard';

function App() {
  const [digimons, setDigimons] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filteredDigimons, setFilteredDigimons] = useState([]);

  const levels = ['All', ...new Set( digimons.map(digimon => digimon.level)) ];

  useEffect(() => {
    fetch('https://digimon-api.herokuapp.com/api/digimon/')
      .then(resp => resp.json())
      .then(setDigimons)
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredDigimons(digimons);
      return;
    }

    setFilteredDigimons(digimons.filter(digimon => digimon.level === filter))
  }, [filter, digimons]);

  return (
    <div>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        {levels.map((level) => <option key={level} value={level}>{level}</option>)}
      </select>
      <div style={styles.container}>
        {filteredDigimons.map((digimon) => <DigimonCard digimon={digimon} key={digimon.name} />)}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

export default App;
