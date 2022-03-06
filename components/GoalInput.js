import React,{useState} from 'react';
import { Button, StyleSheet, TextInput, View,Modal} from 'react-native';

const GoalInput = props =>{
const [enteredGoal, setEnteredGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
return( 
<Modal visible={props.visible} animationType="slide">
<View style={styles.inputConatiner}>
    <TextInput
      placeholder="Mit szeretnél csinálni?"
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
    <Button title="ADD" style={styles.voteButtonStyle} onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
    </Modal>)
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
          flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      modalContainer:{
        padding:50

      }

})

export default GoalInput