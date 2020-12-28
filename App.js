import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// screens
import Contact from "./screens/Contact";
import { TouchableOpacity, Image } from "react-native";

import { icons, images, COLORS, SIZES, FONTS } from "./constants";
import { Company, Home, ProductList, Single } from "./screens";
// extra screens


const HomeStack = createStackNavigator();
const ProductListStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} options={{headerShown:false}}  />
    <HomeStack.Screen name="ProductList" component={ProductList} />
    <HomeStack.Screen name="Single" component={Single}/>

  </HomeStack.Navigator>
);

// const ProductListStackScreen = ({ navigation }) => (
//   <ProductListStack.Navigator>
//     <ProductListStack.Screen name="ProductList" component={ProductList} />
//     <ProductListStack.Screen name="Single" component={Single} />
//     <ProductListStack.Screen name="Contact" component={Contact} />
//   </ProductListStack.Navigator>
// );

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen}  options={({ navigation }) => ({
          headerTitle:"Shivdatt Irrigation",
          headerShown:true,
            headerStyle: { backgroundColor: COLORS.primary },
            headerTitleStyle:{
              color:COLORS.secondary,
              fontSize:SIZES.h2,
              fontWeight:'bold',
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
          })}/>
        <Drawer.Screen name="Contact" component={Contact} options={{headerShown:true}} />
        <Drawer.Screen name="Company" component={Company} options={{headerShown:true}} />
      </Drawer.Navigator>
      {/* <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Home"
          component={MyDrawer}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.primary },
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
                  source={icons.back}
                  resizeMode="contain"
                  style={{ width: 23, height: 23 }}
                />
              </TouchableOpacity>
            ),
          })}
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
