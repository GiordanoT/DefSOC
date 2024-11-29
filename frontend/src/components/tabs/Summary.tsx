import {Result} from '../../common/types';
import U from '../../common/U';
type Props = {data: Result};

function Summary(props: Props) {
    const {data} = props;
    const text = data.summary_text_en.replaceAll('- ', '');
    const titles = U.extract(text, '**', '**');
    const content = U.extract(text.slice(2) + '**', '**', '**');

    return(<div className={'p-2'}>
        <div>ID: <b>{data.idsummary}</b></div>
        <div>Creation Date: <b>{data.creation_date}</b></div>
        <div>Last Edit: <b>{data.last_edit}</b></div>
        <div>Domain Name: <b>{data.domain_name}</b></div>
        <hr />
        {titles.map((_, index) => <div key={index}>
            <b>{titles[index]}</b>
            <label>{content[index]}</label>
        </div>)}
    </div>);
}

export {Summary};
