import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default() => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(0);
  const refresh = () => {
    var postBody = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body:{
        user: 'daxinator22',
        password: 'Xtreme!22'
      },
    };

    fetch('https://z2v1aoq2ib.execute-api.us-west-1.amazonaws.com/dev', postBody)
      .then(response => {return response.json();})
      .then(json => {setStatus(json.statusCode);})
      .catch(() => {setStatus(status + 1);});
  }

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{count}</Text>
          <Text style={styles.status}>Status code: {status}</Text>
        </View>
        <Button color='red' title='Refresh' onPress={() => refresh()}/>
        <Button title='Increment' onPress={() => incrementCount()}/>
        <Button title='Decrement' onPress={() => decrementCount()}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {alignItems: 'center'},
    text: {fontSize: 100, color: 'red'},
    status: {fontSize: 25, color: 'white'},
  });
