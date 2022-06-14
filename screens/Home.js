import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import RestaurantItems from "../components/RestaurantItems";
import restaurantItems from "../resources/restaurant-data";
import BottomTabs from "../components/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    setRestaurantData(restaurantItems);
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={0.5} />
      <BottomTabs />
    </SafeAreaView>
  );
}
