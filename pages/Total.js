import React from 'react';
import { useState, useEffect } from 'react';
import TotalCSS from "./Total.module.css";
import Head from "next/head";

const Total = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
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
                <link rel="icon" href="/covid.ico" />
            </Head>
            {console.log(data)}
            <div style={{"backgroundImage" : `url(/images/cov1.png)`}} className={TotalCSS.center}>
                <h1 className={TotalCSS.centerHead}>Total Cases in the World</h1>
                <div className={TotalCSS.card}>
                    <div className={TotalCSS.datas}>
                        <div className={TotalCSS.confirmed}>
                            <strong>Confirmed</strong>
                            <p className={TotalCSS.para}>{data?.TotalCases}</p>
                        </div>
                        <div className={TotalCSS.critical}>
                            <strong>Critical</strong>
                            <p className={TotalCSS.para}>{data?.Serious_Critical}</p>
                        </div>
                        <div className={TotalCSS.recovered}>
                            <strong>Recovered</strong>
                            <p className={TotalCSS.para}>{data?.TotalRecovered}</p>
                        </div>
                        <div className={TotalCSS.deaths}>
                            <strong>Deaths</strong>
                            <p className={TotalCSS.para}>{data?.TotalDeaths}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Total
