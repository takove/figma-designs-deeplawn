import React from "react";

export default function Stats(props: any) {
  let stats = props.stats;
  return (
    <div className="flex py-4 space-x-5">
      {stats.map((stats:any) => (
        <div className="bg-dark-green p-5 rounded-lg" key={stats.id}>
          <p className="text-2xl font-bold text-green-100">{stats.title}</p>
          <p className="text-white text-xs">{stats.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
