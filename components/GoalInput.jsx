import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ onAddGoal, onCancel, setIsAddModal, visiblity }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const enteredGoalHandler = (enteredText) => setEnteredGoal(enteredText);
  const onAddGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
    setIsAddModal(false);
  };
  const onCancelHandler = () => {
    onCancel();
    setEnteredGoal("");
  };
  return (
    <Modal visible={visiblity} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Cource Goal"
          style={styles.textField}
          onChangeText={enteredGoalHandler}
          value={enteredGoal}
        />
        <View style={styles.btnsBlock}>
          {/* <Button title="ADD" onPress={() => addCurrentGoalHandler(enteredGoal)} /> */}
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancelHandler} />
          </View>
          {/* <Button title="ADD" onPress={onAddGoal.bind(this, enteredGoal)} /> */}
          <View style={styles.button}>
            <Button title="ADD" onPress={onAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  btnsBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
