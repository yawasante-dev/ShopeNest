import { HammersmithOne_400Regular } from '@expo-google-fonts/hammersmith-one';
import { InriaSans_400Regular, InriaSans_700Bold } from '@expo-google-fonts/inria-sans';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainTabs from './navigation/MainTabs';

export default function App() {
  const [fontsLoaded] = useFonts({
    InriaSans_400Regular,
    InriaSans_700Bold,
    HammersmithOne_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#FF6B4A" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}