'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

// Fixed marker icon URL
const iconUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});
function PropertyMap() {
  const specificLocation = [41.69321322705212, 44.80412480502063] as [number, number];

  return (
    <div className="mt-4">
    <MapContainer
      center={specificLocation}
      zoom={7}
      scrollWheelZoom={false}
      zoomControl={false}
      className="h-[50vh] rounded-lg relative z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <ZoomControl position="bottomright" />
      <Marker position={specificLocation} icon={markerIcon} />
    </MapContainer>
  </div>
  );
}

export default PropertyMap;
