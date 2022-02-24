import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList
} from 'react-native';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../../../constants';


const  Search = () =>  {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2
      }}
    >
      {/* Icon */}
      <Image
        source={icons.search}
        style={{
          height: 20,
          width: 20,
          tintColor: COLORS.black
        }}
      />

      {/* Text Input */}
      <TextInput
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
          ...FONTS.body3,
        }}
        placeholder="search food..."
      />

      {/* Filter Button */}
      <TouchableOpacity
        //onPress
      >
        <Image
          source={icons.filter}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black
          }}
        />

      </TouchableOpacity>
    </View>
  )
}

export default Search;
