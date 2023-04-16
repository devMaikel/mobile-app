import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FaceId from '../screens/FaceId/FaceId';

import Home from '../screens/Home/Home';
import ItemPage1 from '../screens/ItemPage1/ItemPage1';
import ItemPage2 from '../screens/ItemPage2/ItemPage2';
import Login from '../screens/Login/Login';
import MainPage from '../screens/MainPage/MainPage';
import ProductToCart from '../screens/ProductToCart/ProductToCart';
import ProductView from '../screens/ProductView/ProductView';
import Profile from '../screens/Profile/Profile';
import SignUpOne from '../screens/SignUpOne/SignUpOne';
import SignUpTwo from '../screens/SignUpTwo/SignUpTwo';
import Terms from '../screens/Terms/Terms';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='login'
        component={Login}
      />
      <Screen
        name='terms'
        component={Terms}
      />
      <Screen
        name='signupone'
        component={SignUpOne}
      />
      <Screen
        name='signuptwo'
        component={SignUpTwo}
      />
      <Screen
        name='faceid'
        component={FaceId}
      />
      <Screen
        name='mainpage'
        component={MainPage}
      />
      <Screen
        name='productview'
        component={ProductView}
      />
      <Screen
        name='itempage1'
        component={ItemPage1}
      />
      <Screen
        name='itempage2'
        component={ItemPage2}
      />
      <Screen
        name='producttocart'
        component={ProductToCart}
      />
      <Screen
        name='profile'
        component={Profile}
      />
    </Navigator>
  )
}
