
import "./mainstat.css"
import MainCard from './MainCard'

const MainStat = ({ statisticData, status }) => {


    return (
        <div className="dashboard-container">
            {statisticData.map((statisticData) => (
                <MainCard status={status} key={statisticData.id} statisticData={statisticData} />
            ))}
        </div>
    )
}

export default MainStat
