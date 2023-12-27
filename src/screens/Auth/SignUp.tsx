import React, { useState } from 'react';

import { View, Pressable, Text, TextInput, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import KSPLogo from '@Assets/images/KSPLogo.png';
import Routes from '@Navigation/routes';
import { SignUpScreenProps } from '@Navigation/types';

import styles from './styles';
import LocalizedStrings from '@Utils/LocalizedStrings';

const SignUp = ({ navigation }: SignUpScreenProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePress = () => {
    let isValid = false;

    if (password === confirmPassword) {
      isValid = true;
    }

    if (isValid) {
      console.log(`Verified password: ${password} === confirmPassword: ${confirmPassword}`);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={KSPLogo}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{LocalizedStrings.create_account}</Text>
      </View>
      <TextInput
        style={styles.inputText}
        placeholder={'Name'}
        onChangeText={setName}
        value={name}
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputText}
          placeholder={'Confirm Password'}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
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
      <View
        style={styles.buttonContainer}
      >
        <Pressable
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>
            {LocalizedStrings.sign_up}
          </Text>
        </Pressable>
        <View style={styles.authButtonWrapper}>
          <Text style={styles.authText}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate(Routes.SIGN_IN)} >
            <Text style={styles.authNavText}>
              {LocalizedStrings.sign_in}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default SignUp;
