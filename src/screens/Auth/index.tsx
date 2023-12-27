import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';

import KSPLogo from '@Assets/images/KSPLogo.png';
import Routes from '@Navigation/routes';
import { AuthScreenProps } from '@Navigation/types';

import styles from './styles';
import LocalizedStrings from '@Utils/LocalizedStrings';

const Auth = ({ navigation }: AuthScreenProps) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={KSPLogo}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(Routes.SIGN_IN)}
        >
        <Text style={styles.buttonText}>
        {LocalizedStrings.login}
      </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(Routes.SIGN_UP)}
      >
      <Text style={styles.buttonText}>
        {LocalizedStrings.sign_up}
      </Text>
      </Pressable>
      </View>
    </View>
  )
}

export default Auth;
