// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = ({ data }) => {
    return <Pie data={data} />;
};

export default PieChart;
