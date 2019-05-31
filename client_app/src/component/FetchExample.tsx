import React, { Component } from 'react'
import { render } from 'react-dom';
import '../../node_modules/bulma/css/bulma.css';
interface forecast{
    dateFormatted:string;
    temperatureC:number;
    temperatureF:number;
    summary:string;
}
const initialState : {forecasts: forecast[]} = {forecasts:[]}
type State = Readonly<typeof initialState>

export class FetchExample extends Component<object,State>{
    readonly state:State = initialState
    click = (e:any)=>{
        this.update_forcast()
    }
    render(){
        return(
            <div>
                <h1>Are you ok? hhh</h1>
                <button className='button is-success' onClick={this.click}>Update(Bulma)</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date </th>
                            <th>Temp. (C)</th>
                            <th>Temp. (F)</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.forecasts.map(forecast =>
                            <tr key={forecast.dateFormatted}>
                            <td>{forecast.dateFormatted}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    update_forcast = () => {
        fetch('api/SampleData/WeatherForecasts')
        //fetch('https://localhost:5001/api/SampleData/WeatherForecasts')
      .then(response => {
          console.log(response)
          return response.json()})
      .then(data => {
        this.setState({ forecasts: data });
      });
    }
}