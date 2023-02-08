import { StyleSheet, Text, View, StatusBar } from "react-native";
import InshortTabs from "./components/InshortTabs";

export default function App() {
  console.log(StatusBar);
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
      <InshortTabs />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
