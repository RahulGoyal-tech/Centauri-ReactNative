// Takes text input and then on clicking a button gives character count on other screen and data is shown
// after some timeout and if request is sent then on clicking show error.

import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import {
  NavigationContainer,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createDrawerNavigator();

let i = 0;

interface NavProps {
  navigation: NavigationProp<ParamListBase>;
  route: any;
}

const WelcomeScreen: React.FC<NavProps> = ({navigation}) => {
  const [finp, setFinp] = useState<string>(''); //Force inputs the updated vale of text box
  const [count, setCount] = useState<number>(0); //Gives character count
  const handleClick = () => {
    navigation.navigate('Result', {
      val: count,
    });
    i = 0;
  };

  return (
    <View style={{backgroundColor: '#FFF176', height: '100%', paddingTop: 50}}>
      <Text style={{textAlign: 'center'}}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
          }}>
          Welcome to Home Screen.
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
          }}>
          {'\n'}You can type text in below box and click button to get random
          number generated from character count of your text.{'\n'}
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
            padding: 0,
            textAlign: 'center',
          }}>
          <Text>Character Count: </Text>
          {count}
        </Text>
      </Text>
      <TextInput
        multiline={true}
        value={finp}
        onChangeText={value => {
          setFinp(value);
          setCount(value.length);
        }}
        style={{
          borderColor: 'black',
          borderWidth: 4,
          paddingTop: 10,
          margin: 5,
          color: 'black',
          fontSize: 18,
          borderRadius: 8,
          padding: 10,
          height: 150,
        }}
      />
      <Pressable style={styles.button} onPress={handleClick}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 36,
            padding: 0,
            textAlign: 'center',
          }}>
          GET COUNT
        </Text>
      </Pressable>
    </View>
  );
};

const ResultScreen: React.FC<NavProps> = ({route}) => {
  let {val} = route.params;
  const [display, setDisplay] = useState<string>('Waiting...');
  if (!i) {
    let time = Math.floor(
      Math.random() * (val * 10 - (val - 50) * 10 + 1) + (val - 50) * 10,
    );
    if (time < 0) {
      time = time * -1;
    }
    if (time < 500) {
      time = time + 500;
    }
    console.log('Time Alloted: ' + String(time));

    setTimeout(function () {
      let data = Math.floor(Math.random() * (val * 10 - 500 + 1) + 500);
      setDisplay('Data: ' + String(time) + String(data));
    }, time);

    i = 1;
  }

  const handleClick = () => {
    i = 0;
    setDisplay('Refreshed');
  };

  return (
    <View style={{paddingTop: 200}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 65,
          textAlign: 'center',
        }}>
        {display}
      </Text>
      <Pressable style={styles.button} onPress={handleClick}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 36,
            padding: 0,
            textAlign: 'center',
          }}>
          REFRESH
        </Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: 'WELCOME', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{title: 'RESULT', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: 'blue',
    margin: 10,
    padding: 20,
  },
});

export default App;
