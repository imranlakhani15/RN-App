import React from "react";
import { Button, Content, Input, Item, Label, Text, View } from "native-base";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/Colors";

const LoginScreen = (props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.screen}
    >
      <View style={styles.loginContainer}>
        <Item floatingLabel>
          <Label>Mobile Number</Label>
          <Input style={styles.input} />
        </Item>
        <Button rounded style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.screenBg,
  },
  loginContainer: {
    width: "90%",
  },
  input: {
    borderBottomWidth: 0,
    borderColor: Colors.accent,
    backgroundColor: "transparent",
  },
  button: {
    marginVertical: 30,
    backgroundColor: Colors.primary,
    alignSelf: "center",
    width: "100%",
    maxWidth: 150,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: 'center',
    width: "100%"
  },
});

export default LoginScreen;
