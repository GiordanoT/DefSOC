import {Result} from '../../common/types';
type Props = {data: Result};

function Others(props: Props) {
    const {data} = props;
    return(<div className={'p-2'}>
        <div>Active Certificates: <b>{data.n_cert_attivi}</b></div>
        <div>Expired Certificates: <b>{data.n_cert_scaduti}</b></div>
        <div>Analyzed Assets: <b>{data.n_asset}</b></div>
        <div>Similar Domains: <b>{data.n_similar_domains}</b></div>
        <div>Email Security: <b>{data.email_security.spoofable}</b> (DMARK Policy: <b>{data.email_security.dmarc_policy}</b>)</div>
        <div>Content Delivery Network: <b>{data.cdn.count}</b></div>
        <div>Unique ipv4: <b>{data.unique_ipv4}</b></div>
        <div>Unique ipv6: <b>{data.unique_ipv6}</b></div>
    </div>);
}

export {Others};
