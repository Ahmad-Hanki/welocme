import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Input from "./_components/input";
import Items from "./_components/Items";

export interface Todo {
  todo: string;
  id: number;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [initialTodo, setInitialTodo] = useState<Todo>({
    id: 0,
    todo: "",
  });

  return (
    <View style={styles.view}>
      <SafeAreaView>
        <Input
          setInitialTodo={setInitialTodo}
          initialTodo={initialTodo}
          setTodos={setTodos}
        />
        <Items setTodos={setTodos} setInitialTodo={setInitialTodo} todos={todos} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 25,
  },
});

export default Index;
