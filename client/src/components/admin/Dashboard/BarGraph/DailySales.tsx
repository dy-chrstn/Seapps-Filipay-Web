import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js/auto';

Chart.register(...registerables);

interface BarGraphData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
    }[];
}

interface BarGraphProps {
    barData: BarGraphData;
}

const DailySales: React.FC<BarGraphProps> = ({ barData }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (chartRef.current && barData) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'bar',
                    data: barData,
                    options: {
                       
                    },
                });
            }
        }
    }, []);

    return <canvas ref={chartRef} />;
};

export default DailySales;
