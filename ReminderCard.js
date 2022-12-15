import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { AppContext } from "./store";
import { useContext } from "react";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useEffect } from "react";
function combineDateTime(timeDate, actualDate) {
  var year = actualDate.getFullYear();
  var month = actualDate.getMonth();
  var day = actualDate.getDate();

  var hour = timeDate.getHours();
  var minute = timeDate.getMinutes();
  var second = timeDate.getSeconds();

  return new Date(year, month, day, hour, minute, second);
}
const ReminderCard = ({ reminder }) => {
  const { reminders, setReminders } = useContext(AppContext);
  const [editing, setEditing] = useState(false);
  const [currentName, setcurrentName] = useState(reminder.name);
  const [currentTime, setCurrentTime] = useState(reminder.time);
  const [currentDate, setCurrentDate] = useState(reminder.date);

  const [timerCount, setTimer] = useState(Math.ceil((combineDateTime(reminder.time, reminder.date).getTime() - Date.now()) / 1000));

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        // lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) {
          alert("Reminder for: " + reminder.name);
          clearInterval(interval);
          deleteReminder();
        }
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    return () => clearInterval(interval);
  }, [currentTime, currentDate]);
  const deleteReminder = () => {
    setReminders(reminders.filter((reminderW) => reminderW.id != reminder.id));
  };

  function saveEdits() {
    const copy = reminders.concat([]);
    let index = copy.findIndex((el) => el.id === reminder.id);
    copy[index] = { name: currentName, time: currentTime, date: currentDate, id: copy[index].id };
    setReminders(copy);
    setEditing(false);
  }
  const changeTime = (event, selectedDate) => {
    const currentT = selectedDate;
    setCurrentTime(currentT);
  };
  const changeDate = (event, selectedDate) => {
    const currentT = selectedDate;
    setCurrentDate(currentT);
  };
  function secondsToHMS(seconds) {
    // Convert the number of seconds to an integer
    seconds = parseInt(seconds);

    // Calculate the hours, minutes, and seconds
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    // Pad the values with leading zeros if necessary
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    secs = secs.toString().padStart(2, "0");

    // Return the formatted string
    return `${hours}:${minutes}:${secs}`;
  }
  return (
    <View style={styles.container}>
      {editing ? (
        <TextInput placeholder="Enter Name" value={currentName} style={styles.input} onChangeText={(e) => setcurrentName(e)} />
      ) : (
        <Text style={styles.value}>Name: {reminder.name}</Text>
      )}

      {editing ? (
        <>
          <DateTimePicker
            testID="dateTimePicker"
            mode="time"
            value={currentTime}
            onChange={changeTime}
            style={{ alignSelf: "flex-start", marginVertical: 5 }}
          />
          <DateTimePicker
            testID="dateTimePicker"
            mode="date"
            value={currentDate}
            onChange={changeDate}
            style={{ alignSelf: "flex-start", marginVertical: 5 }}
          />
        </>
      ) : (
        <>
          <Text style={styles.value}>{reminder.time.toLocaleTimeString()}</Text>
          <Text style={styles.value}>{reminder.date.toDateString()}</Text>
        </>
      )}
      {!editing && timerCount <= 60 * 24 * 60 && <Text style={[styles.value, { color: "red" }]}>Time Remaining: {secondsToHMS(timerCount)}</Text>}
      <TouchableOpacity style={styles.button} onPress={() => deleteReminder()}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "dodgerblue" }]} onPress={!editing ? () => setEditing(true) : () => saveEdits()}>
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
    backgroundColor: "#005680",
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
export default ReminderCard;
