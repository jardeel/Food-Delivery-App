import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/stores/rootReducer';

import CustomDrawer from './src/navigation/CustomDrawer';

import {
  Onboarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp
} from './src/screens'


const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }



  useEffect(() => {
    SplashScreen.hideAsync();
  },[])



  return(
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       screenOptions={{
    //         headerShown: false
    //       }}
    //       initialRouteName={'Home'}
    //     >
    //       <Stack.Screen
    //         name="Home"
    //         component={CustomDrawer}
    //       />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Onboarding'}
      >
        <Stack.Screen name="Onboarding" component={Onboarding}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Otp" component={Otp}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
