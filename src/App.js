import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
const API_KEY = "30414a20754cac58a1218a8c20d9f174"
class App extends React.Component{
  state = {
    Город: undefined,
    Страна: undefined,
    Температура: undefined,
    Ощущается_как: undefined,
    Давление: undefined,
    Влажность: undefined,
    Ошибка: undefined 
  }
  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    
    if(city) {
      const api_url = await
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json();
       
    this.setState({
      Город: data.name,
      Страна: data.sys.country,
      Температура: data.main.temp,
      Ощущается_как: data.main.feels_like,
      Давление: data.main.pressure,
      Влажность: data.main.humidity,
      Ошибка: undefined
    });
  } else {
    this.setState({
    Город: undefined,
    Страна: undefined,
    Температура: undefined,
    Ощущается_как: undefined,
    Давление: undefined,
    Влажность: undefined,
    Ошибка: "Введите название города" 
    });
  }

} 
  render(){
    return (
      <div className="wrapper">
        <div className="main">
          <div className="coutainer">
            <div className="row">
              <div className="col-sm-6 info">
                <Info />
              </div>
              <div className="col-sm-6 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  Город={this.state.Город}
                  Страна={this.state. Страна}
                  Температура={this.state.Температура}
                  Ощущается_как={this.state.Ощущается_как}
                  Давление={this.state.Давление}
                  Влажность={this.state.Влажность}
                  Ошибка={this.state.Ошибка}
               />
              </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
