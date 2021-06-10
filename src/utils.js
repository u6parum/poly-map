export function flatMarkersList(markersList, regionIdKeyName = "regionId") {
  const flatMarkers = [];

  for (const regionId of Object.keys(markersList)) {
      const rMarkers = markersList[regionId];

      for (const marker of rMarkers) {
          flatMarkers.push({ ...marker, [regionIdKeyName]: parseInt(regionId) })
      }
  } 

  return flatMarkers;
}

export const MarkerTypes = {
	"office": "office",
	"geosearch": "geosearch",
	"mining": "mining",
	"project": "project",
	"running": "running",
	"career": "career",
	"fabric": "fabric",
	"solar": "solar",
	"h": "h",
    "factory": "factory"
};


export const MarkerColors = {
	"office": "#EB5757",
	"geosearch": "#219653",
	"mining": "#2F80ED",
	"project": "#BB6BD9",
	"running": "#56CCF2",
	"career": "#4F4F4F",
	"fabric": "#F2994A",
	"solar": "#F2C94C",
};