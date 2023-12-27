import { View, Pressable, Text, Image, } from 'react-native';

import KSPLogo from '@Assets/images/KSPLogo.png';
import Routes from '@Navigation/routes';
import { SplashScreenProps } from '@Navigation/types';

import styles from './styles';
import LocalizedStrings from '@Utils/LocalizedStrings';

const Splash = ({ navigation }: SplashScreenProps) => {
  const handlePress = () => {
    navigation.navigate(Routes.AUTH);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={KSPLogo}
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={handlePress}>
          <Text style={styles.enterText}>{LocalizedStrings.enter}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Splash;
