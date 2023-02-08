import { StyleSheet, Text, View, StatusBar } from "react-native";
import InshortTabs from "./components/InshortTabs";
import { NewsProvider } from "./context/NewsProvider";

export default function App() {
  return (
    <NewsProvider>
      <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
        <InshortTabs />
        <StatusBar style="auto" />
      </View>
    </NewsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
