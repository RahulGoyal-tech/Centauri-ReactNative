import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

interface InputBoxProps {
  val: number;
}

const InputBox: React.FC<InputBoxProps> = ({ val }) => {
  return (
    <View>
      <Text style={styles.containerText}>Characters Left: {280 - val}</Text>
    </View>
  );
};

const App: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<string>('#D3D3D3');
  const [bcolor, setbColor] = useState<string>('gray');
  const [tcolor, setTColor] = useState<string>('black');
  const [finp, setFinp] = useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        value = {finp}
        onChangeText={(value) => {
          setFinp(value);
          setCount(value.length);

          if (value.length > 280) {
            setbColor('red');
            setColor('#ffb3b3');
            setTColor('white');
          }
          else if (value.length >= 270 && value.length <= 280) {
            setbColor('yellow');
            setColor('#ffffe0');
            setTColor('black');
          }
          else if (value.length < 270) {
            setColor('#D3D3D3');
            setbColor('gray');
            setTColor('black');
          }
        }}
        style={{
          borderColor: bcolor,
          borderWidth: 4,
          flex: 1,
          paddingTop:10,
          margin: 5,
          backgroundColor: color,
          color: tcolor,
          fontSize: 18,
          borderRadius: 8,
          padding: 10,
        }}
      />
      <InputBox val={count} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#ecf0f1',
    padding: 0,
    borderColor: 'gray',
    borderWidth: 2,
  },
  containerText: {
    justifyContent: 'center',
    paddingTop: 5,
    backgroundColor: '#ecf0f1',
    padding: 8,
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default App;