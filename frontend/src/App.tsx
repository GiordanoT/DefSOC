import {useState, useEffect} from 'react';
import {Result, Summary} from './common/types';
import {Navbar, ResultCard, ResultPage} from './components';
import {Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import './components/style.css';

function App() {
  const [summary, setSummary] = useState<Summary|null>(null);
  const [result, setResult] = useState<Result|null>(null);

  // useEffectOnce
  useEffect(() => {
    ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    (async function() {
      const response = await fetch('./summary.json');
      if(response.ok) {
        const json = await response.json();
        setSummary(json);
      }
    })();
  }, []);

  if(!summary) return(<div>Loading...</div>);
  else return(<>
    <Navbar status={summary.status === 'success'} />
    {result ?
        <ResultPage setResult={setResult} data={result} /> :
        summary.results.map(r => <ResultCard  key={r.idsummary} setResult={setResult} data={r} />)
    }
  </>);
}

export default App;
