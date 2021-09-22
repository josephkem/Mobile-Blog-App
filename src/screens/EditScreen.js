import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";

function EditScreen({ navigation }) {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return <BlogPostForm />;
}

export default EditScreen;
