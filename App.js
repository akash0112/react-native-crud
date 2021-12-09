import React, { useState } from "react";
import { View, FlatList, Button } from "react-native";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";

export default function App() {
  const [goallist, setgoallist] = useState([]);
const [isAddMode, setisAddMode] = useState(false)
  const handlesubmit = (coursegoal) => {
    // console.log(coursegoal);
    setgoallist((currentgoals) => [
      ...currentgoals,
      { id: Math.random().toString(), value: coursegoal },
    ]);
    setisAddMode(false)
  };
  const removehandler = (goalId) => {
    setgoallist((currentgoals) => {
     return currentgoals.filter((singlegoal) => 
        singlegoal.id !== goalId
      );
    });
  };
  const onCancel=()=>{
    setisAddMode(false)
  }
  return (
    <View style={{ padding: 50 }}>
      <Button title="Add New Title" onPress={()=>{setisAddMode(true)}}/>
      <GoalInput visible={isAddMode} handlesubmit={handlesubmit} cancel={onCancel}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goallist}
        renderItem={(itemdata) => (
          <GoalList
            id={itemdata.item.id}
            ondelete={(id) => {
              removehandler(id);
            }}
            title={itemdata.item.value}
          />
        )}
      />
    </View>
  );
}
