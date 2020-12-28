import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { icons, images, theme, COLORS, SIZES, FONTS } from '../constants';

function Single() {
  return (
    <View>
      <View>
        <Image source={images.plant6} style={styles.imgStyle} />
      </View>
      Single Product
    </View>
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
