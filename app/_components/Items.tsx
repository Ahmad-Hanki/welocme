import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import { Todo } from "..";
import AntDesign from "@expo/vector-icons/AntDesign";

const Items = ({
  todos,
  setInitialTodo,
  setTodos,
}: {
  todos: Todo[];
  setInitialTodo?: Dispatch<SetStateAction<Todo>>;
  setTodos?: Dispatch<SetStateAction<Todo[]>>;
}) => {
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 20,
              borderTopWidth: 1,
              borderBottomColor: "gray",
            }}
          />
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => {
                if (!setInitialTodo) return;
                setInitialTodo(item);
              }}
            >
              <Text>{item.todo}</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                if (!setTodos) return;
                setTodos((prev) => prev.filter((i) => i.id !== item.id));
              }}
            >
              <AntDesign name="delete" size={24} color="black" />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Items;
