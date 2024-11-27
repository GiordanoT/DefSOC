import {Result} from '../../common/types';
import {Doughnut} from '../../charts';
type Props = {data: Result};

function Scores(props: Props) {
    const {data} = props;
    return(<div className={'d-flex'}>
        <Doughnut title={'Certificate'} value={data.certificate_score} />
        <Doughnut title={'Blacklist'} value={data.blacklist_score} />
    </div>);
}

export {Scores};
