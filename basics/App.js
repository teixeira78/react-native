import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function deleteGoalHandler(selectedGoalId) {
    setCourseGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.id !== selectedGoalId)
    );
  }

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={isModalVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem
                goal={item.text}
                id={item.id}
                onGoalPress={setCourseGoals}
                onDeleteItem={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => item.id}
            style={styles.goalsList}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    marginTop: 24,
    flex: 5,
  },
});
