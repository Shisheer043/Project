import React, { useState } from "react";
import "./App.css";

const dateArray = ['24-04-2024','02-05-2024','09-05-2024','31-05-2024','21-06-2024'];
const strategyArray = [
  {
  'View': 'Bullish',
  'Value': [
  {date:'24-04-2024',name:'Bull Call Spread Bull Put Spread Bull Put Spread Long Call Bull PutSpread Bull Call Spread Strategy1 Bull CallSpread Strategy1 Strategy1 SpreadStrategy Bull Call Spread'},
 {date: '02-05-2024',name:'Bull Call Spread Bull Call Spread Bull Put Spread Long Call Long Call Long Call Bull Put Spread Bull Call Spread Strategy1 Bull CallSpread Strategy2 Strategy1 Strategy2 Bull Call Spread'},
 {date: '09-05-2024',name:'Strategy Put Strategy Call Strategy Call Strategy Call Strategy Put'},
]
  },
  {
    'View': 'Bearish',
    'Value': [
   {date: '24-04-2024',name:'Bear Call Spread Bear Call Spread Bear Call Spread Long Put Long  Put Long Put Bear Call Spread',},
    {date:'31-05-2024',name:'Long PutLong Put Long Put Long Put Long Put'},
    {date:'21-06-2024',name:'Strategy3 Strategy3 Bear Put Spread Strategy3 Long Put Long  Put'},
]
    },
    {
    'View': 'RangeBound',
    'Value': [
   {date: '24-04-2024',name:'Short Straddle Short Strangle Short Strangle Iron Butterfly Short Strangle Short Straddle Strategy1 ShortStraddle Strategy1 Strategy1 SpreadStrategy Short Straddle'},
   {date: '02-05-2024',name:'Short Straddle Short Straddle Short Strangle Iron Butterfly Iron Butterfly Iron Butterfly Short Strangle Short Straddle Strategy1 ShortStraddle Strategy2 Strategy1 Strategy2 Short Straddle'},
    {date:'21-06-2024',name:'Iron Condor Iron Butterfly Iron Butterfly Iron Butterfly IronCondor'},
    ]
    },
    {
    'View': 'Volatile',
    'Value': [
     {date:'02-05-2024',name:'Long Straddle Long Strangle Long Strangle Long Strangle LongStraddle Strategy1 Long Straddle Strategy1 Strategy1 Spread-Strategy Long Straddle'},
     {date:'09-05-2024',name:'Long Straddle Long Straddle Long Strangle Long Strangle Long Straddle Strategy1 Long Straddle Strategy2 Strategy1 Strategy2 Long Straddle'},
     {date:'31-05-2024',name:'Long Straddle Long Strangle Long Strangle Long Strangle Long Straddle'},
    ]
    }
  ];
  const App = () => {
    const [selectedView, setSelectedView] = useState("Bullish");
    const [selectedDate, setSelectedDate] = useState(dateArray[0]);
  
    // Get strategies based on the selected view and date
    const getGroupedStrategies = () => {
      const viewData = strategyArray.find(
        (strategy) => strategy.View === selectedView
      );
      if (!viewData) return [];
  
      const strategiesForDate = viewData.Value.find(
        (entry) => entry.date === selectedDate
      );
  
      if (!strategiesForDate) return [];
  
      const strategies = strategiesForDate.name.split(" ");
      const grouped = {};
  
      strategies.forEach((strategy) => {
        grouped[strategy] = (grouped[strategy] || 0) + 1;
      });
  
      return Object.entries(grouped).map(([name, count]) => ({
        name,
        count,
      }));
    };
  
    const strategies = getGroupedStrategies();
  
    return (
      <div className="app">
        {/* Toggle View */}
        <div className="toggle-container">
          {["Bullish", "Bearish", "RangeBound", "Volatile"].map((view) => (
            <button
              key={view}
              className={`toggle-button ${selectedView === view ? "active" : ""}`}
              onClick={() => setSelectedView(view)}
            >
              {view}
            </button>
          ))}
        </div>
  
        {/* Date Dropdown */}
        <div className="date-dropdown-container">
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {dateArray.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
  
        {/* Strategy Cards */}
        <div className="cards-container">
          {strategies.length > 0 ? (
            strategies.map(({ name, count }) => (
              <div className="card" key={name}>
                <p>
                  <strong>{name}</strong>
                </p>
                <p>
                  {count} {count > 1 ? "Strategies" : "Strategy"}
                </p>
              </div>
            ))
          ) : (
            <p className="empty-state">
              No strategies available for {selectedDate}.
            </p>
          )}
        </div>
      </div>
    );
  };
  
  export default App;  





