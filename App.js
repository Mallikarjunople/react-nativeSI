import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// screens
import Contact from "./screens/Contact";
import { TouchableOpacity, Image, ImageBackground } from "react-native";

import { icons, images, COLORS, SIZES, FONTS } from "./constants";
import { Company, Home, ProductList, Single } from "./screens";

const HomeStack = createStackNavigator();
const ProductListStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        headerTitle: "Shivdatt Irrigation",
        headerShown: true,
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: {
          color: COLORS.secondary,
          fontSize: SIZES.h2,
          fontWeight: "bold",
          alignSelf: "center",
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
            }}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{ width: 23, height: 23 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <HomeStack.Screen
      name="ProductList"
      component={ProductList}
      options={{ title: "Product List" }}
    />
    <HomeStack.Screen name="Single" component={Single} />
  </HomeStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="Company"
          component={Company}
          options={{ headerShown: true }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
