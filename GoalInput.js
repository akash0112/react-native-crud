import React, { useState } from "react";
import { Button, TextInput, View, Modal } from "react-native";
const GoalInput = (props) => {
  const [coursegoal, setcoursegoal] = useState("");
  const handlechange = (entertext) => {
    setcoursegoal(entertext);
  };
  const add = () => {
    if (coursegoal) {
      props.handlesubmit(coursegoal);
      setcoursegoal("");
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={{ padding: 50 }}>
        <View
          style={{
            // flexDirection: "row",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Course Goal"
            value={coursegoal}
            onChangeText={handlechange}
            style={{
              width: "80%",
              // borderBottomColor: "black",
              borderBottomWidth: 1,
              padding: 10,
              borderColor: "black",
              marginBottom: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "60%",
            }}
          >
            <View style={{ width: "40%" }}>
              <Button title="ADD" onPress={add} />
            </View>
            <View style={{ width: "50%" }}>
              <Button color="red" title="CANCEL" onPress={props.cancel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
