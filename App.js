import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default() => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(0);
  const [name, onChangeName] = useState(null);
  const [company, onChangeCompany] = useState(null);
  const [reservation_id, setReservationId] = useState("No reservation");
  const [debug, setDebug] = useState("");

  const submitReservation = (name, company) => {
    fetch(`https://z2v1aoq2ib.execute-api.us-west-1.amazonaws.com/dev?requestType=create&name=${name}&company=${company}`)
      .then(response => {return response.json();})
      .then(json => {
        setReservationId(json.reservation_id)
        setDebug(json)
      })
      .catch(() => {setStatus("Unable to connect");});
  }

  const updateCountInDatabase = (requestType) => {
    fetch(`https://z2v1aoq2ib.execute-api.us-west-1.amazonaws.com/dev?requestType=${requestType}`)
      .then(response => {return response.json();})
      .then(json => {
        setStatus(json.statusCode);
        setCount(json.count)
      })
      .catch(() => {setStatus("Unable to connect");});
  }

  return (
      <View>
        <TextInput value={name} onChangeText={onChangeName} placeholder='Name'/>
        <TextInput value={company} onChangeText={onChangeCompany} placeholder='Company Name'/>
        <Button color='red' title='Submit Reservation' onPress={() => submitReservation(name, company)}/>
        <Text style={styles.res_id}>{reservation_id}</Text>
        <Text style={styles.debug}></Text>
      </View>
    );
}

// <View style={styles.container}>
//   <Text style={styles.text}>{count}</Text>
//   <Text style={styles.status}>Status code: {status}</Text>
// </View>
// <Button color='red' title='Increment' onPress={() => incrementCount()}/>
// <Button color='red' title='Decrement' onPress={() => decrementCount()}/>

const styles = StyleSheet.create({
    res_id: {fontSize: 30, color: 'white'},
    debug: {fontSize: 10, color: 'blue'},
  });
