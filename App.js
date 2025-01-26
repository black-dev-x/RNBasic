import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (text) => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    setGoal('');
    setGoals((goals) => [...goals, goal]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value={goal} style={styles.textInput} placeholder='Text' onChangeText={goalInputHandler}></TextInput>
        <Button onPress={addGoalHandler} title='Add Goal'></Button>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={
          ({item}) => (
            <View style={styles.goalBox}>
              <Text style={styles.goalText}>{item}</Text>
            </View>
          )
        }>
        </FlatList>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalBox: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
