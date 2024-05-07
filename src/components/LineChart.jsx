import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
            {
                label: 'Ventas 2024',
                data: [65, 59, 80, 81, 56],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    return <Line data={data} />;
}

export default LineChart;
