import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const ContactsPage = () => {
  return (
    <View style={{ padding: 7, flex: 1 }}>
      <AddContact></AddContact>
      <ContactList></ContactList>
    </View>
  );
};

export default ContactsPage;
