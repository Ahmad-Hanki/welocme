import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Todo } from "..";

interface InputProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  initialTodo?: Todo;
  setInitialTodo?: Dispatch<SetStateAction<Todo>>;
}

const Input = ({ initialTodo, setTodos, setInitialTodo }: InputProps) => {
  const [todo, setTodo] = useState(initialTodo?.todo || "");

  useEffect(() => {
    if (initialTodo) {
      setTodo(initialTodo.todo);
    }
  }, [initialTodo]);

  const handleAdd = () => {
    setTodos((prev) => [...prev, { todo, id: prev.length + 1 }]);

    setTodo("");
  };

  const handleEdit = () => {
    if (!initialTodo || !setInitialTodo) return;

    // Update the todo list by replacing the one that matches the `id`
    setTodos((prev) =>
      prev.map((item) =>
        item.id === initialTodo.id ? { ...item, todo } : item
      )
    );

    // Reset initialTodo and todo state after edit
    setInitialTodo({ id: 0, todo: "" });
    setTodo("");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          width: "80%",
        }}
        value={todo} // ✅ Controlled input
        onChangeText={(text) => setTodo(text)}
        placeholder="To do:"
      />
      <Pressable
        style={{ backgroundColor: "green", borderRadius: 40, padding: 10 }}
        onPress={initialTodo?.id && initialTodo.todo ? handleEdit : handleAdd}
      >
        <Text>{initialTodo?.id && initialTodo.todo ? "Edit" : "Add"}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Input;
