import {Result, Section} from '../common/types';
import {useState} from 'react';
import {Summary, Scores, Ports, Addresses} from './tabs';

type Props = {data: Result};
function ResultPage(props: Props) {
    const {data} = props;
    const [section, setSection] = useState<Section>('summary');

    return(<div className={'mt-1 p-1 m-1'}>
        <div>ID: <b>{data.idsummary}</b></div>
        <div>Creation Date: <b>{data.creation_date}</b></div>
        <div>Last Edit: <b>{data.last_edit}</b></div>
        <div>Domain Name: <b>{data.domain_name}</b></div>
        <div className={'w-100 h-100 border border-dark'}>
            <nav className={'w-100 text-white d-flex p-2 bg-dark'}>
                <button onClick={() => setSection('summary')} className={'btn btn-light'}>Summary</button>
                <button onClick={() => setSection('scores')} className={'btn btn-light mx-2'}>Scores</button>
                <button onClick={() => setSection('ports')} className={'btn btn-light'}>Ports Expositions</button>
                <button onClick={() => setSection('addresses')} className={'btn btn-light mx-2'}>Addresses</button>
            </nav>
            {section === 'summary' && <Summary data={data} />}
            {section === 'scores' && <Scores data={data} />}
            {section === 'ports' && <Ports data={data} />}
            {section === 'addresses' && <Addresses data={data} />}
        </div>
    </div>);
}
export {ResultPage}
