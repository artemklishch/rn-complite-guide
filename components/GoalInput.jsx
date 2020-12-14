import React from "react";
import { TextInput, StyleSheet } from "react-native";

const GoalInput = ({ enteredGoalHandler, enteredGoal }) => {
  return (
    <TextInput
      placeholder="Cource Goal"
      style={styles.textField}
      onChangeText={enteredGoalHandler}
      value={enteredGoal}
    />
  );
};

const styles = StyleSheet({
  textField: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});

export default GoalInput;
