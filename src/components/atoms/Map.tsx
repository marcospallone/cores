interface MapProps {
    width?: any;
    height?: any;
}

const Map: React.FC<MapProps> = ({width, height}) => {
  return (
    <img
      src={`https://maps.googleapis.com/maps/api/staticmap?center=41.904912,13.878866
        &zoom=17
        &size=1024x768
        &scale=2
        &format=png
        &maptype=roadmap
        &style=element:geometry%7Ccolor:0x212121
        &style=element:labels.icon%7Cvisibility:off
        &style=element:labels.text.fill%7Ccolor:0x757575%7Csaturation:36%7Clightness:40
        &style=element:labels.text.stroke%7Ccolor:0x212121%7Clightness:16%7Cvisibility:on
        &style=feature:administrative%7Celement:geometry%7Ccolor:0x757575
        &style=feature:administrative%7Celement:geometry.fill%7Ccolor:0x000000%7Clightness:20
        &style=feature:administrative%7Celement:geometry.stroke%7Ccolor:0x000000%7Clightness:17%7Cweight:1.2
        &style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e
        &style=feature:administrative.land_parcel%7Cvisibility:off
        &style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd
        &style=feature:landscape%7Celement:geometry%7Ccolor:0x000000%7Clightness:20
        &style=feature:poi%7Celement:geometry%7Ccolor:0x000000%7Clightness:21
        &style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575
        &style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818
        &style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161
        &style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b
        &style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c
        &style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a
        &style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737%7Clightness:18
        &style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c
        &style=feature:road.highway%7Celement:geometry.fill%7Ccolor:0x000000%7Clightness:17
        &style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x000000%7Clightness:29%7Cweight:0.2
        &style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e
        &style=feature:road.local%7Celement:geometry%7Ccolor:0x000000%7Clightness:16
        &style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161
        &style=feature:transit%7Celement:geometry%7Ccolor:0x000000%7Clightness:19
        &style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575
        &style=feature:water%7Celement:geometry%7Ccolor:0x000000%7Clightness:17
        &style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d
        &markers=color:red%7C41.904912,13.878866
        &key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
      width={width || 'auto'}
      height={height || 'auto'}
      style={{ border: "none", aspectRatio: 1 }}
    />
  );
};

export default Map;
