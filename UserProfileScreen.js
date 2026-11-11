import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebase";

export default function UserProfileScreen() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const saveProfile = async () => {
    if (!fullName || !phoneNumber || !dateOfBirth) {
      Alert.alert("Please fill in all fields");
      return;
    }

    try {
      await addDoc(collection(db, "userProfiles"), {
        userId: auth.currentUser.uid,
        fullName: fullName,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth
      });

      Alert.alert("Success", "Profile saved!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 15 }}>
        User Profile
      </Text>

      <TextInput
        placeholder="Full Name"
        onChangeText={setFullName}
        style={{ margin: 5, borderWidth: 1, padding: 8 }}
      />

      <TextInput
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={{ margin: 5, borderWidth: 1, padding: 8 }}
      />

      <TextInput
        placeholder="Date of Birth (DD/MM/YYYY)"
        onChangeText={setDateOfBirth}
        style={{ margin: 5, borderWidth: 1, padding: 8 }}
      />

      <Button title="Save Profile" onPress={saveProfile} />
    </View>
  );
}