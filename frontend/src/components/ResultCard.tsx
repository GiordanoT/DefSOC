import {Result} from '../common/types';
import {Dispatch, SetStateAction} from "react";

type Props = {setResult: Dispatch<SetStateAction<Result|null>>, data: Result};
function ResultCard(props: Props) {
    const {data, setResult} = props;
    return(<div className={'mt-1 border my-rounded p-2 m-1 bg-white'}>
        <div>ID: <b>{data.idsummary}</b></div>
        <div>Creation Date: <b>{data.creation_date}</b></div>
        <div>Last Edit: <b>{data.last_edit}</b></div>
        <div>Domain Name: <b>{data.domain_name}</b></div>
        <button onClick={() => setResult(data)} className={'mt-1 btn btn-success py-0 px-2'}>SHOW</button>
    </div>);
}
export {ResultCard}
