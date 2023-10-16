import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  useColorScheme,
} from "react-native";

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleSwithScreens = (isLogin: boolean) => {
    setIsLogin(isLogin);
  }
  
  useEffect(() => {

  }, [isLogin]);

  return (
    <SafeAreaView style={backgroundStyle}>
       {isLogin && <Login onLogin={handleSwithScreens} />}
        {!isLogin && <Register onSignUp={handleSwithScreens} />}
    </SafeAreaView>
  );
}

export default App;
