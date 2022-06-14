import { View, Text, Platform, StatusBar } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Home />
    </View>
  );
}
