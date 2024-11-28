import {Result} from '../../common/types';
type Props = {data: Result};

function Summary(props: Props) {
    const {data} = props;
    return(<div className={'p-2'}>
        <div>ID: <b>{data.idsummary}</b></div>
        <div>Creation Date: <b>{data.creation_date}</b></div>
        <div>Last Edit: <b>{data.last_edit}</b></div>
        <div>Domain Name: <b>{data.domain_name}</b></div>
        <hr />
        {data.summary_text_en}
    </div>);
}

export {Summary};
