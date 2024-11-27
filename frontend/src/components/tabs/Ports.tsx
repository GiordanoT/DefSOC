import {Result} from '../../common/types';
import {Bar} from '../../charts';
type Props = {data: Result};

function Ports(props: Props) {
    const {data} = props;
    return(<Bar ports={data.n_port} />);
}

export {Ports};
