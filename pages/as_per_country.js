import { useEffect, useState } from "react";
import AsPerCountryCSS from "./AsPerCountry.module.css";
import Head from "next/head";
import { useRouter } from 'next/router';

function Aspercountry() {

    const router = useRouter();
    const [datas, setDatas] = useState({});
    const [country, setCountry] = useState("India");
    const [countryDatas, setCountryDatas] = useState(country);

    useEffect(() => {
        fetch(`https://countrystat.p.rapidapi.com/coronavirus/who_latest_stat_by_country.php?country=${country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "countrystat.p.rapidapi.com",
                "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`
            }
        })
            .then(response => response.json())
            .then(datas => {
                setDatas(datas);
            })
            .catch(err => {
                console.error(err);
                alert("Unable to fetch the data. Please re-check.");
                router.push("/");
            });
    }, [countryDatas])

    const submit = (e) => {
        e.preventDefault();
        setCountryDatas(country);
    }


    return (
        <>
            <Head>
              <title>Country Page</title>
              <link rel="icon" href="/covid.ico" />
            </Head>
            {console.log(datas)}
            <div className={AsPerCountryCSS.container}>
            <h1 className={AsPerCountryCSS.heading}>Total Cases</h1>
                <div className={AsPerCountryCSS.card}>
                    <h1 className={AsPerCountryCSS.head}>
                        {datas?.location}
                    </h1>
                    <h1 className={AsPerCountryCSS.head}>
                        {datas?.recordDate}
                    </h1>
                    
                    <div className={AsPerCountryCSS.detail}>
                        <div className={AsPerCountryCSS.confirmed}>
                            <p className={AsPerCountryCSS.para1}>Confirmed</p>
                            <p className={AsPerCountryCSS.para2}>{datas?.totalCases}</p>
                        </div>
                        <div className={AsPerCountryCSS.recovered}>
                            <p className={AsPerCountryCSS.para1}>Recovered</p>
                            <p className={AsPerCountryCSS.para2}>{!datas?.newVaccinations ? "-" : datas?.newVaccinations}</p>
                        </div>
                        <div className={AsPerCountryCSS.critical}>
                            <p className={AsPerCountryCSS.para1}>Critical</p>
                            <p className={AsPerCountryCSS.para2}>{datas?.totalCasesPerMillion}</p>
                        </div>
                        <div className={AsPerCountryCSS.deaths}>
                            <p className={AsPerCountryCSS.para1}>Deaths</p>
                            <p className={AsPerCountryCSS.para2}>{datas?.totalDeaths}</p>
                        </div>

                    </div>
                </div>
                <div className={AsPerCountryCSS.input}>
                    <form className={AsPerCountryCSS.form} action="" onSubmit={submit}>
                        <label className={AsPerCountryCSS.label} htmlFor="country">Enter Country Name</label>
                        <input className={AsPerCountryCSS.input} placeholder="Enter Country Name" value={country} onChange={(e) => setCountry(e.target.value)} />
                        <button className={AsPerCountryCSS.btn} type="submit">Search</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Aspercountry;