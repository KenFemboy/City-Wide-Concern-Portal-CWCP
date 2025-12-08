import React, { useEffect, useRef, useState } from "react";
import "./gmap.css"
// GMap.jsx
// Simple, single-file Google Maps React component using the plain Google Maps JavaScript API.
// Props:
// - apiKey (string) **required**: your Google Maps JS API key
// - center (object) optional: { lat: number, lng: number } default { lat: 14.5995, lng: 120.9842 }
// - zoom (number) optional: default 12
// - markers (array) optional: [{ id, position: {lat, lng}, title, info }] 
// - mapContainerStyle (object) optional: CSS style for the map container
// - onMapLoad (fn) optional: called with google.maps.Map instance after load

const GMap = ({
  apiKey,
  center = { lat: 14.5995, lng: 120.9842 },
  zoom = 60,
  markers = [],
  mapContainerStyle = { width: "500px", height: "400px", borderRadius: 20 },
  onMapLoad,
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Load the Google Maps script only once (idempotent)
  useEffect(() => {
    if (!apiKey) {
      console.error("GMap: apiKey prop is required");
      return;
    }

    // If google maps already loaded, set loaded and return
    if (window.google && window.google.maps) {
      setLoaded(true);
      return;
    }

    const existing = document.getElementById("gmap-js-api");
    if (existing) {
      existing.addEventListener("load", () => setLoaded(true));
      return;
    }

    const script = document.createElement("script");
    script.id = "gmap-js-api";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setLoaded(true);
    script.onerror = (err) => console.error("Failed to load Google Maps script", err);
    document.head.appendChild(script);

    return () => {
      // keep the script for other components, but remove listener if it exists
      script.onload = null;
      script.onerror = null;
    };
  }, [apiKey]);

  // Initialize map when script is loaded
  useEffect(() => {
    if (!loaded) return;
    if (!mapRef.current) return;
    if (mapInstanceRef.current) return; // already initialized

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      gestureHandling: "auto",
    });

    mapInstanceRef.current = map;
    if (typeof onMapLoad === "function") onMapLoad(map);
  }, [loaded, center, zoom, onMapLoad]);

  // Manage markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // store created markers so we can clear them on update
    const createdMarkers = [];
    markers.forEach((m) => {
      try {
        const marker = new window.google.maps.Marker({
          position: m.position,
          map,
          title: m.title || "",
        });
        createdMarkers.push(marker);

        if (m.info) {
          const infoWindow = new window.google.maps.InfoWindow({ content: String(m.info) });
          marker.addListener("click", () => infoWindow.open(map, marker));
        }
      } catch (e) {
        console.warn("Failed to create marker", m, e);
      }
    });

    return () => {
      createdMarkers.forEach((mk) => mk.setMap(null));
    };
  }, [markers, loaded]);

  return (
    <div>
      <div
        ref={mapRef}
        id="gmap-container"
        style={mapContainerStyle}
        aria-label="Google Map"
      />
    </div>
  );
};

export default GMap;
