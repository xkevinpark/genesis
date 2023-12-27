import React, { useState } from 'react';

import { View, Pressable, Text, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import KSPLogo from '@Assets/images/KSPLogo.png';
import Routes from '@Navigation/routes';
import { SignInScreenProps } from '@Navigation/types';

import styles from './styles';
import LocalizedStrings from '@Utils/LocalizedStrings';

const SignIn = ({ navigation }: SignInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePress = () => {
    console.log(`Handling Press for email: ${email} | password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={KSPLogo}
      />
      <TextInput
        style={styles.inputText}
        placeholder={'Email'}
        onChangeText={setEmail}
        value={email}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={'Password'}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={!showPassword}
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color='#aaa'
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Pressable onPress={() => navigation.navigate(Routes.RESET_PASSWORD)} >
          <Text style={styles.authNavText}>
            {LocalizedStrings.forgot_password}
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>
            {LocalizedStrings.sign_in}
          </Text>
        </Pressable>
        <View style={styles.authButtonWrapper}>
          <Text style={styles.authText}>{LocalizedStrings.no_account} </Text>
          <Pressable onPress={() => navigation.navigate(Routes.SIGN_UP)} >
            <Text style={styles.authNavText}>
              {LocalizedStrings.sign_up}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default SignIn;
