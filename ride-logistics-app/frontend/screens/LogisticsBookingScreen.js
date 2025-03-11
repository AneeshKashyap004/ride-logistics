import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LogisticsBookingScreen = ({ navigation }) => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  const handleBookLogistics = async () => {
    try {
      const response = await axios.post('http://your-backend-url/api/logistics/book', {
        customerId: '123', // Replace with actual customer ID
        pickupLocation: pickup,
        dropLocation: drop,
        fare: 100, // Replace with actual fare calculation
      });
      navigation.navigate('Tracking', { orderId: response.data.id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Text>Book Logistics</Text>
      <TextInput placeholder="Pickup Location" value={pickup} onChangeText={setPickup} />
      <TextInput placeholder="Drop Location" value={drop} onChangeText={setDrop} />
      <Button title="Confirm Booking" onPress={handleBookLogistics} />
    </View>
  );
};

export default LogisticsBookingScreen;