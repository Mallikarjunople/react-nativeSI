import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

function Single({ route, navigation }) {
  const { image, name } = route.params;

  return (
    <ScrollView>
      <ImageBackground
        source={images.bglogo}
        resizeMode="cover"
        style={{
          width: SIZES.width,
          // height: SIZES.height ,
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
          <Text
            style={{
              fontWeight: "bold",
              fontSize: SIZES.width * 0.07,
              padding: 20,
              color: COLORS.secondary,
            }}
          >
            {name}
            (रबर बुश)
          </Text>
        </View>
        <View style={{ width: SIZES.width * 0.9 }}>
          <LinearGradient
            colors={["#DCE35B", "#45B649"]}
            style={{ width: "95%", margin: 15, borderRadius: 15 }}
          >
            <Text
              style={{
                fontSize: SIZES.width * 0.06,
                fontWeight: "bold",
                padding: 15,
                color: COLORS.secondary,
              }}
            >
              {" "}
              Use (उपयोग)
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                padding: 15,
                color: COLORS.secondary,
              }}
            >
              धन्यवाद मी कंटेनरमधून उंची हटवल्यानंतर हे आता कार्य करते परंतु मी
              उंची चित्रात ठेवते कारण उंची टिप्पणी देताना ते ताणले जातात
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={["#DCE35B", "#45B649"]}
            style={{ width: "95%", marginHorizontal: 15, borderRadius: 15 }}
          >
            <Text
              style={{
                fontSize: SIZES.width * 0.06,
                fontWeight: "bold",
                padding: 15,
                color: COLORS.secondary,
              }}
            >
              {" "}
              Product Properties (उत्पादन गुणधर्म)
            </Text>
            <View style={{}}>
              <Text style={styles.text}>
                {/* Product Dimensions {"   "} 8 x 16 x 16 cm 400 Grams  */}
                उत्पादनाचे परिमाण {"   "} 8 x 16 x 16 सेमी 400 ग्रॅम
              </Text>
              <Text style={styles.text}>
                {/* Date First Available : 20 July 2020 */}
                तारीख प्रथम उपलब्ध: 20 जुलै 2020
              </Text>
              <Text style={styles.text}>
                {/* Manufacturer : BLUERAYS CLEAN ENERGY  */}
                निर्माता : BLUERAYS CLEAN ENERGY
              </Text>
              <Text style={styles.text}>
                {/* Dimensions : 8 x 16 x 16 Centimeters  */}
                परिमाण: 8 x 16 x 16 सेंटीमीटर
              </Text>
              <Text style={styles.text}>
                {" "}
                {/* Net Quantity : 100.00  */}
                निव्वळ मात्रा: 100.00
              </Text>
              <Text style={styles.text}>
                {/* Unit Included Components : EMITTERS Generic */}
                युनिटमध्ये समाविष्ट घटक: EMITTERS जेनेरिक
              </Text>
              <Text style={styles.text}>
                {" "}
                Item part number : BR-19 {"   "}
                आयटम भाग क्रमांक : BR-19
              </Text>
              <Text style={styles.text}>
                {/* Item Weight : 400 g Item */}
                आयटम वजन: 400 ग्रॅम आयटम
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  blackBox: {
    height: 200,
    width: 200,
    color: "black",
  },
  imgStyle: {
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.2,
  },
  text: {
    fontWeight: "bold",
    padding: 7,
    color: COLORS.secondary,
  },
});
export default Single;
