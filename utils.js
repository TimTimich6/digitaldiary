// import fs from "react-native-fs";
export function parseLinkedList(list) {
  return list.toArray();
}

export const getContacts = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("contacts");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return [];
  }
};

export const saveData = async (contacts) => {
  try {
    const jsonValue = JSON.stringify(contacts);

    await AsyncStorage.setItem("contacts", jsonValue);
    const saved = await AsyncStorage.getItem("contacts");
    console.log(saved);
  } catch (e) {
    // saving error
  }
};
