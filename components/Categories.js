import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/splash.png"),
    text: "Pick-up",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={{ alignItems: "center", marginRight: 30 }} key={index}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "900",
              }}
            >
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
