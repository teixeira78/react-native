import { View, Text, Pressable, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: COLORS.PRIMARY_600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.PRIMARY_500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans",
  },
  pressed: {
    opacity: 0.75,
  },
});
