import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ViewBase,
  StyleSheet,
  FlatList,
} from "react-native";

import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

export default function Home({ navigation }) {
  //dull data

  const [pros, setPros] = React.useState([
    { id: 1, name: "first" },
    { id: 2, name: "sec" },
    { id: 3, name: "thie" },
    { id: 4, name: "first" },
    { id: 5, name: "sec" },
    { id: 6, name: "thie" },
  ]);
  return (
    <View style={styles.container}>
        <Text style={{
            fontSize:SIZES.h1,
            color:COLORS.secondary,
            fontWeight:'400',
            margin:10,
            padding:10,
          }}>Our products</Text>
       <View >
       <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={pros}
          renderItem={(item) => (
            <TouchableOpacity>
              <View
                style={{
                  marginTop: SIZES.padding,
                  height: 260,
                  width: 100,
                  backgroundColor: "#000",
                  marginRight: SIZES.padding,
                }}
              >
                {item.id}
              </View>
            </TouchableOpacity>
          )}
        />
       </View>
      <View >
          <Text style={{
            fontSize:SIZES.h1,
            color:COLORS.secondary,
            fontWeight:'400',
            margin:10,
            padding:10,
          }}>Category</Text>
          <FlatList
          data={pros}
          renderItem={(item)=>(
            <TouchableOpacity onPress={()=>{
              navigation.navigate('Contact')
            }}>
              <View style={{
                margin:20,
                borderRadius:10,
                height:100,
                backgroundColor:'#222',
              }}>

              </View>
            </TouchableOpacity>
          )}
          />


      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
  },
});
