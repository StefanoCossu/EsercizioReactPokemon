import {useLoaderData} from "react-router-dom"

export default function Different() {
    let data = useLoaderData()
    let n=0
    function counter (){
        return n++
    }
    function translate(data) {
    let day=  data.weekday
      switch (day) {
        case "monday":
            day = "Lunedì"
            break;
        case "tuesday":
            day = "Martedì"
            break;
        case "wednesday":
            day = "Mercoledì"
            break;
        case "thursday":
            day="Giovedì"
            break;
        case "friday":
            day="Venerdì"
            break;
        case "saturday":
            day="Sabato"
            break;
        case "sunday":
            day="Domenica"
            break;
      } 
      return day 
    }
    let date = new Date().toLocaleDateString("de-DE");
    console.log(data);
    
    return <div className="container mt-5">
        <h1 className="text-center display-1 lead">Invoca il Santo giusto!</h1>
        <div className="row pt-5">
        {data.celebrations.length == 1 &&(
             <div className="col-12 text-center" key={counter()}>
                

                <h2>Oggi {translate(data)} {date} invoca: {data.celebrations[0].title}</h2>
                </div>
                
            )}
            {(data.celebrations.length > 1) && (
                <div>
                    <h2 className="col-12 text-center my-5">Oggi {translate(data)} {date} invoca i santi:</h2>
                </div>)
            }
            {(data.celebrations.length > 1) && data.celebrations.slice(1).map((el)=>{
            return <div className="col-12 text-center" key={counter()}>
                <h2>{el.title}</h2>
                </div>
                })
                
            }
            <div className="col-6"></div>
        </div>
    </div>
}

export async function loadDif(){
    function createDate() {
        const date = new Date();

    let day = date.getDate();
    let month = date.getMonth()+1;
    if (month < 10){
        month = `0${month}`
    }
    let year = date.getFullYear();
    let today = `${year}/${month}/${day}`;
    const toFetch = `http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${today}`
    return toFetch
    }
    
    const data = await fetch("http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2023/08/01").then((r)=>r.json());
    return data
}