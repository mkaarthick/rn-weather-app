import React, {useState, useCallback} from 'react';
import {Image, Pressable, View} from 'react-native';
import Modal from 'react-native-modal';
import CityList from '../screens/CityList';

export const HeaderLeft = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  console.log('render HeaderLeft');
  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  const handleSelectedCity = useCallback(city => {
    console.log(city);
    setModalVisible(false);
    // alert(city)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View>
      <Pressable onPress={toggleModal}>
        <Image
          source={require('../assets/menu.png')}
          style={{width: 25, height: 25}}
        />
      </Pressable>
      <Modal
        style={{margin: 0}}
        isVisible={isModalVisible}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        hasBackdrop={false}>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 16}}>
          <Pressable onPress={toggleModal}>
            <Image
              source={require('../assets/menu_black.png')}
              style={{width: 25, height: 25, margin: 16}}
            />
          </Pressable>
          <CityList selectedCity={handleSelectedCity} />
        </View>
      </Modal>
    </View>
  );
};
