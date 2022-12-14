import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { AppContext } from "./store";
import { useContext } from "react";
import { useState } from "react";

const ContactCard = ({ contact }) => {
  const { contacts, setContacts } = useContext(AppContext);
  const [editing, setEditing] = useState(false);
  const [currentName, setcurrentName] = useState(contact.name);
  const [currentPhone, setCurrentPhone] = useState(contact.phone);
  const [currentAddress, setCurrentAddress] = useState(contact.address);

  const deleteContact = () => {
    setContacts(contacts.filter((contactW) => contactW.id != contact.id));
  };
  function saveEdits() {
    const copy = contacts.concat([]);
    let index = copy.findIndex((el) => el.id === contact.id);
    copy[index] = { name: currentName, phone: currentPhone, address: currentAddress, id: copy[index].id };
    setContacts(copy);
    setEditing(false);
  }
  return (
    <View style={styles.container}>
      {editing ? (
        <TextInput placeholder="Enter Name" value={currentName} style={styles.input} onChangeText={(e) => setcurrentName(e)} />
      ) : (
        <Text style={styles.value}>Name: {contact.name}</Text>
      )}
      {editing ? (
        <TextInput placeholder="Enter Phone Number" value={currentPhone} style={styles.input} onChangeText={(e) => setCurrentPhone(e)} />
      ) : (
        <Text style={styles.value}>Phone: {contact.phone}</Text>
      )}
      {editing ? (
        <TextInput placeholder="Enter Address" value={currentAddress} style={styles.input} onChangeText={(e) => setCurrentAddress(e)} />
      ) : (
        <Text style={styles.value}>Address: {contact.address}</Text>
      )}

      {/* <Text style={styles.value}>{contact.id}</Text> */}
      <TouchableOpacity style={styles.button} onPress={() => deleteContact()}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "orange" }]} onPress={!editing ? () => setEditing(true) : () => saveEdits()}>
        <Text style={styles.buttonText}>{editing ? "Save" : "Edit"}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    padding: 20,
    backgroundColor: "wheat",
    margin: 10,
    borderRadius: 10,
  },
  value: {
    fontSize: 23,
    fontWeight: "600",
  },
  button: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "crimson",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  input: {
    fontSize: 20,
    alignItems: "center",
    marginVertical: 5,
  },
});
export default ContactCard;
