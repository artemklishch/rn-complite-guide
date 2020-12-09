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
        <TextInput
          placeholder="Cource Goal"
          style={styles.textField}
          onChangeText={enteredGoalHandler}
          value={enteredGoal}
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
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
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
  textField: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  listItem: {
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});
