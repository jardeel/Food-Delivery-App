import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Header, IconButton, TextButton, CardItem } from '../../components';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  function renderHeader() {
    return (
      <Header
        title="MY CARDS"
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
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${index}`}
              item={item}
              isSelected={`${selectedCard.key}-${selectedCard.id}` == `MyCard-${item.id}`}
              onPress={() => setSelectedCard({...item, key: "MyCard"})}
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

      {/* Cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius
        }}
      >
        {/* My Cards */}
        {renderMyCards()}

        {/* Add New Card */}

      </ScrollView>

      {/* Footer */}
    </View>
  )
}

export default MyCard;
