import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

function Single({ route, navigation }) {
  const { image, name } = route.params;

  return (
    <ImageBackground
      source={images.bglogo}
      resizeMode="cover"
      style={{
        background:
          "linear-gradient(360deg, rgba(63, 227, 115, 0.674589) 0%, #FFFFFF 100%)",
        width: SIZES.width,
        height: SIZES.height,
        padding: SIZES.padding,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View>
        <Image source={image} resizeMode="contain" style={styles.imgStyle} />
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}> {name}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}> Use</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold" }}> Product chi Mahiti</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  blackBox: {
    height: 200,
    width: 200,
    color: "black",
  },
  imgStyle: {
    width: 200,
    height: 200,
    padding: 20,
    margin: 20,
  },
});
export default Single;
