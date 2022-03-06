import React,{useState} from 'react';
import { Button, StyleSheet, TextInput, View,Modal} from 'react-native';

const GoalInput = props =>{
const [enteredGoal, setEnteredGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };


  const addGoalHandler = () =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal("")
  };

  const cancelModalHandler = () => {
      props.isAddModeCanceled()
  }
return( 
<Modal visible={props.visible} animationType="slide">
<View style={styles.inputConatiner}>
    <TextInput
      placeholder="Mit szeretnél csinálni?"
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
    <View style ={styles.buttonStackStyle}>
        <View style={styles.voteButtonStyle}>
        <Button title="ADD"  onPress={addGoalHandler} />
        </View>
   
    <View style={styles.voteButtonStyle}>
    <Button title="CANCEL" color="red" onPress={cancelModalHandler} />
    </View>
    

    </View>
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
    buttonStackStyle:{
        flexDirection:'row',
        padding:10,
        justifyContent: 'space-between',
        width: '60%'
    },
      voteButtonStyle: {

        width:'40%'
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