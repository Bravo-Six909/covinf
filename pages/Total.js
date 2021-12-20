import React from 'react';
import { useState, useEffect } from 'react';
import TotalCSS from "./Total.module.css";

const Total = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://covid-19-data.p.rapidapi.com/totals", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "4b827ef1aamsh0da637f6804c35bp1dd115jsn2511a29bc1ab"
            }
        })
            .then(response => response.json())
            .then(datas => {
                setData(datas[0]);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <>
            {console.log(data)}
            <div className={TotalCSS.container}>
                <div className={TotalCSS.card}>


                    <div className={TotalCSS.box2}>
                        <div className={TotalCSS.box21}>
                            <p>Confirmed</p>
                            <p className={TotalCSS.para}>{data.confirmed}</p>
                        </div>

                        <div className={TotalCSS.box22}>
                            <p>Recovered</p>
                            <p className={TotalCSS.para}>{data.recovered}</p>
                        </div>

                        <div className={TotalCSS.box23}>
                            <p>Critical</p>
                            <p className={TotalCSS.para}>{data.critical}</p>
                        </div>

                        <div className={TotalCSS.box24}>
                            <p>Deaths</p>
                            <p className={TotalCSS.para}>{data.deaths}</p>
                        </div>

                        <div className={TotalCSS.box25}>
                            <p>Last Updated</p>
                            <p className={TotalCSS.para}>{data.lastUpdate ? data.lastUpdate.substr(0,10) : data.lastUpdate}</p>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Total
