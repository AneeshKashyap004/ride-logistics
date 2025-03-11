import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const PaymentScreen = ({ route, navigation }) => {
  const { rideId } = route.params;

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://your-backend-url/api/payment/create', {
        rideId,
        amount: 50, // Replace with actual amount
        paymentMethod: 'UPI', // Replace with selected payment method
      });
      navigation.navigate('Ratings');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Text>Payment Screen</Text>
      <Button title="Pay Now" onPress={handlePayment} />
    </View>
  );
};

export default PaymentScreen;