import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import MenuImages from "@/constants/MenuImages";
import { MENU_ITEMS } from "@/constants/MenuItems";
const Menu = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  const Container = Platform.OS == "web" ? ScrollView : SafeAreaView;

  const SeparatorComponent = () => <View style={styles.separator} />;

//   const HeaderComponent = () => (
//    <Text>
//         Top of List
//    </Text>
//   )
  const FooterComponent = () => (
   <Text>
        End of List
   </Text>
  )
  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false} // hides the vertical scrollbar
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={SeparatorComponent}
        // ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        ListFooterComponentStyle={styles.footerStyles}
        ListEmptyComponent={() => (
          <View>
            <Text>There are no items in the list</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                {" "}
                {item.title}
              </Text>
              <Text style={styles.menuItemText}> {item.description}</Text>

              <Image style={styles.menuImage} source={MenuImages[+item.id - 1]} />
            </View>
          </View>
        )}
      />
    </Container>
  );
};

export default Menu;

const createStyles = (
  theme: { background: string; text: string },
  colorScheme: string | null | undefined
) => {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 1,
      width: "50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
    },
    footerStyles: {
      marginHorizontal: "auto",
    },
    row: {
      flexDirection: "row",
      width: "100%",
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: "solid",
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
      borderWidth: 1,
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: "auto",
    },
    menuTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: "underline",
    },
    menuItemText: {
      color: theme.text,
    },
    menuImage: {
      width: 100,
      height: 100,
    },
  });
};
