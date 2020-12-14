import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components";
import GoalInput from "./components";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [currentGoals, setCurrentGoals] = useState([]);
  const enteredGoalHandler = (enteredText) => setEnteredGoal(enteredText);
  const addCurrentGialHandler = () =>
    setCurrentGoals((goals) => [
      ...goals,
      // { key: Math.random().toString(), value: enteredGoal },
      // { id: Math.random().toString(), value: enteredGoal },
      { guid: Math.random().toString(), value: enteredGoal },
    ]);
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput
          enteredGoalHandler={enteredGoalHandler}
          enteredGoal={enteredGoal}
        />
        <Button title="ADD" onPress={addCurrentGialHandler} />
      </View>
      {/* <ScrollView>
        {currentGoals.map((goal, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* <View>
        {currentGoals.map((goal, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View> */}
      <FlatList
        keyExtractor={(item) => item.guid}
        data={currentGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
