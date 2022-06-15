import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs({ navigation, ...props }) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Sản phẩm"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        navigation={navigation}
      />
      <HeaderButton
        text="Yêu thích"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        navigation={navigation}
      />
    </View>
  );
}

const HeaderButton = ({ navigation, ...props }) => {
  const clickHandle = () => {
    props.setActiveTab(props.text);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={clickHandle}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
