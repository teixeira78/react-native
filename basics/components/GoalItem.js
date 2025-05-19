import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem({ goal, id, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#5e0acc" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{goal}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    fontSize: 18,
    color: "#ffff",
    padding: 8,
  },
});

export default GoalItem;
