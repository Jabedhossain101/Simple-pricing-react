import { Line, LineChart, XAxis, YAxis } from 'recharts';
import React from 'react';

const resultData = [
  {
    id: 1,
    name: 'Alice',
    physics: 87,
    chemistry: 82,
    math: 78,
  },
  {
    id: 2,
    name: 'Bob',
    physics: 75,
    chemistry: 70,
    math: 78,
  },
  {
    id: 3,
    name: 'Charlie',
    physics: 92,
    chemistry: 88,
    math: 85,
  },
  {
    id: 4,
    name: 'David',
    physics: 68,
    chemistry: 65,
    math: 70,
  },
  {
    id: 5,
    name: 'Ella',
    physics: 81,
    chemistry: 79,
    math: 85,
  },
  {
    id: 6,
    name: 'Frank',
    physics: 74,
    chemistry: 71,
    math: 76,
  },
  {
    id: 7,
    name: 'Grace',
    physics: 90,
    chemistry: 86,
    math: 83,
  },
  {
    id: 8,
    name: 'Hannah',
    physics: 65,
    chemistry: 80,
    math: 78,
  },
  {
    id: 9,
    name: 'Ian',
    physics: 78,
    chemistry: 85,
    math: 80,
  },
  {
    id: 10,
    name: 'Jane',
    physics: 85,
    chemistry: 83,
    math: 88,
  },
];

const ResultsCharts = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis dataKey={''}></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey={'chemistry'} stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsCharts;
