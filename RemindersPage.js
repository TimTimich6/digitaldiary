import { View, Text } from "react-native";
import React from "react";
import AddReminder from "./AddReminder";
import { SafeAreaView } from "react-native-safe-area-context";
import ReminderList from "./ReminderList";

const RemindersPage = () => {
  return (
    <View style={{ padding: 7, flex: 1 }}>
      <AddReminder></AddReminder>
      <ReminderList></ReminderList>
    </View>
  );
};

export default RemindersPage;
