import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  images,
  dummyData
} from '../../constants';

import { HeaderDetail, IconButton, CartQuantityButton } from '../../components';

const FoodDetail = ({ navigation }) => {

  function renderHeaderDetail() {
    return (
      <HeaderDetail
        title="DETAILS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2
            }}
            onPress={() => console.log("Back")}
          />
        }
        rightComponent={
          <CartQuantityButton
            quantity={3}
          />
        }
      />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeaderDetail()}

      {/* Body */}

      {/* Footer */}
    </View>
  )
}

export default FoodDetail;
