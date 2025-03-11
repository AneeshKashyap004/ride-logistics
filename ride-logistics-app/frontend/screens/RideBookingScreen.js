import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const RideBookingScreen = ({ navigation }) => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');

  const handleBookRide = async () => {
    try {
      const response = await axios.post('http://your-backend-url/api/ride/book', {
        customerId: '123', // Replace with actual customer ID
        pickupLocation: pickup,
        dropLocation: drop,
        fare: 100, // Replace with actual fare calculation
      });
      navigation.navigate('Tracking', { rideId: response.data.id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Text>Book a Ride</Text>
      <TextInput placeholder="Pickup Location" value={pickup} onChangeText={setPickup} />
      <TextInput placeholder="Drop Location" value={drop} onChangeText={setDrop} />
      <Button title="Confirm Booking" onPress={handleBookRide} />
    </View>
  );
};

export default RideBookingScreen;