import { useState, useEffect } from "react";
import IndianStateCSS from "./IndianState.module.css";

function IndianState() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/IND", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
                "x-rapidapi-key": "4b827ef1aamsh0da637f6804c35bp1dd115jsn2511a29bc1ab"
            }
        })
        .then(response => response.json())
        .then(datas => setData(datas))
        .catch(err => {
            console.error(err);
        });
    }, [])

    return (
        <div className={IndianStateCSS.body}>
            <div className={IndianStateCSS.center}>
            <table className={IndianStateCSS.table}>
                <thead>
                    <tr className={IndianStateCSS.tr}>
                        <th className={IndianStateCSS.th}>Province</th>
                        <th className={IndianStateCSS.th}>Confirmed</th>
                        <th className={IndianStateCSS.th}>Recovered</th>
                        <th className={IndianStateCSS.th}>Deaths</th>
                        <th className={IndianStateCSS.th}>Active</th>
                        <th className={IndianStateCSS.th}>Fatality Rate</th>
                    </tr>
                </thead>
                {data.map((item,i) => {
                    return (
                        <tbody className={IndianStateCSS.tbody} key={i}>
                            {console.log(i)}
                            <tr className={IndianStateCSS.tr}>
                                <td style={{color: "#0097e6"}} className={IndianStateCSS.td}>{item.province}</td>
                                <td className={IndianStateCSS.td}>{item.confirmed}</td>
                                <td style={{color: "#44bd32"}} className={IndianStateCSS.td}>{item.recovered}</td>
                                <td style={{color: "#e84118"}} className={IndianStateCSS.td}>{item.deaths}</td>
                                <td className={IndianStateCSS.td}>{item.active}</td>
                                <td style={{color: "#ffa502"}} className={IndianStateCSS.td}>{item.fatality_rate}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            </div>
        </div>
    )
}

export default IndianState

