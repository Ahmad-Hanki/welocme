import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import { Todo } from "..";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { StatusBar } from "react-native";
const Items = ({
  todos,
  setInitialTodo,
  setTodos,
}: {
  todos: Todo[];
  setInitialTodo?: Dispatch<SetStateAction<Todo>>;
  setTodos?: Dispatch<SetStateAction<Todo[]>>;
}) => {
  const router = useRouter();

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            No items to display
          </Text>
        )}
        refreshing={false}
        onRefresh={() => {
          setTodos?.([]);
        }}
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
              onLongPress={() => {
                router.push({
                  pathname: "/details/[id]",
                  params: { id: item.id, query: "hello" },
                });
              }}
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
      {/* <StatusBar
        backgroundColor={"red"}
        barStyle={"dark-content"}
        animated={true}
        networkActivityIndicatorVisible={false}
        showHideTransition={"slide"}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Items;
