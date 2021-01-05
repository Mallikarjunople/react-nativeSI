import { LinearGradient } from "expo-linear-gradient";
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
  ColorPropType,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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
    <ImageBackground
      style={styles.container}
      source={images.bglogo}
      resizeMode="cover"
    >
      <ScrollView>
        <View
          style={{
            padding: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: SIZES.h2,
                color: COLORS.secondary,
              }}
            >
              एक पाऊल
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: SIZES.h2,
                color: COLORS.secondary,
              }}
            >
              {"   "}प्रगतीशील शेतीकडे...
            </Text>
          </View>

          <Image
            source={images.logo}
            resizeMode="contain"
            style={{ width: SIZES.width * 0.2, height: SIZES.height * 0.2 }}
          />
        </View>
        <LinearGradient
          colors={["#DCE35B", "#45B649"]}
          start={[1, 0]}
          end={[0, 0]}
          style={{
            width: SIZES.width * 0.95,
            height: SIZES.height * 0.08,
            borderRadius: 5,
            margin: 10,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.h2,
              color: COLORS.secondary,
              fontWeight: "bold",
              padding: 14,
            }}
          >
            आमची उत्पादने
          </Text>
        </LinearGradient>

        <View>
          <FlatList
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            data={pros}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View
                  style={{
                    marginTop: SIZES.padding,
                    height: SIZES.height * 0.2,
                    width: SIZES.width * 0.45,
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
          <LinearGradient
            colors={["#DCE35B", "#45B649"]}
            start={[1, 0]}
            end={[0, 0]}
            style={{
              width: SIZES.width * 0.95,
              height: SIZES.height * 0.08,
              borderRadius: 5,
              margin: 10,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.h2,
                color: COLORS.secondary,
                fontWeight: "bold",
                padding: 14,
              }}
            >
              उत्पादन प्रकार
            </Text>
          </LinearGradient>

          <View
            style={{
              width: SIZES.width - 10,
              height: SIZES.height * 0.3,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <LinearGradient
                colors={["#00f260", "#0575e6"]}
                start={[1, 0]}
                end={[0, 0]}
                style={{
                  width: SIZES.width * 0.4,
                  height: SIZES.height * 0.25,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  padding: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.width * 0.05,
                    fontWeight: "bold",
                    color: COLORS.secondary,
                  }}
                >
                  आमची उत्पादने
                </Text>
                <Image
                  source={images.logo}
                  resizeMode="contain"
                  style={{
                    width: SIZES.width * 0.15,
                    height: SIZES.height * 0.15,
                  }}
                />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.push("ProductList");
              }}
            >
              <LinearGradient
                colors={["#00f260", "#0575e6"]}
                start={[0, 0]}
                end={[1, 0]}
                style={{
                  width: SIZES.width * 0.4,
                  height: SIZES.height * 0.25,
                  backgroundColor: "#333",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: 25,
                  padding: 4,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: SIZES.width * 0.05,
                  }}
                >
                  इतर उत्पादने
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
