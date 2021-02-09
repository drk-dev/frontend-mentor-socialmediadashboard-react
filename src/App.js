import { useState } from "react"
import Header from "./components/header/Header.js"
import MainStat from "./components/mainstat/MainStat.js"
import Overview from "./components/overview/Overview.js"
import sumStatisticData from "./sumStatisticData.json"
import todayStatisticData from "./todayStatisticData.json"



function App() {
  const statisticData = sumStatisticData.sumStatisticData;
  const todayData = todayStatisticData.todayStatisticData;

  const [status, setStatus] = useState(true)



  return (
    <div className="App">
      <div className={`main-container ${status ? "" : "body-light"}`}>
        <div className={`top-bg ${status ? "" : "light"}`}></div>
        <div className="app-container">
          <Header
            statisticData={statisticData}
            status={status}
            setStatus={setStatus}
          />
          <MainStat
            statisticData={statisticData}
            status={status}
          />
          <Overview
            todayData={todayData}
            status={status}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
