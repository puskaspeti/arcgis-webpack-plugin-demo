import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
type MapProperties = __esri.MapProperties;
type MapViewProperties = __esri.MapViewProperties;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  view: MapView;
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  constructor() {}

  async initializeMap() {
    try {
      const mapProperties: MapProperties = {
        basemap: 'streets'
      };

      const map = new Map(mapProperties);

      const mapViewProperties: MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: [0.1278, 51.5074],
        zoom: 10,
        map: map
      };

      this.view = new MapView(mapViewProperties);
    } catch (error) {
      console.log('Esri: ', error);
    }
  }

  ngOnInit() {
    this.initializeMap();
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.container = null;
    }
  }
}
