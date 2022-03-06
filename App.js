import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ScrollView,FlatList} from 'react-native';
import GoalItem  from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle  => {
    //cretate a new array and add the elements of the new array
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value:goalTitle}]);
  };
  return (
    <View style={textInputStyle.mainViewContainer}>
      <GoalInput onAddGoal= {addGoalHandler}/>
      <FlatList
       data={courseGoals} 
       renderItem={itemData => <GoalItem title ={itemData.item.value}/>}/>
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
