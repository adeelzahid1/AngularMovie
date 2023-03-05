import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, icon, Icon } from 'leaflet';
import { coordinatesMap } from './coordinate';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  constructor(){}

  @Output()
  onSelectedLocation = new EventEmitter<coordinatesMap>();

  @Input()
  initialCoordinates : coordinatesMap[]= [];

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }


  options = {

    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Angular Movies' })
    ],
    icon: icon({
      ...Icon.Default.prototype.options,
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    }),
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
    this.onSelectedLocation.emit({latitude, longitude})

}



}
