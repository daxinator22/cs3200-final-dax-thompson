import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default() => {
  const [count, setCount] = useState(0);
  return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{count}</Text>
        </View>
        <Button color='red'title='Increment' onPress={() => setCount(count + 1)}/>
        <Button color='red' title='Decrement' onPress={() => setCount(count - 1)}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {alignItems: 'center'},
    text: {fontSize: 100, color: 'red'},
  });
