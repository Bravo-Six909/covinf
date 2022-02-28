import { useState, useEffect } from "react";
import IndianStateCSS from "./IndianState.module.css";
import Head from "next/head";

function IndianState({res}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(res);
    }, [])

    return (
        <>
            <Head>
                <title>States Data Page</title>
                <link rel="icon" href="/covid.ico" />
            </Head>
            <div className={IndianStateCSS.body}>
                <div className={IndianStateCSS.center}>
                    <table className={IndianStateCSS.table}>
                        <thead>
                            <tr className={IndianStateCSS.tr}>
                                <th className={IndianStateCSS.th}>States</th>
                                <th className={IndianStateCSS.th}>Confirmed</th>
                                <th className={IndianStateCSS.th}>Recovered</th>
                                <th className={IndianStateCSS.th}>Deaths</th>
                                <th className={IndianStateCSS.th}>Active</th>
                                <th className={IndianStateCSS.th}>Fatality Rate</th>
                            </tr>
                        </thead>
                        {data.map((item, i) => {
                            return (
                                <tbody className={IndianStateCSS.tbody} key={i}>
                                    <tr className={IndianStateCSS.tr}>
                                        <td style={{ color: "#0097e6" }} className={IndianStateCSS.td}>{item.province}</td>
                                        <td className={IndianStateCSS.td}>{item.confirmed}</td>
                                        <td style={{ color: "#44bd32" }} className={IndianStateCSS.td}>{item.recovered}</td>
                                        <td style={{ color: "#e84118" }} className={IndianStateCSS.td}>{item.deaths}</td>
                                        <td className={IndianStateCSS.td}>{item.active}</td>
                                        <td style={{ color: "#ffa502" }} className={IndianStateCSS.td}>{item.fatality_rate}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        </>
    )
}

export default IndianState;

export async function getServerSideProps(){
    const data = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/IND", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`
        }
    });

    const res = await data.json();

    return{
        props: {
            res
        }
    }
}

