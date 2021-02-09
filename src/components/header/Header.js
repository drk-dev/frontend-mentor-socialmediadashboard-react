import "./header.css"

const Header = ({ setStatus, status, statisticData }) => {


    const changeStatusHandler = () => {
        if (status === false) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }
    console.log(statisticData.Sumstatistic)
    return (
        <>
            <header className='header'>
                <div className="header-left">
                    <h1 className={status ? "" : "light-h1"}>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                </div>
                <div className="header-right">
                    <div>
                        <p className={status ? "" : "light-text"}>{status ? "Light Mode" : "Dark Mode"}</p>
                    </div>
                    <label className="switch">
                        <input onClick={changeStatusHandler} id="checkbox" type="checkbox" />
                        <span className={`slider round ${status ? "" : "slider-light "}`}></span>
                    </label>
                </div>
            </header>
        </>
    )
}
export default Header
