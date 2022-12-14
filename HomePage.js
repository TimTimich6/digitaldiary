import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contacts")}>
        <Text style={styles.buttonText}>Go to Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Reminders")}>
        <Text style={styles.buttonText}>Go to Reminders</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C9CD89",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  input: {
    fontSize: 20,
    alignItems: "center",
    marginVertical: 5,
  },
});
export default HomePage;
