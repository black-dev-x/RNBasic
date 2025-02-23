import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import {useState} from 'react';

const GoalInput = ({addGoalHandler, visible, cancel}) => {
  const [goal, setGoal] = useState('');

  const addGoal = () => {
    setGoal('');
    addGoalHandler(goal);
  };
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/image/goal.png")}/>
        <TextInput value={goal} style={styles.textInput} placeholder='Text' onChangeText={setGoal}></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoal} title='Add Goal'></Button>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={cancel}></Button>
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
    backgroundColor: '#311b6b'
  },
  button: {
    flex: 1
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
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
