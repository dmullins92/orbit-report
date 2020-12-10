import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          for (let satelliteIndex = 0; satelliteIndex < fetchedSatellites.length; satelliteIndex++) {
            let satellite = new Satellite(fetchedSatellites[satelliteIndex].name, fetchedSatellites[satelliteIndex].type, fetchedSatellites[satelliteIndex].launchDate, fetchedSatellites[satelliteIndex].orbitType, fetchedSatellites[satelliteIndex].operational);
            this.sourceList.push(satellite);    
          }
       }.bind(this));
    }.bind(this));
  }
}