import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const App: React.FC<{}> = () => {

  const [list , setList] = useState(
    [
      {key:1, title: 'List Item 1'},
      {key:2, title: 'List Item 2'},
      {key:3, title: 'List Item 3'},
      {key:4, title: 'List Item 4'},
      {key:5, title: 'List Item 5'},
      {key:6, title: 'List Item 6'},
      {key:7, title: 'List Item 7'},
      {key:8, title: 'List Item 8'},
      {key:9, title: 'List Item 9'},
      {key:10, title: 'List Item 10'}
    ]
  )

  const Del = (swipeData : any, data: any) => {
    console.log('swipeData = ',swipeData);
    console.log(data.translateX)
    if(data.translateX < 0){
      Alert.alert(
        "Delete Item ?",
        "Are you sure, you want to delete this item ?",
        [
          {
            text: "Cancel",
            onPress: () => {
              console.log("Cancel Pressed");
            },
            style: "cancel"
          },
          { 
            text: "OK", 
            onPress: () => {
              console.log("OK Pressed");
              const newlist = [...list];
              const ind = list.findIndex(item => item.key === swipeData);
              newlist.splice(ind,1);
              setList(newlist)
            } 
          }
        ]
      );
    }
  }

  const rndr = (data: any) => {
    return(
      <View>
          <Text style = {styles.contentText}>
            {data.item.title}
          </Text>
      </View>
    )
  }

  const rndrHidden = () => {
    return(
      <Text style = {styles.deleteText}>
        Delete
      </Text>
    )
  }

  return(
    <View style = {{backgroundColor: '#8BC34A', height: '100%'}}>
      <SwipeListView
        disableRightSwipe = {true}
        data = {list}
        renderItem = {rndr}
        renderHiddenItem = {rndrHidden}
        swipeGestureEnded = {Del}
        useNativeDriver = {false}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  deleteText: {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: 10,
    height: 70, 
    padding: 20, 
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold', 
    textAlign: 'right'
  },
  contentText: {
    color: 'black',
    backgroundColor: '#E0E0E0',  
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    padding: 20, 
    margin: 10, 
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;