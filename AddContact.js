import { useState, useContext } from "react";
import { View, TextInput, Button, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { AppContext, ContextProvider } from "./store";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { saveData } from "./utils";
const AddContact = () => {
  const [currentName, setcurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");

  const { contacts, setContacts } = useContext(AppContext);

  const addcontact = async () => {
    const id = uuid();
    setContacts([...contacts, { name: currentName, phone: currentPhone, address: currentAddress, id }]);
    setcurrentName("");
    setCurrentPhone("");

    setCurrentAddress("");
    await saveData(contacts);
  };

  return (
    <View style={{ padding: 20, margin: 10, backgroundColor: "wheat", borderRadius: 20 }}>
      <TextInput placeholder="Enter Name" value={currentName} style={styles.input} onChangeText={(e) => setcurrentName(e)} />
      <TextInput placeholder="Enter Phone Number" value={currentPhone} style={styles.input} onChangeText={(e) => setCurrentPhone(e)} />
      <TextInput placeholder="Enter Address" value={currentAddress} style={styles.input} onChangeText={(e) => setCurrentAddress(e)} />
      {/* <Button title="Add contact" color="#f194ff" onPress={() => addcontact()} /> */}
      <TouchableOpacity style={styles.button} onPress={() => addcontact()}>
        <Text style={styles.buttonText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
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
export default AddContact;
