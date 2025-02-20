import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Id = () => {
  const { id, query } = useLocalSearchParams(); // local searchParams

  return (
    <View>
      <Text>{id}</Text>
      <Pressable
        onPress={async () => {
          await AsyncStorage.setItem("id", id as string);
          console.log(await AsyncStorage.getItem("id"));
        }}
      >
        <Text>{query}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Id;
