import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useContext } from "react";
import { AppContext } from "./store";
import ReminderCard from "./ReminderCard";

const ReminderList = () => {
  const { reminders } = useContext(AppContext);
  function combineDateTime(timeDate, actualDate) {
    var year = actualDate.getFullYear();
    var month = actualDate.getMonth();
    var day = actualDate.getDate();

    var hour = timeDate.getHours();
    var minute = timeDate.getMinutes();
    var second = timeDate.getSeconds();

    return new Date(year, month, day, hour, minute, second);
  }

  return (
    <ScrollView>
      {reminders.length > 0 && <Text style={{ fontSize: 30, fontWeight: "800", margin: 5 }}>Reminder List</Text>}
      {reminders
        .filter((reminder) => combineDateTime(reminder.time, reminder.date).getTime() - new Date().getTime() > 0)
        .sort(function (a, b) {
          return combineDateTime(a.time, a.date).getTime() - combineDateTime(b.time, b.date);
        })
        .map((reminder) => (
          <ReminderCard reminder={reminder} key={reminder.id} />
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
export default ReminderList;
