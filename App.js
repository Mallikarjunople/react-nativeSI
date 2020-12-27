import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
// screens
import Contact from "./screens/Contact";
import { TouchableOpacity, Image } from "react-native";

import { icons, images, COLORS, SIZES, FONTS } from "./constants";
import { Home, ProductList } from "./screens";
// extra screens

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ProductList" component={ProductList} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Home"
          component={MyDrawer}
          // options={({ navigation }) => ({
          //   headerStyle: { backgroundColor: COLORS.primary },
          //   headerLeft: () => (
          //     <TouchableOpacity
          //       style={{
          //         marginLeft: SIZES.padding,
          //       }}
          //       onPress={() => {
          //         navigation.navigate("Home");
          //       }}
          //     >
          //       <Image
          //         source={icons.back}
          //         resizeMode="contain"
          //         style={{ width: 23, height: 23 }}
          //       />
          //     </TouchableOpacity>
          //   ),
          // })}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            title: "Shivdatt Irrigation",
            headerStyle: {
              ...FONTS.h2,
              backgroundColor: "#39F474",
            },
            headerLeft: () => (
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
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
