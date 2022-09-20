import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Tripperz!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'black',
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default App;
