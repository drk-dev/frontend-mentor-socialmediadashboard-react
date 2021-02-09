


const OverviewCards = ({ todayData, status }) => {


    let className;
    const newNumberColor = () => {
        let statisticStatusCheck = "up"
        if (todayData.statisticStatus == statisticStatusCheck) {
            className = "green"
        } else {
            className = "red"
        }
    }
    newNumberColor()
    return (
        <div className={`overview-card ${todayData.platform} ${status ? "" : "card-light"}`}>
            <div className="card-content">
                <p>{todayData.dataType}</p>
                <i className="logo"></i>
            </div>
            <div className="content-down">
                <h3>{todayData.SumStatistic}</h3>
                <div className={`today-new ${className}`}>
                    <i className={`today ${todayData.statisticStatus}`}></i>
                    {todayData.growthStatistic}
                </div>
            </div>
        </div>

    )
}

export default OverviewCards
