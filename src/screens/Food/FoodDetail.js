import React, { useState } from 'react';
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
  const [foodItem, setFoodItem] = useState(dummyData.vegBiryani);


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

  function renderDetails(){
    return(
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2
          }}
        >
          {/* Calories & Favourite */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius
            }}
          >
            {/* Calories */}
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={icons.calories}
                style={{
                  width: 30,
                  height: 30
                }}
              />
              <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>
                {foodItem?.calories} calories
              </Text>
            </View>

            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
              }}
            />
          </View>

          {/* Food Image */}
          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{
              height: 170,
              width: "100%"
            }}
          />
        </View>

        {/* Food Info */}
        <View style={{ marginTop: SIZES.padding }}>
          {/* Name & description */}
          <Text style={{...FONTS.h1 }}>
            {foodItem?.name}
          </Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: 'justify',
              ...FONTS.body3
            }}
          >
            {foodItem?.description}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeaderDetail()}

      {/* Body */}
      <ScrollView>
        {/* Food Detail */}
        {renderDetails()}

        {/* Restaurant */}
      </ScrollView>

      {/* Footer */}
    </View>
  )
}

export default FoodDetail;
