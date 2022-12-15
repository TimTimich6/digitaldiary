import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Contacts")}>
        <Text style={styles.buttonText}>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Reminders")}>
        <Text style={styles.buttonText}>Reminders</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C9CD89",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: "90%",
    borderColor: "grey",
    borderWidth: 1,
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
