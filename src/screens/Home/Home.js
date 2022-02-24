import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList
} from 'react-native';

import Search from './components/Search';
import { HorizontalFoodCard } from '../../components';

import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants';

const Section = ({title, onPress, children}) => {
  return (
    <View>
      {/* Header */}

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20
        }}
      >
        <Text style={{flex: 1, ...FONTS.h3}}>
          {title}
        </Text>

        <TouchableOpacity
          onPress={onPress}
        >
          <Text style={{ color: COLORS.primary, ...FONTS.body3}}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {children}
    </View>
  )
}


const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [popular, setPopular] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType)
  },[]);

  //Handler
  function handleChangeCategory(categoryId, menuTypeId) {
    //Retrieve the popular menu
    let selectedPopular = dummyData.menu.find(a => a.name == "Popular")

    //Retrieve the recommended menu
    let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")

    //Find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

    //Set the recommended menu based on the categoryId
    setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

    //Set the menu based on the categoryId
    setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
  }

  //Render
  function renderMenuTypes() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20
        }}
        renderItem={({ item, index}) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
            }}
            onPress={() => {
              setSelectedMenuType(item.id)
              handleChangeCategory(selectedCategoryId, item.id)
            }}
          >
            <Text
              style={{
                color: selectedMenuType == item.id ?
                  COLORS.primary : COLORS.black,
                ...FONTS.h3
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    )
  }

  function renderRecommendedSection() {
    return(
      <Section
        title="Recommended"
        onPress={() => console.log("Show all recommended")}
      >
        <FlatList
          data={recommends}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index}) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: 'center'
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150
              }}
              item={item}
              onPress={() => console.log("HorizontalFoodCard")}
            />
          )}
        />
      </Section>
    )
  }

  function renderPopularSection() {
    return (
      <Section
        title="Popular Near You"
        onPress={() => console.log("Show all popular items")}
      >

      </Section>
    )
  }

  return (
    <View style={{ flex: 1}}>
      {/* Search */}
      <Search />

      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Popular */}
            {renderPopularSection()}

            {/* Recommended */}
            {renderRecommendedSection()}

            {/* Menu Types */}
            {renderMenuTypes()}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110
              }}
              item={item}
              onPress={() => console.log("HorizontalFoodCard")}
            />
          )
        }}
      />
    </View>
  )
}

export default Home;
