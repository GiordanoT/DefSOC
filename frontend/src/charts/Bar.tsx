import {Bar as B} from 'react-chartjs-2';


type Props = {ports: Record<string, {n: number}>}
function Bar(props: Props) {
    const {ports} = props;
    const data: any = {
        labels: ['Expositions'],
        datasets: []
    };

    for(const [key, value] of Object.entries(ports)) {
        data.datasets.push({
            label: `Port ${key}`,
            backgroundColor: 'rgb(49,145,187)',
            data: [value.n]
        });
    }

    const options = {
        responsive: true,
        scales: {
            y: {beginAtZero: true}
        }
    };

    return (<div className={'p-1 m-1'} style={{width: 'auto'}}>
        <B data={data} options={options} />
    </div>);
}

export {Bar};
