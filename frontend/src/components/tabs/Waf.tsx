import {Result} from '../../common/types';

type Props = {data: Result};
function Waf(props: Props) {
    const {data} = props;
    const waf = data.waf;

    return(<div className={'p-2'}>
        Assets: <b>{waf.count}</b>
        {waf.assets.map(a => <b className={'d-block'} key={a}>{a}</b>)}
    </div>);
}

export {Waf};
