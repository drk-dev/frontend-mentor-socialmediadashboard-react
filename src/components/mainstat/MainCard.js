import React from 'react'

const MainCard = ({ statisticData, status }) => {

    let className;
    const newNumberColor = () => {
        let statisticStatusCheck = "up"
        if (statisticData.statisticStatus == statisticStatusCheck) {
            className = "green"
        } else {
            className = "red"
        }
    }
    newNumberColor()
    return (
        <div className={`dashboard-card ${statisticData.platform} ${status ? "" : "card-light"} `}>
            <div className="head"></div>
            <div className="name"><i className="logo"></i>{statisticData.userName}</div>
            <h2>{statisticData.SumStatistic}</h2>
            <p>{statisticData.dataType}</p>
            <div className={`new ${className}`} ><i className={statisticData.statisticStatus}></i>{statisticData.dailyStatistic} Today</div>
        </div>
    )
}

export default MainCard
