import {Doughnut as D} from 'react-chartjs-2';

type Props = {title: string, value: number}
function Doughnut(props: Props) {
    const {title, value} = props;
    const maxScore = 100;

    const data = {
        datasets: [
            {
                data: [value, maxScore - value],
                backgroundColor: ['rgb(66,168,37)', 'rgba(0,0,0,0.75)'],
                borderWidth: 0
            },
        ],
    };

    const options = {
        responsive: true,
        rotation: -90,
        circumference: 180,
        plugins: {
            tooltip: {enabled: false}
        },
        cutout: '80%',
    };

    return (<div className={'p-1 m-1'} style={{width: 'auto'}}>
        <b className={'d-block text-center'}>{title}: {value}/{maxScore}</b>
        <D data={data} options={options} />
    </div>);
}

export {Doughnut};
