import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./Route";

import CustomNavigationBar from "~/navigation/CustomNavigationBar";
import Characters from "~/screens/Characters";
import Terms from "~/screens/Terms";
import CharacterDetails from "~/screens/CharacterDetails";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />
        }}
        initialRouteName={Routes.CHARACTERS_SCREEN}
      >
        <Stack.Group>
          <Stack.Screen
            name={Routes.CHARACTERS_SCREEN}
            component={Characters}
          />
          <Stack.Screen
            name={Routes.TERMS_SCREEN}
            component={Terms}
          />
          <Stack.Screen
            name={Routes.CHARACTER_DETAILS_SCREEN}
            component={CharacterDetails}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
