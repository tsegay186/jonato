import React from "react";
const StatsUI = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-white">
      <div className="text-white text-3xl">Stats</div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-bold">Total Share Balance</p>
        <p className="font-thin">416.281 T</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold">Total Touches</p>
        <p className="font-thin">1234567</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold">Total Players</p>
        <p className="font-thin">64,000,000</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold">Daily users</p>
        <p className="font-thin">1222</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold">online players</p>
        <p className="font-thin">90000</p>
      </div>
    </div>
  );
};

export default StatsUI;
