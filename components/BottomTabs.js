import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  const [selected, setSelected] = useState("Trang chủ");
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon
        icon="home"
        text="Trang chủ"
        selected={selected}
        setSelected={setSelected}
      />
      <Icon
        icon="shopping-bag"
        text="Giỏ hàng"
        selected={selected}
        setSelected={setSelected}
      />
      <Icon
        icon="user"
        text="Tài khoản"
        selected={selected}
        setSelected={setSelected}
      />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity onPress={() => props.setSelected(props.text)}>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text
        style={{
          fontWeight: props.selected === props.text ? "bold" : "normal",
        }}
      >
        {props.text}
      </Text>
    </View>
  </TouchableOpacity>
);
