import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function ShowScreen({ navigation }) {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <FontAwesome name="pencil-square" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
