import {Dispatch, SetStateAction} from 'react';
import {Result} from '../common/types';

type Props = {setResult: Dispatch<SetStateAction<Result|null>>, status: boolean};
function Navbar(props: Props){
    const {setResult, status} = props;
    return(<nav className={'w-100 bg-dark p-1 d-flex'}>
        <button className={'btn btn-primary'} onClick={() => setResult(null)}>HOME</button>
        <div className={'d-flex ms-auto'}>
            <b className={'text-white my-auto'}>Status</b>
            <figure className={`${status ? 'bg-success' : 'bg-danger'} status mx-2 my-auto`} />
        </div>
    </nav>)
}

export {Navbar};
