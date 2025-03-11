import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Ride & Logistics App</Text>
      <Button title="Book a Ride" onPress={() => navigation.navigate('RideBooking')} />
      <Button title="Send Logistics" onPress={() => navigation.navigate('LogisticsBooking')} />
    </View>
  );
};

export default HomeScreen;