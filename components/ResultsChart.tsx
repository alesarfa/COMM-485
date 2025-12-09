import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Before App', time: 16, label: '16 min' },
  { name: 'With WeWill', time: 4, label: '4 min' },
];

export const ResultsChart: React.FC = () => {
  return (
    <div className="w-full h-80">
      <h3 className="text-center font-semibold mb-6 text-gray-700">Processing Time Per Document</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#4B5563', fontSize: 14 }} 
            axisLine={false} 
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
          />
          <Bar dataKey="time" radius={[8, 8, 0, 0]} barSize={80}>
             {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#9CA3AF' : '#0015FF'} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};