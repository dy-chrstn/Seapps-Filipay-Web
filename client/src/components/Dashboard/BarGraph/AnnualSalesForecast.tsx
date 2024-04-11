import React, { useEffect, useRef } from 'react';

import { Chart, registerables } from 'chart.js/auto';

Chart.register(...registerables);

interface BarGraphData {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
    }[];
}

interface BarGraphProps {
    barData: BarGraphData;
}

const MonthlySales: React.FC<BarGraphProps> = ({ barData }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (chartRef.current && barData) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'bar',
                    data: barData,
                    options: {
                    plugins: {
                        legend: {
                            display: false,   
                        }
                      }
                    },
                });
            }
        }
    }, []);

    return <canvas ref={chartRef} />;
};

export default MonthlySales;
