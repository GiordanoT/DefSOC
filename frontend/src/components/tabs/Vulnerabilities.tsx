import {Result} from '../../common/types';

type Props = {data: Result};
function Vulnerabilities(props: Props) {
    const {data} = props;

    return(<div className={'d-flex p-2'}>
        {Object.entries(data.n_vulns).map(([category, vulnerability]) => {
            if(category === 'enumeration') return(<></>);
            else return(<div style={{overflow: 'hidden'}} className={'border me-1 my-rounded bg-white'} key={category}>
                <div className={'w-100 bg-primary text-white text-center'}>
                    <b>{category.toUpperCase()}</b>
                </div>
                {Object.entries(vulnerability).map(([field, value]) => <div className={'text-center mx-4'} key={field}>
                    {field}: <b>{value}</b>
                </div>)}
            </div>);
        })}
    </div>);
}

export {Vulnerabilities};
