import * as React from 'react';
import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

interface NavProps {
  navigation: NavigationProp<ParamListBase>;
}

const HomeScreen:React.FC<NavProps> = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Welcome to home screen on my React Native app written using typesript.
        You can press below button to go on details screen.
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Detail');
          console.log("Navigated to Detail Screen");
        }}
        style={styles.button}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            padding: 5,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Go To Detail Screen
        </Text>
      </Pressable>
    </View>
  );
};

const DetailScreen:React.FC<NavProps> = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Welcome to detail screen.{'\n'}Here i will display my details:{'\n'}
        <Text style={{ fontSize: 24, fontWeight: '500' }}>
          Name: Rahul Goyal{'\n'}Course: Electronics Engineering{'\n'}Year: 3rd
          Year
        </Text>
      </Text>
      <Pressable onPress={() => {
        navigation.goBack();
        console.log("Navigated to Home Screen")
        }} style={styles.button}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            padding: 5,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Back
        </Text>
      </Pressable>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'HOME' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'DETAILS' }}
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
  },
  text: {
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    color: 'black',
    fontSize: 28,
    fontWeight: '900',
  },
});

export default App;
