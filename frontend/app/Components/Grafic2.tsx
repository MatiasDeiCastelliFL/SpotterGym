import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, CategoryScale, Title, ChartDataLabels);

const labels = ['Cardio', 'Musculación', 'Natación'];
const colors = ['#F58A07', '#905104', '#FCCF97'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Popularidad',
      data: [60, 25, 15],
      backgroundColor: colors,
      borderColor: '#905104',
      borderWidth: 1,
    },
  ],
};

const options:any = {
  plugins: {
    datalabels: {
      color: function (context: { chart: { data: { labels: { [x: string]: string; }; }; }; dataIndex: string | number; }) {
        return context.chart.data.labels[context.dataIndex] === 'Natación'
          ? '#905104'
          : '#fff';
      },
      font: {
        size: 11,
        weight: '600',
        family: 'Work Sans',
      },
      formatter: (value: number, ctx: { chart: { data: { datasets: { data: any; }[]; labels: { [x: string]: string; }; }; }; dataIndex: string | number; }) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map((data: number) => {
          sum += data;
        });
        let percentage = ((value * 100) / sum).toFixed(2) + '%';
        return ctx.chart.data.labels[ctx.dataIndex] + '\n' + percentage;
      },
    },
  },
};

export default function Grafic2() {
  return (
    <div style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <Pie data={data} options={options} />
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        {labels.map((label, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '20px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: colors[index],
                marginRight: '5px',
              }}
            ></div>
            <div>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
