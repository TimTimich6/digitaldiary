import { ContextProvider } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactsPage from "./ContactsPage";
import HomePage from "./HomePage";
import RemindersPage from "./RemindersPage";

// const StackNavigator = createNativeStackNavigator(
//   {
//     Home: { screen: Home },
//     Screen1: {
//       screen: (
//         <SafeAreaView>
//           <AddContact></AddContact>
//           <ContactList></ContactList>
//         </SafeAreaView>
//       ),
//     },
//   },
//   {
//     initialRouteName: "Home",
//   }
// );

const Stack = createNativeStackNavigator();

// App component
const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Contacts" component={ContactsPage} />
          <Stack.Screen name="Reminders" component={RemindersPage} />

          <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
