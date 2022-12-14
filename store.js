import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [contacts, setContacts] = useState([]);
  const [reminders, setReminders] = useState([]);

  return <AppContext.Provider value={{ contacts, setContacts, reminders, setReminders }}>{props.children}</AppContext.Provider>;
};
