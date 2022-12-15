import { useEffect, useState } from "react";
import { createContext } from "react";
import storage from "./users.json";
import LinkedListCreator from "yallist";
import { getContacts, parseLinkedList } from "./utils";
export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [contacts, setContacts] = useState([]);
  const [reminders, setReminders] = useState([]);
  useEffect(() => {
    async function retrieve() {
      const data = await getContacts();
      console.log(data);
      const ContactLinkedList = LinkedListCreator.create(storage);
      // console.log("list", parseLinkedList(ContactLinkedList));
      setContacts(parseLinkedList(ContactLinkedList));
    }
    retrieve();
  }, []);
  return <AppContext.Provider value={{ contacts, setContacts, reminders, setReminders }}>{props.children}</AppContext.Provider>;
};
