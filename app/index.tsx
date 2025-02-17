import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import icedCoffee from "../assets/images/iced-coffee.png";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={icedCoffee}
      >
        <Text style={styles.text}>Coffee Shop</Text>
        <View
          style={{ flexDirection: "column", justifyContent: "center", gap: 20 }}
        >
          <Link asChild style={{ marginHorizontal: "auto" }} href="/menu">
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Menu</Text>
            </Pressable>
          </Link>
          <Link asChild style={{ marginHorizontal: "auto" }} href="/contact">
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
``;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    width: 150,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 4,
  },
});
