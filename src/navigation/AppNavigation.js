import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '../screens/Dashboard';
import {HeaderLeft} from '../components/HeaderLeft';
import {useSelector} from 'react-redux';
import {selectLoading} from '../redux/WeatherState';
const Stack = createNativeStackNavigator();

function AppNavigation() {
  const isLoading = useSelector(selectLoading);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation, route}) => ({
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerLeft: () => <HeaderLeft />,
        })}>
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            title: isLoading ? '' : 'cliMate',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
