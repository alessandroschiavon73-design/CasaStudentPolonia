StudentBnB country-map fix — 23 August 2026

This package removes obsolete country-map.svg/country-map.webp assets and uses only:
  assets/img/country-map-illustrated.svg

Both index.html and the final JavaScript override point to the same illustrated asset,
so the map can no longer flash correctly and then be replaced by an older map.
Map CSS is aligned to the Spain visual treatment.
