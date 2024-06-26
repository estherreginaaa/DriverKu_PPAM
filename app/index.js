import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./landing";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import Home from "./Homepage/home";
import CreateBooking from "./Homepage/booking/create";
import BookingDetails from "./Homepage/booking/bookingdetails";
import Payment from "./Homepage/booking/payment";
import Orders from "./Orders/history";
import OrderActivity from "./Orders/order/activity";
import OrderDetails from "./Orders/order/details";
import Profile from "./Profile/profile";
import DriverAvailable from "./Homepage/booking/driveravailable";
import DriverDetails from "./Homepage/booking/driverdetails";
import Review from "./Orders/review";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

const Stack = createNativeStackNavigator();

export default function Index() {
  const [fontsLoaded] = useFonts({
    MontserratMedium: Montserrat_500Medium,
    MontserratBold: Montserrat_700Bold,
    MontserratExtraBold: Montserrat_800ExtraBold,
    MontserratSemiBold: Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    console.log("Loading fonts...");
    return null; // Or a loading indicator
  } else {
    console.log("Fonts Loaded");
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DriverAvailable" component={DriverAvailable} />
          <Stack.Screen name="DriverDetail" component={DriverDetails} />
          <Stack.Screen name="CreateBooking" component={CreateBooking} />
          <Stack.Screen name="BookingDetails" component={BookingDetails} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="OrderActivity" component={OrderActivity} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
