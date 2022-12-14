import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useContext } from "react";
import { AppContext } from "./store";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts, setContacts } = useContext(AppContext);
  return (
    <ScrollView>
      {contacts.length > 0 && <Text style={{ fontSize: 30, fontWeight: "800", margin: 5 }}>Contact List</Text>}
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: "center",
  },
  image: {
    width: 107,
    height: 165,
    padding: 10,
    backgroundColor: "blue",
  },
  description: {
    padding: 20,
    margin: 10,
    fontSize: 15,
    color: "#656565",
    backgroundColor: "red",
  },
});
export default ContactList;
