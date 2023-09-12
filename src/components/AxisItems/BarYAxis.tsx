import React from 'react';
import YAxisTitle from './YAxisTitle';
import YAxisLable from './YAxisLable';

function BarYAxis({ className }: { className: string }) {
  return (
    <div className={className} style={{ backgroundColor: 'cornflowerblue' }}>
      <YAxisTitle />
      <YAxisLable />
    </div>
  );
}
export default BarYAxis;
