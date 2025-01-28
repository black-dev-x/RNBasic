import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';
import {useState} from 'react';

const GoalInput = ({addGoalHandler, visible}) => {
  const [goal, setGoal] = useState('');

  const addGoal = () => {
    setGoal('');
    addGoalHandler(goal);
  };
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput value={goal} style={styles.textInput} placeholder='Text' onChangeText={setGoal}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoal} title='Add Goal'></Button>
          </View>
          <View style={styles.button}>
            <Button title='Cancel'></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  button: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    marginRight: 8,
    padding: 8,
  },
});
