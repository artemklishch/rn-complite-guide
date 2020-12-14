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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [currentGoals, setCurrentGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);
  const addCurrentGoalHandler = (goalTitle) => {
    setCurrentGoals((goals) => [
      ...goals,
      // { key: Math.random().toString(), value: enteredGoal },
      // { id: Math.random().toString(), value: enteredGoal },
      { guid: Math.random().toString(), value: goalTitle },
    ]);
  };
  const onDeleteItem = (id) => {
    setCurrentGoals((goals) => goals.filter((goal) => goal.guid !== id));
  };
  const onCancelAdditionGoal = () => {
    setIsAddModal(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddModal(true)} />
      <GoalInput
        visiblity={isAddModal}
        onAddGoal={addCurrentGoalHandler}
        onCancel={onCancelAdditionGoal}
        setIsAddModal={setIsAddModal}
      />
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
          <GoalItem
            title={itemData.item.value}
            onDelete={onDeleteItem}
            id={itemData.item.guid}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
