import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ViewBase,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";

import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

export default function Home({ navigation }) {
  //dull data
  const imag = images;
  const [pros, setPros] = React.useState([
    { id: 1, name: "first", pic: imag.img1 },
    { id: 2, name: "sec", pic: imag.img2 },
    { id: 3, name: "thie", pic: imag.img3 },
    { id: 4, name: "first", pic: imag.img4 },
    { id: 5, name: "sec", pic: imag.img5 },
    { id: 6, name: "thie", pic: imag.img6 },
    { id: 7, name: "sec", pic: imag.img7 },
    { id: 8, name: "thie", pic: imag.img8 },
  ]);
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={()=>{
        navigation.openDrawer()
      }}>
        <Text>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
        navigation.navigate('Contact')
      }}>
        <Text>Products</Text>
        </TouchableOpacity> */}
      <Text
        style={{
          fontSize: SIZES.h1,
          color: COLORS.secondary,
          fontWeight: "400",
          margin: 10,
          padding: 10,
        }}
      >
        Our products
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={pros}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View
                style={{
                  marginTop: SIZES.padding,
                  height: SIZES.height * 0.2,
                  width: SIZES.width * 0.45,
                  // backgroundColor: "#000",
                  marginRight: SIZES.padding,
                }}
              >
                <Image
                  source={item.pic}
                  resizeMode="contain"
                  style={{ width: 250, height: 150 }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: SIZES.h1,
            color: COLORS.secondary,
            fontWeight: "400",
            margin: 10,
            padding: 10,
          }}
        >
          Category
        </Text>
        <View
          style={{
            width: SIZES.width - 10,
            height: SIZES.height * 0.3,
            backgroundColor: "#666",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                width: SIZES.width * 0.4,
                height: SIZES.height * 0.25,
                backgroundColor: "#FFF",
                opacity: 0.2,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                // padding: 10,
              }}
            >
              {/* <ImageBackground
                source={images.img2}
                style={{ width: "100%", height: "100%" }}
              > */}
                <Text
                  style={{
                    backgroundColor: "#555",
                    fontSize: SIZES.width * 0.05,
                  }}
                >
                  Shivdatt Irrigation
                </Text>
              {/* </ImageBackground> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.push("ProductList");
            }}
          >
            <View
              style={{
                width: SIZES.width * 0.4,
                height: SIZES.height * 0.25,
                backgroundColor: "#333",
                backgroundColor: "#FFF",
                // opacity: 0.2,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 4,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#555",
                  fontSize: SIZES.width * 0.05,
                }}
              >
                Other Products
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
