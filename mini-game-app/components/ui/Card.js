import { StyleSheet, View } from "react-native";
import COLORS from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.PRIMARY_800,
    borderRadius: 8,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
});
