import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Header, IconButton, TextButton } from '../../components';
import { FONTS, SIZES, COLORS, icons, images } from '../../constants';
import { utils } from '../../utils';

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let {selectedCard} = route.params

    setSelectedCard(selectedCard)
  }, [])

  function renderHeader(){
    return (
      <Header
        title="ADD NEW CARD"
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
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <View style={{ width: 40}}/>
        }
      />
    )
  }

  function renderCard() {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: 'hidden'
        }}
      >
        {/* Logo */}
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            height: 40,
            width: 80
          }}
        />

        {/* Details */}
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
            Jardas Sousa
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, color: COLORS.white }}>
              1234 1234 1234 1234
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              21/25
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}

      {/* Body */}
      <KeyboardAwareScrollView
        keyboardDismissMode='on-drag'
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Card */}
        {renderCard()}

        {/* Forms */}
      </KeyboardAwareScrollView>

      {/* Footer */}
    </View>
  )
}

export default AddCard;
