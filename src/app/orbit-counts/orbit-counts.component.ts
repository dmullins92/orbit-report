import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  countTypes: string[] = [
    'Total',
    'Space Debris',
    'Communication',
    'Probe',
    'Positioning',
    'Space Station',
    'Telescope'
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  countBy(countType: string) {
    let satelliteCount = this.satellites.filter(satellite => satellite.type === countType).length;
    if (countType === 'Total') {
      satelliteCount = this.satellites.length;
    }
    return satelliteCount;
  }  
}
