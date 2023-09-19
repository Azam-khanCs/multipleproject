import React from 'react';

const Box = (props) => {
  const backgroundClass = props.on ? " bg-slate-300" : "bg-slate-800";

  return (
    <div
      className={`border w-40 h-40 rounded-lg ${backgroundClass}`}
      onClick={props.toggle}
    >
    </div>
  );
}

export default Box;