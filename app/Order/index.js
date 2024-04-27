import { Text, View } from "react-native";
import { Stack, router } from "expo-router";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "../../auth/AuthProvider";
import { useEffect, useState } from "react";
import { IconButton } from "react-native-paper";

export default function Order() {
  const { user } = useAuth();
  const [orders, setOrders] = useState();
  const order_time = "test";
  const status = "test";

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ref = firestore().collection("Order").doc(1);
        const response = await ref.get();
        return response;
      } catch (error) {
        return error;
      }
    };
    getOrders().then((docs) => {
      const data = docs.docs.map((doc) => doc.data());
      setOrders(data);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "start",
        paddingTop: 60,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "40%" }}>
          <IconButton
            onPress={() => {
              router.push("/Home");
            }}
            icon="arrow-left"
          />
        </View>
        <View style={{ width: "60%" }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Orders
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#F0F3FF",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 15,
          width: "80%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text>Driver: </Text>
            <Text>{order_time}</Text>
            <Text>{status}</Text>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <IconButton
              onPress={() => {
                router.push("");
              }}
              icon="message-reply-text"
            />
            <IconButton
              onPress={() => {
                router.push("");
              }}
              icon="star-settings-outline"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
