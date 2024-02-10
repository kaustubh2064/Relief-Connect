import "./HeroBanner.scss";

function HeroBanner() {
    return (
        <div>
            <div className="hero">
                <p className="hero__text hero__text--top">Empowering Communities in Crisis:
                <p className="rohit">Uniting hearts, Saving Lives</p>
                </p>
                <p className="omg">Expediting the Recovery Process for Those Impacted by Natural Disasters in B.C.</p>
            </div>
            {/* <button className="blink-bg-red-dark-to-light mx-auto block py-4 px-10 bg-red-700 hover:bg-red-600 text-white rounded-xl text-lg font-bold">Report Crisis</button> */}
        </div>
    )
}

export default HeroBanner;