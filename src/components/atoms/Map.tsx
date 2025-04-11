"use client";

import { Box } from "@mui/material";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const customIcon = new L.Icon({
  iconUrl: "/assets/logo.png",
  iconSize: [80, 30],
  iconAnchor: [60, 20],
  popupAnchor: [0, -41],
});

export default function MyMap() {
  return (
    <Box
      style={{
        width: "100%",
        height: "400px",
        maxWidth: "800px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={[41.904909, 13.878877]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[41.904909, 13.878877]} icon={customIcon}></Marker>
      </MapContainer>
    </Box>
  );
}
