import {useState, useEffect} from 'react';
import {Result, Summary} from './common/types';
import {Navbar, ResultCard, ResultPage} from './components';
import './components/style.css';

function App() {
  const [summary, setSummary] = useState<Summary|null>(null);
  const [result, setResult] = useState<Result|null>(null);

  // useEffectOnce
  useEffect(() => {
    (async function() {
      const response = await fetch('./summary.json');
      if(response.ok) {
        const json = await response.json();
        setSummary(json);
        // todo: delete this
        setResult(json['results'][0])
      }
    })();
  }, []);

  if(!summary) return(<div>Loading...</div>);
  else return(<>
    <Navbar setResult={setResult} status={summary.status === 'success'} />
    {result ?
        <ResultPage data={result} /> :
        summary.results.map(r => <ResultCard  key={r.idsummary} setResult={setResult} data={r} />)
    }
  </>);
}

export default App;
