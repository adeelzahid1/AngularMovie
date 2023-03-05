import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

  options = {

    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    zoom: 14,
    center: latLng(31.40313603626704, 73.13306808471681)
  };

  layers: Marker<any>[] = [];

handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log(`${latitude} ${longitude}`)
    this.layers = [];
    this.layers.push(marker([latitude, longitude]))
}


}
