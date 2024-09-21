import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over! </Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text>Your phone needs X rounds to guess the number Y.</Text>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    // marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "white",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
