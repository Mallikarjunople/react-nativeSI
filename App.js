import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { ProductList, Home } from "./screens";
import { TouchableOpacity, Image } from "react-native";

import { icons, images, COLORS, SIZES, FONTS } from "./constants";
// extra screens

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{}} initialRouteName={"ProductList"}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Shivdatt Irrigation",
            headerStyle: {
              ...FONTS.h2,
              backgroundColor: "#39F474",
            },
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{
                  marginLeft: SIZES.padding,
                }}
              >
                <Image
                  source={icons.cube}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        {/* Screens */}
        {/* <Stack.Screen
          name="PlantDetail"
          component={PlantDetail}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            headerStyle: { backgroundColor: COLORS.primary },
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  marginLeft: SIZES.padding,
                }}
                onPress={() => {
                  navigation.navigate("Contact");
                }}
              >
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{ width: 23, height: 23 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
