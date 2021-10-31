import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;


  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecast) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <tbody>
          {
            <tr key={forecast.summary}>
              <td>{forecast.summary}</td>
            </tr>
          }
        </tbody>
      </table>
    );
  }

  render() {
    var imageName = require('./image/docker-kubernetes.png')

    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Home.renderForecastsTable(this.state.forecasts);


    return (
      <div>
        <img src={imageName} />
        <ul>
          <li> {contents}</li>
        </ul>
        <p><code>Repository : </code><a href='https://github.com/senaka1984/myrepo'>https://github.com/senaka1984/myrepo</a> </p>
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
