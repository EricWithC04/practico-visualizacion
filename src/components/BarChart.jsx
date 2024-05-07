// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ data }) => {
    return <Bar data={data} />;
};

export default BarChart;
