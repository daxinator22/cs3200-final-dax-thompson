import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default() => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(0);

  const updateCountInDatabase = (requestType) => {
    fetch(`https://z2v1aoq2ib.execute-api.us-west-1.amazonaws.com/dev?requestType=${requestType}`)
      .then(response => {return response.json();})
      .then(json => {
        setStatus(json.statusCode);
        setCount(json.count)
      })
      .catch(() => {setStatus("Unable to connect");});
  }

  const incrementCount = () => {
    updateCountInDatabase('increment');
  }

  const decrementCount = () => {
    updateCountInDatabase('decrement');
  }

  //getCountInDatabase();
  return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{count}</Text>
          <Text style={styles.status}>Status code: {status}</Text>
        </View>
        <Button color='red' title='Increment' onPress={() => incrementCount()}/>
        <Button color='red' title='Decrement' onPress={() => decrementCount()}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {alignItems: 'center'},
    text: {fontSize: 100, color: 'red'},
    status: {fontSize: 10, color: 'white'},
  });
