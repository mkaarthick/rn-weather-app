import * as React from 'react';
import {Image, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '../screens/Dashboard';
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={({navigation, route}) => ({
            headerShown: true,
            headerTransparent: true,
            headerTintColor: '#fff',
            headerLeft: () => (
              <Pressable onPress={() => {}}>
                <Image
                  source={require('../assets/menu.png')}
                  style={{width: 25, height: 25}}
                />
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
