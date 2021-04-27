import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapStyle from "../styles/Googlmap.module.css";

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat:  55.751322,
      lng:37.617592 ,
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={mapStyle.center} style={{ height: "50vh", width: "94%" }}>
        <GoogleMapReact
      
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;