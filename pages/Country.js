import { useEffect, useState } from "react";
import CountryCSS from "./Country.module.css";
import Head from "next/head";

function Home({res}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        
        setData(res);
        
    }, [])

    return (
        <>
            <Head>
                <title>All Country Page</title>
                <link rel="icon" href="/covid.ico" />
            </Head>

            <div className={CountryCSS.body}>
            <table>
                    <thead>
                        <tr className={CountryCSS.tr}>
                            <th className={CountryCSS.th}>Rank</th>
                            <th className={CountryCSS.th}>Country</th>
                            <th className={CountryCSS.th}>Total Cases</th>
                            <th className={CountryCSS.th}>New Cases</th>
                            <th className={CountryCSS.th}>Total Deaths</th>
                            <th className={CountryCSS.th}>New Deaths</th>
                            <th className={CountryCSS.th}>Total Recovered</th>
                            <th className={CountryCSS.th}>New Recovered</th>
                            <th className={CountryCSS.th}>Active Cases</th>
                            <th className={CountryCSS.th}>Recovery Proportion</th>
                        </tr>
                    </thead>
                    {data.map((item, i) => {
                        return (
                            <tbody key={i}>
                                <tr className={CountryCSS.tr}>
                                    <td className={CountryCSS.td}>{item.rank}</td>
                                    <td style={{ color: "#9c88ff" }} className={CountryCSS.td}>{item.Country}</td>
                                    <td className={CountryCSS.td}>{item.TotalCases}</td>
                                    <td style={{ color: "#fbc531" }} className={CountryCSS.td}>{item.NewCases}</td>
                                    <td style={{ color: "#e84118" }} className={CountryCSS.td}>{item.TotalDeaths}</td>
                                    <td style={{ color: "#e84118" }} className={CountryCSS.td}>{item.NewDeaths}</td>
                                    <td style={{ color: "#44bd32" }} className={CountryCSS.td}>{item.TotalRecovered}</td>
                                    <td style={{ color: "#44bd32" }} className={CountryCSS.td}>{item.NewRecovered}</td>
                                    <td style={{ color: "#fbc531" }} className={CountryCSS.td}>{item.ActiveCases}</td>
                                    <td style={{ color: "#12CBC4" }} className={CountryCSS.td}>{item.Recovery_Proporation}</td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div >
        </>
    )
}

export default Home;

export async function getServerSideProps(){
    const data = await fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/", {
        "metdod": "GET",
        "headers": {
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
            "x-rapidapi-key": "4b827ef1aamsh0da637f6804c35bp1dd115jsn2511a29bc1ab"
        }
    });

    const res = await data.json();

    return{
        props: {
            res
        }
    }
}
