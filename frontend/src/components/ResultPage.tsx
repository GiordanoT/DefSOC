import {Result, Section} from '../common/types';
import {useState, ReactElement, Dispatch, SetStateAction} from 'react';
import {Summary, Scores, Ports, DataLeak, Vulnerabilities, Waf, Others} from './tabs';

type Props = {setResult: Dispatch<SetStateAction<Result|null>>, data: Result};
type Index = {root: Section, title: string, component: (props: Props) => ReactElement}
function ResultPage(props: Props) {
    const {setResult, data} = props;
    const [section, setSection] = useState<Section>('summary');
    const indexes: Index[] = [
        {root: 'summary', title: 'Summary', component: Summary},
        {root: 'scores', title: 'Score', component: Scores},
        {root: 'ports', title: 'Ports Expositions', component: Ports},
        {root: 'dataleak', title: 'Data Leak', component: DataLeak},
        {root: 'vulnerabilities', title: 'Vulnerabilities', component: Vulnerabilities},
        {root: 'waf', title: 'WAF', component: Waf},
        {root: 'others', title: 'Others', component: Others},
    ]

    return(<div className={''}>
        <div className={'leftbar bg-dark'}>
            {indexes.map(i => <div key={i.root} className={`item ${section === i.root && 'item-active'}`} onClick={() => setSection(i.root)}>
                {i.title}
            </div>)}
            <button className={'mt-4 d-block btn btn-danger mx-auto py-0 px-2'} onClick={() => setResult(null)}>Back</button>
        </div>
        <div className={'content'}>
            {indexes.filter(i => i.root === section).map(i => <i.component key={i.root} setResult={setResult} data={data} />)}
        </div>
    </div>);
}
export {ResultPage}
