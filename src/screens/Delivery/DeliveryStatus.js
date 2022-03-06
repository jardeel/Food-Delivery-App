import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { Header, LineDivider, TextButton } from '../../components';
import { FONTS, SIZES, COLORS, icons, constants } from '../../constants';

const DeliveryStatus = ({ navigation }) => {

  function renderHeader() {
    return (
      <Header
        title="DELIVERY STATUS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40
        }}
      />
    )
  }

  function renderInfo() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding
        }}
      >
        <Text style={{ textAlign: 'center',color: COLORS.gray, ...FONTS.body4}}>
          Estimated Delivery
        </Text>
        <Text style={{ textAlign: 'center', ...FONTS.h2 }}>
          21 Sept 2021 / 12:30PM
        </Text>
      </View>
    )
  }

  function renderTrackOrder() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white2
        }}
      >
        {/* Tack Order */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>
            Tack Order
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            NY012345
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Info */}
      {renderInfo()}

      {/* Track Order */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>

      {/* Footer */}
    </View>
  )
}

export default DeliveryStatus;
