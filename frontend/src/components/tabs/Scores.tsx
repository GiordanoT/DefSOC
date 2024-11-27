import {Result} from '../../common/types';
import {Doughnut} from '../../charts';
type Props = {data: Result};

function Scores(props: Props) {
    const {data} = props;
    return(<div className={'d-flex flex-wrap justify-content-center p-2'}>
        <Doughnut title={'Risk'} value={Number.parseInt(data.risk_score)} />
        <Doughnut title={'Exposed Service'} value={data.servizi_esposti_score} />
        <Doughnut title={'Data Leak'} value={data.dataleak_score} />
        <Doughnut title={'Email'} value={data.rapporto_leak_email_score} />
        <Doughnut title={'Spoofing'} value={data.spoofing_score} />
        <Doughnut title={'Open Ports'} value={data.open_ports_score} />
        <Doughnut title={'Blacklist'} value={data.blacklist_score} />
        <Doughnut title={'Active Vulnerability'} value={data.vulnerability_score_active} />
        <Doughnut title={'Passive Vulnerability'} value={data.vulnerability_score_passive} />
        <Doughnut title={'Certificate'} value={data.certificate_score} />
    </div>);
}

export {Scores};
