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

function CreateScreen({ navigation }) {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  return (
    <View>
      <Text>Create</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CreateScreen;
