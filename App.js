import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (goal) => {
    setGoals((goals) => [...goals, {text: goal, id: Math.random().toString()}]);
    setModalVisible(false);
  };

  const deleteGoal = (goal) => {
    setGoals((goals) => goals.filter((g) => g.id !== goal.id));
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.container}>
      {!modalVisible && <Button title="Add New Goal" color="#5e0acc" onPress={() => setModalVisible(true)}/>}
      <GoalInput visible={modalVisible} addGoalHandler={addGoalHandler} cancel={() => setModalVisible(false)}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} keyExtractor={(item) => item.id} renderItem={({item}) => <GoalItem item={item} action={deleteGoal}/>}></FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
