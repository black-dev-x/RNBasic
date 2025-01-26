import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState([])

  const goalInputHandler = (text) => {
    setGoal(text)
  }

  const addGoalHandler = () => {
    setGoal('')
    setGoals([...goals, goal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value={goal} style={styles.textInput} placeholder='Text' onChangeText={goalInputHandler}></TextInput>
        <Button onPress={addGoalHandler} title='Add Goal'></Button>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of something</Text>
        {goals.map((goal, index) => <Text key={index}>{goal}</Text>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1, 
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
