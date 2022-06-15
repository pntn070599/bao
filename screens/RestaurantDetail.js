import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function RestaurantDetail({ navigation, ...props }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <SafeAreaView style={{ marginTop: 40, alignSelf: "center" }}>
        <Text>Detail</Text>
      </SafeAreaView>
    </TouchableOpacity>
  );
}
