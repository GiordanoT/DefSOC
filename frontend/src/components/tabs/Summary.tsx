import {Result} from '../../common/types';
type Props = {data: Result};

function Summary(props: Props) {
    const {data} = props;
    return(<div className={'p-2'}>{data.summary_text_en}</div>);
}

export {Summary};
