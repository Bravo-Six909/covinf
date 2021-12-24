import React from 'react';
import { useState, useEffect } from 'react';
import TotalCSS from "./Total.module.css";
import Head from "next/head";

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
            <Head>
                <title>World Total Page</title>
            </Head>
            <div style={{"backgroundImage" : `url(/images/cov1.png)`}} className={TotalCSS.center}>
                <h1 className={TotalCSS.centerHead}>Total Cases in the World</h1>
                <div className={TotalCSS.card}>
                    <div className={TotalCSS.datas}>
                        <div className={TotalCSS.confirmed}>
                            <strong>Confirmed </strong>
                            <p className={TotalCSS.para}>{data.confirmed}</p>
                        </div>
                        <div className={TotalCSS.critical}>
                            <strong>Critical</strong>
                            <p className={TotalCSS.para}>{data.critical}</p>
                        </div>
                        <div className={TotalCSS.recovered}>
                            <strong>Recovered</strong>
                            <p className={TotalCSS.para}>{data.recovered}</p>
                        </div>
                        <div className={TotalCSS.deaths}>
                            <strong>Deaths</strong>
                            <p className={TotalCSS.para}>{data.deaths}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Total
