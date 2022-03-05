import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  Header,
  IconButton,
  FormInput,
  CardItem,
  FooterTotal
} from '../../components';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    let { selectedCard } = route.params;

    setSelectedCard(selectedCard)
  },[]);

  function renderHeader() {
    return (
      <Header
        title="CHECKOUT"
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

  function renderMyCards() {
    return (
      <View>
        {selectedCard && dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
              onPress={() => setSelectedCard({ ...item, key: "MyCard"})}
            />
          )
        })}
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Header */}
      {renderHeader()}

      {/* Body */}
      <KeyboardAwareScrollView
        keyboardDismissMode='on-drag'
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20
        }}
      >
        {/* My Cards */}
        {renderMyCards()}

        {/* Delivery Address */}

        {/* Coupon */}
      </KeyboardAwareScrollView>
    </View>
  )
}

export default Checkout;
