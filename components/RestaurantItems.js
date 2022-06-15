import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItems({ navigation, ...props }) {
  const [restaurantList, setRestaurantList] = useState([]);
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <View
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: "white",
          }}
          key={index}
        >
          <TouchableOpacity
            activeOpacity={0.85}
            style={{ marginBottom: 30 }}
            onPress={() => {
              navigation.navigate("RestaurantDetail", restaurant);
            }}
          >
            <RestaurantImage imageUrl={restaurant.imageUrl} />
          </TouchableOpacity>

          <RestaurantInfo
            rating={restaurant.rating}
            name={restaurant.name}
            price={restaurant.price}
            categories={restaurant.categories}
            restaurantList={restaurantList}
            restaurant={restaurant}
            setRestaurantList={setRestaurantList}
          />
        </View>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image source={props.imageUrl} style={{ width: "100%", height: 180 }} />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 0 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="orange" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => {
  const handleOnPress = () => {
    const index = props.restaurantList.findIndex(
      (res) => res === props.restaurant
    );

    const tmp = [...props.restaurantList];
    if (index >= 0) {
      tmp.splice(index, 1);
      return props.setRestaurantList(tmp);
    }

    tmp.push(props.restaurant);

    props.setRestaurantList(tmp);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text
          style={{
            fontSize: 13,
            color: "gray",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          {props.categories.join(" - ")}
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>{props.price}</Text>
      </View>
      <View>
        <CheckBox
          title={"Chọn"}
          checkedTitle="Đã chọn"
          checked={props.restaurantList.find((res) => res === props.restaurant)}
          checkedColor="red"
          uncheckedColor="#eee"
          onPress={handleOnPress}
        />
      </View>
    </View>
  );
};
