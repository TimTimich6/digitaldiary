import { useState, useContext } from "react";
import { View, TextInput, Button, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { AppContext, ContextProvider } from "./store";
import DateTimePicker from "@react-native-community/datetimepicker";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
const AddReminder = () => {
  const [currentName, setcurrentName] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date(Date.now() + 1000 * 60 * 60));
  const [currentDate, setCurrentDate] = useState(new Date());

  const { reminders, setReminders } = useContext(AppContext);
  const changeTime = (event, selectedDate) => {
    const currentT = selectedDate;
    setCurrentTime(currentT);
  };
  const changeDate = (event, selectedDate) => {
    const currentT = selectedDate;
    setCurrentDate(currentT);
  };
  const addReminder = () => {
    const id = uuid();
    console.log({ name: currentName, time: currentTime, date: currentDate, id });
    setReminders([...reminders, { name: currentName, time: currentTime, id, date: currentDate }]);
    setcurrentName("");
    // setCurrentTime(new Date(Date.now() + 1000 * 60 * 60));
  };

  return (
    <View style={{ padding: 20, margin: 10, backgroundColor: "wheat", borderRadius: 20 }}>
      <TextInput placeholder="Enter Reminder Name" value={currentName} style={styles.input} onChangeText={(e) => setcurrentName(e)} />
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

      <TouchableOpacity style={styles.button} onPress={() => addReminder()}>
        <Text style={styles.buttonText}>Add Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};
console.log("fine");
const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
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
export default AddReminder;
