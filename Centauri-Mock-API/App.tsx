import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const App: React.FC<{}> = () => {
  const [display, setDisplay] = useState<string>('Click a Button');
  const [bdColor, setBdColor] = useState<string>('green');

  const handleClick = () => {
    if (display == 'Loading..') {
      console.error('Error, request in process');
      setBdColor('red');
    } else {
      setDisplay('Loading..');
      let time = Math.floor(Math.random() * (6000 - 500 + 1) + 500);
      console.log("Time Alloted: " + String(time));
      setTimeout(function () {
        let data = Math.floor(Math.random() * (7 - 0 + 1) + 0);
        setDisplay('Data: ' + String(data));
        setBdColor('green');
      }, time);
    }
  }

  return (
    <View>
      <View style={{ flex: 1, margin: 50 }}></View>
      <Text
        style={{
          textAlign: 'center',
          backgroundColor: 'white',
          borderWidth: 3,
          borderColor: bdColor,
          padding: 10,
          margin: 50,
          borderRadius: 8,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {display}
      </Text>

      <View style={{ flexDirection: 'row', marginLeft: 50, marginRight: 50 }}>

        <Pressable
          style={styles.button}
          onPress={handleClick}>
          <Text style={styles.button}>CLICK1</Text>
        </Pressable>

        <View style={styles.spaceBox}></View>

        <Pressable
          style={styles.button}
          onPress={handleClick}>
          <Text style={styles.button}>CLICK2</Text>
        </Pressable>

        <View style={styles.spaceBox}></View>

        <Pressable
          style={styles.button}
          onPress={handleClick}>
          <Text style={styles.button}>CLICK3</Text>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spaceBox: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 2,
    backgroundColor: 'white',
    borderColor: 'none',
    padding: 8,
  },
  button: {
    backgroundColor: '#e05863',
    borderRadius: 2,
    color: 'white',
    fontSize: 10,
    padding: 8,
  },
});

export default App;