import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
    const [todos, setTodos] = useState<{text:string, id:number}[]>();
    
  return (
    <View style={styles.view}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
