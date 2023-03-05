import AppLoading from "expo-app-loading"
import { StatusBar } from "expo-status-bar"
import { ThemeProvider } from "styled-components/native"

import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts
} from "@expo-google-fonts/poppins"

import COLORS from "./src/styles/theme"

import { AppRegistry } from "react-native"
import { AuthProvider } from "./src/contexts/Auth"
import { Router } from "./src/routes/Router"

const AppSetup: React.FC = () => {
  const fontsLoaded = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={COLORS}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  )
}

const App: React.FC = () => {
  return <AppSetup />
}

AppRegistry.registerComponent("App", () => App)

export default App
