import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";

function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
}

export default CreateScreen;
