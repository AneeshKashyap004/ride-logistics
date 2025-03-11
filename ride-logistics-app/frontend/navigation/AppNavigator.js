import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RideBookingScreen from '../screens/RideBookingScreen';
import LogisticsBookingScreen from '../screens/LogisticsBookingScreen';
import PaymentScreen from '../screens/PaymentScreen';
import AdminDashboard from '../screens/AdminDashboard';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RideBooking" component={RideBookingScreen} />
      <Stack.Screen name="LogisticsBooking" component={LogisticsBookingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    </Stack.Navigator>
  );
};

export default AppNavigator;