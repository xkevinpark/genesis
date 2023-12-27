import React, { useState } from 'react';

import { View, Pressable, Text, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import KSPLogo from '@Assets/images/KSPLogo.png';
import Routes from '@Navigation/routes';
import { ResetPasswordScreenProps } from '@Navigation/types';

import styles from './styles';
import LocalizedStrings from '@Utils/LocalizedStrings';

const ResetPassword = ({ navigation }: ResetPasswordScreenProps) => {
  const [email, setEmail] = useState('');

  const handlePress = () => {
    console.log(`RESET PASSWORD for email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={KSPLogo}
      />
      <TextInput
        style={styles.inputText}
        value={email}
        onChangeText={setEmail}
        placeholder={'Email'}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={handlePress}
        >
        <Text style={styles.buttonText}>
          {LocalizedStrings.find_account}
        </Text>
      </Pressable>
      </View>
    </View>
  )
}

export default ResetPassword;
