import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import RestaurantItems from "../components/RestaurantItems";
import restaurantItems from "../resources/restaurant-data";
import BottomTabs from "../components/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";
import RestaurantDetail from "./RestaurantDetail";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [activeTab, setActiveTab] = useState("Sản phẩm");
  useEffect(() => {
    setRestaurantData(restaurantItems);
  }, []);

  useEffect(() => {});

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs
          navigation={navigation}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SearchBar />
      </View>
      {activeTab === "Sản phẩm" ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems
            restaurantData={restaurantData}
            navigation={navigation}
          />
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems
            restaurantData={[restaurantData[0]]}
            navigation={navigation}
          />
        </ScrollView>
      )}
      <Divider width={0.5} />
      <BottomTabs />
    </SafeAreaView>
  );
}
