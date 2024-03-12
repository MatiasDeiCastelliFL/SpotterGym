import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, CategoryScale, Title, ChartDataLabels);

// Registra el plugin personalizado
Chart.register({
  id: 'drawCircles',
  afterUpdate(chart) {
    const arcs:any = chart.getDatasetMeta(0).data;

    arcs.forEach((arc:any) => {
      arc.round = {
        x: (chart.chartArea.left + chart.chartArea.right) / 2,
        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
        radius: (arc.outerRadius + arc.innerRadius) / 2,
        thickness: (arc.outerRadius - arc.innerRadius) / 2,
        backgroundColor: arc.options.backgroundColor,
      };
    });
  },
  afterDraw: (chart:any) => {
    const { ctx } = chart;

    chart.getDatasetMeta(0).data.forEach((arc:any) => {
      const endAngle = Math.PI / 2 - arc.endAngle;

      ctx.save();
      ctx.translate(arc.round.x, arc.round.y);
      ctx.fillStyle = arc.options.backgroundColor;
      ctx.beginPath();
      ctx.arc(
        arc.round.radius * Math.sin(endAngle),
        arc.round.radius * Math.cos(endAngle),
        arc.round.thickness,

        0,

        2 * Math.PI
      );
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });
  },
});

const labels = ['Objetivo', 'Realizado', 'Restante'];
const colors = ['#F58A07', '#FCCF97', '#495057'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Distancia',
      data: [50, 20, 12],
      backgroundColor: colors,
      borderColor: '',
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: '65%',
  plugins: {
    datalabels: {
      display: false,
    },
  },
  legend: {
    labels: {
      filter: function (item:any, chart:any) {
        // Oculta 'Restante' de la leyenda
        return item.text !== 'Restante';
      },
    },
  },
};

export default function Grafic3() {
  return (
    <div style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        {labels.map((label, index) =>
          label !== 'Restante' ? (
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
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: colors[index],
                  marginRight: '5px',
                }}
              ></div>
              <div>{label}</div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
