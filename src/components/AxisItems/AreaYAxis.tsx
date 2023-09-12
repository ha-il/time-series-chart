import React from 'react';
import YAxisTitle from './YAxisTitle';
import YAxisLable from './YAxisLable';

function AreaYAxis({ className }: { className: string }) {
  return (
    <div className={className} style={{ backgroundColor: 'green' }}>
      <YAxisTitle />
      <YAxisLable />
    </div>
  );
}
export default AreaYAxis;
