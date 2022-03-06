import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ScrollView,FlatList} from 'react-native';
import GoalItem  from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const[isAddMode,setIsAddMode] = useState(false)
  const addGoalHandler = goalTitle  => {
    //cretate a new array and add the elements of the new array
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value:goalTitle}]);
  };

  const removeGoalHandler = goaliD =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goaliD);
    });
  };

  return (
    <View style={textInputStyle.mainViewContainer}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal= {addGoalHandler}/>
      <FlatList
       data={courseGoals} 
       renderItem={itemData => <GoalItem  id= {itemData.item.id} onDelete={removeGoalHandler}    title ={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const textInputStyle = StyleSheet.create({
  mainViewContainer: {
    padding: 50
  }
});
