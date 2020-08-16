import React, { useState, useEffect } from 'react';
import { fetchDataDaily } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
    const [dailyData, setdailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setdailyData(await fetchDataDaily());
        }

        fetchAPI();
    },[]);

    const lineChart = (
        dailyData.length
            ? (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true,
                    }]
                }}
            />) : null
    );

    const barChart = (
       confirmed
        ?(
            <Bar
            data = {{
                    labels:['Infected','Recovered','Deaths'],
                   datasets:[{
                       label: 'People',
                       backgroundColor:[
                        'rgb(0, 0, 255,0.5)',
                        'rgb(0, 255, 0,0.5)',
                        'rgb(255, 0, 0,0.5)',
                    ],
                    data:[confirmed.value, deaths.value, recovered.value]
                   }] 
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Country State in ${country}`},
            }}
            />
        ): null
    );




return (
    <div className={styles.container}>
        {country ? barChart : lineChart};
     
    </div>
)
}

export default Chart;