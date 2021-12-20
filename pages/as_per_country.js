import { useEffect, useState } from "react";
import AsPerCountryCSS from "./AsPerCountry.module.css";

function as_per_country() {

    const [datas, setDatas] = useState({});
    const [country, setCountry] = useState("Nepal");
    const [countryDatas, setCountryDatas] = useState(country);

    useEffect(() => {
        fetch(`https://covid-19-data.p.rapidapi.com/country?name=${countryDatas}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "4b827ef1aamsh0da637f6804c35bp1dd115jsn2511a29bc1ab"
            }
        })
            .then(response => response.json())
            .then(datas => {
                setDatas(datas[0]);
            })
            .catch(err => {
                console.error(err);
            });
    }, [countryDatas])

    const submit = (e) => {
        e.preventDefault();
        setCountryDatas(country);
        console.log(countryDatas);
    }


    return (
        <>
            <div className={AsPerCountryCSS.container}>
            <h1 className={AsPerCountryCSS.heading}>Total Cases</h1>
                <div className={AsPerCountryCSS.card}>
                    <h1 className={AsPerCountryCSS.head}>
                        {datas.country}
                    </h1>
                    <div className={AsPerCountryCSS.detail}>
                        <div className={AsPerCountryCSS.confirmed}>
                            <p className={AsPerCountryCSS.para1}>Confirmed</p>
                            <p className={AsPerCountryCSS.para2}>{datas.confirmed}</p>
                        </div>
                        <div className={AsPerCountryCSS.recovered}>
                            <p className={AsPerCountryCSS.para1}>Recovered</p>
                            <p className={AsPerCountryCSS.para2}>{datas.recovered}</p>
                        </div>
                        <div className={AsPerCountryCSS.critical}>
                            <p className={AsPerCountryCSS.para1}>Critical</p>
                            <p className={AsPerCountryCSS.para2}>{datas.critical}</p>
                        </div>
                        <div className={AsPerCountryCSS.deaths}>
                            <p className={AsPerCountryCSS.para1}>Deaths</p>
                            <p className={AsPerCountryCSS.para2}>{datas.deaths}</p>
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

export default as_per_country;