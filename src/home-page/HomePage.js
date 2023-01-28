import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            <div className = "home-page-container">
                    <label id="home-page-header"> When2Eat</label>
                    <label id="home-page-label">wondering when2eat?</label>
                    <button id="home-page-button"
                    onClick={() => {
                        window.location.pathname = "/when2eat"
                    }}
                    >click here to find out!</button>
            </div>
        </div>
    )
}

export default HomePage;