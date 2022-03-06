import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ScrollView,FlatList} from 'react-native';

const GoalInput = props =>{
const [enteredGoal, setEnteredGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
return( <View style={styles.inputConatiner}>
    <TextInput
      placeholder="Mit szeretnél csinálni?"
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
    <Button title="ADD" style={styles.voteButtonStyle} onPress={() => props.onAddGoal(enteredGoal)} />
    </View>)
}

const styles = StyleSheet.create({

    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10
      },
 
      voteButtonStyle: {
        marginLeft: 10
      },
      inputConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

})

export default GoalInput