import React, {useState, useCallback} from 'react';
import {Image, Pressable, View} from 'react-native';
import Modal from 'react-native-modal';
import CityList from '../screens/CityList';
import {useSelector} from 'react-redux';
import {selectLoading} from '../redux/WeatherState';

export const HeaderLeft = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [focused, setFocused] = useState(false);

  const isLoading = useSelector(selectLoading);

  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  const handleSelectedCity = useCallback(city => {
    setModalVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onModalShow = useCallback(() => {
    setFocused(true);
  }, []);

  if (isLoading) {
    return null;
  }
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
        hasBackdrop={false}
        onModalShow={onModalShow}>
        <View style={{flex: 1, backgroundColor: '#F2F2F2', paddingTop: 16}}>
          <Pressable onPress={toggleModal}>
            <Image
              source={require('../assets/menu_black.png')}
              style={{width: 25, height: 25, margin: 16}}
            />
          </Pressable>
          {focused && <CityList selectedCity={handleSelectedCity} />}
        </View>
      </Modal>
    </View>
  );
};
