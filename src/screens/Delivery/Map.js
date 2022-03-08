import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import LinearGradient from 'expo-linear-gradient';

import { IconButton } from '../../components';
import { COLORS, FONTS, icons, images, SIZES, dummyData, constants } from '../../constants';
import { utils } from '../../utils';

const Map = ({ navigation }) => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);
  const [toLoc, setToLoc] = useState(null);
  const [fromLoc, setFromLoc] = useState(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02
    }

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    }

    setToLoc(destination)
    setFromLoc(dummyData.fromLocs[1])

    setRegion(initialRegion)
  },[])

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{ flex: 1}}
        // provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >

      </MapView>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Map */}
      {renderMap()}

      {/* Header Buttons */}

      {/* Footer / info */}
    </View>
  )
}

export default Map;
