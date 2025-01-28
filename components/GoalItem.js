import {StyleSheet, View, Text, Pressable} from 'react-native';

const GoalItem = ({item, action}) => (
  <View style={styles.goalBox}>
    <Pressable style={({pressed}) => pressed && styles.pressedItem} onPress={action.bind(this, item)}>
      <Text style={styles.goalText}>{item.text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalBox: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    backgroundColor: '#380777',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});

export default GoalItem;
