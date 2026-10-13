mapboxgl.accessToken = "pk.eyJ1IjoiYW5uYWhpbGRpbmcwMyIsImEiOiJjbXY2bWZnZXIwMWhlMnlxd2dwOW45MDZkIn0.8-Jhz6c5490ObYMe6WVE5g";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  center: [18.0686, 59.3293],
  zoom: 1,
  projection: "globe",
  scrollZoom: false,
  doubleClickZoom: false,
  touchZoomRotate: false,
});

map.on("style.load", () => {
  map.setFog({
    color: "#f9f4f7", 
    "high-color": "#f9f4f7", 
    "space-color": "#f9f4f7", 
  });
});

const visitedCountries = [
  "SWE",
  "DNK",
  "USA",
  "JPN",
  "ESP",
  "ITA",
  "GRC",
  "GBR",
  "DEU",
  "MDV",
  "MUS",
  "ARE",
  "IDN",
  "POL",
  "FRA",
  "AUT",
  "CZE",
  "HUN",
  "ISR",
];

map.on("load", () => {
  map.addSource("countries", {
    type: "vector",
    url: "mapbox://mapbox.country-boundaries-v1",
  });
  map.addLayer(
    {
      id: "visited-countries-fill",
      type: "fill",
      source: "countries",
      "source-layer": "country_boundaries",
      paint: {
        "fill-color": "#e8678f",
        "fill-opacity": 0.4,
      },
      filter: ["in", "iso_3166_1_alpha_3", ...visitedCountries],
    },
    "country-label"
  );
});

let isDragging = false;

function spinGlobe() {
  if (isDragging) return;

  const center = map.getCenter();
  center.lng += 0.15;
  map.setCenter(center);

  requestAnimationFrame(spinGlobe);
}

map.on("mousedown", () => {
  isDragging = true;
});
map.on("touchstart", () => {
  isDragging = true;
});
!map.on("mouseup", () => {
  isDragging = false;
  spinGlobe();
});
map.on("touchend", () => {
  isDragging = false;
  spinGlobe();
});

map.on("load", () => {
  spinGlobe();
});
