import React from 'react'
import { StyleSheet, Text, TouchableOpacity,  View } from 'react-native'
const GoalList = (props) => {
    return (
      <TouchableOpacity   onPress={props.ondelete.bind(this,props.id)}>
        <View  style={styles.list}>
        <Text > {props.title}</Text>
         </View>
         </TouchableOpacity>
    )
}

export default GoalList

const styles = StyleSheet.create({
    list: {
      padding: 10,
      marginVertical: 10,
      borderWidth: 1,
      backgroundColor:'#fcf9fb'
    },
  });
  