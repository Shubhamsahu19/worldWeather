const submitBtn = document.getElementById('submitBtn');
const cityName =document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day =document.getElementById('day');
const today_date = document.getElementById('today_date');
const getInfo  = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value ;
    if(cityVal===""){
        city_name.innerText=`Please write name of the city before search`
    }else{
       try{ 
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b0960c71ef9026c7681a81f0b78d79e4`
        const response = await fetch(url);
        const data = await response.json();
        const arrData =[data];
        console.log(data);
        city_name.innerText=arrData[0].name;
        temp.innerText= arrData[0].main.temp;
        temp_status.innerText= arrData[0].weather[0].main;
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        day.innerText = days[d.getDay()];
    }
        catch{
            city_name.innerText=`Please write name of the city properly`
        }
    }

}
submitBtn.addEventListener('click',getInfo);