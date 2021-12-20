import HomeCSS from "./Home.module.css";

function home() {
    return (
        <>
            <div className={HomeCSS.img}>
                <h1 className={HomeCSS.head}>COVINF</h1>
                <h3 className={HomeCSS.info}>Get All Data from the World!!</h3>
                <button className={HomeCSS.btn}>Get World Data</button>
            </div>

            <div className={HomeCSS.world}>
                <img className={HomeCSS.imgs} src="https://media.istockphoto.com/photos/viral-epidemic-or-pandemic-spreading-around-the-world-concept-with-picture-id1214212730?b=1&k=20&m=1214212730&s=170667a&w=0&h=xdYPBOIBMopxAxXPYbuFMeW47CTi9TozyO0EIe3Fdgg=" />

                <div className={HomeCSS.texts}>
                    <h1>World Data</h1>
                    <p className={HomeCSS.paras}>Gives realtime world covid-19 data.</p>
                    <button className={HomeCSS.btns}>Get World Data</button>
                </div>

            </div>

            <div className={HomeCSS.Country}>

                <div className={HomeCSS.texts}>
                    <h1>Country Data</h1>
                    <p className={HomeCSS.paras}>Gives realtime country covid-19 data.</p>
                    <button className={HomeCSS.btns}>Get Country Data</button>
                </div>

                <img className={HomeCSS.imgs} src="https://cdn.pixabay.com/photo/2020/03/22/16/17/coronavirus-4957673__340.jpg" />

            </div>

            <div className={HomeCSS.States}>

                <img className={HomeCSS.imgs} src="https://media.istockphoto.com/photos/doctor-in-a-home-visit-to-a-senior-man-picture-id1289183630?b=1&k=20&m=1289183630&s=170667a&w=0&h=FMmzSvzUCtDAoqKn4idZNAfolbjsJFMigUI1IsnLhdc=" />

                <div className={HomeCSS.texts}>
                    <h1>Indian States</h1>
                    <p className={HomeCSS.paras}>Gives realtime indian covid-19 data.</p>
                    <button className={HomeCSS.btns}>Get Indian States</button>
                </div>

            </div>

            <div className={HomeCSS.Total}>

                <div className={HomeCSS.texts}>
                    <h1>Total World Data</h1>
                    <p className={HomeCSS.paras}>Gives realtime total covid-19 data.</p>
                    <button className={HomeCSS.btns}>Get Total Data</button>
                </div>

                <img className={HomeCSS.imgs} src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />

            </div>

        </>
    )
}

export default home
