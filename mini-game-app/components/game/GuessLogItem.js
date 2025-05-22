import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: COLORS.PRIMARY_800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.ACCENT_500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
