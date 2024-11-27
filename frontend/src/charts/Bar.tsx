import {Bar as B} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import U from '../common/U';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {ports: Record<string, {n: number}>}
function Bar(props: Props) {
    const {ports} = props;
    const data: any = {
        labels: ['Ports'],
        datasets: []
    };

    for(const [key, value] of Object.entries(ports)) {
        data.datasets.push({
            label: `Port ${key}`,
            backgroundColor: U.generateRandomRGB(),
            data: [value.n]
        });
    }

    const options = {
        responsive: true,
        scales: {
            y: {beginAtZero: true}
        }
    };

    return (<div className={'p-1 m-1'} style={{width: '60%'}}>
        <B data={data} options={options} />
    </div>);
}

export {Bar};
