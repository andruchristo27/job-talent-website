import React, { useRef, useEffect, useState } from 'react';
import {
    Chart, DoughnutController, ArcElement, TimeScale, Tooltip,
} from 'chart.js';
import { useThemeProvider } from '../../utils/ThemeContext';

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

function DoughnutChart({ data, width, height }) {
    const [chart, setChart] = useState(null);
    const [legendItems, setLegendItems] = useState([]);
    const canvas = useRef(null);
    const { currentTheme } = useThemeProvider();
    const darkMode = currentTheme === 'dark';

    useEffect(() => {
        const ctx = canvas.current;
        const newChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                cutout: '80%',
                layout: {
                    padding: 24,
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                interaction: {
                    intersect: false,
                    mode: 'nearest',
                },
                animation: {
                    duration: 500,
                },
                maintainAspectRatio: false,
                resizeDelay: 200,
            },
        });

        // Generate legend items
        const items = data.labels.map((label, index) => {
            const bgColor = data.datasets[0].backgroundColor[index];
            return { label, bgColor };
        });
        setLegendItems(items);

        setChart(newChart);
        return () => newChart.destroy();
    }, [data]);

    return (
        <div className="flex flex-row items-center pl-0 ml-0">
            <div>
                <canvas ref={canvas} width={width} height={height}></canvas>
            </div>
            <div>
                <ul className="flex flex-col items-start ">
                    {legendItems.map((item, index) => (
                        <li key={index} className="flex items-center m-1">
                            <span className="w-4 h-4 mr-2" style={{ backgroundColor: item.bgColor }}></span>
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DoughnutChart;
