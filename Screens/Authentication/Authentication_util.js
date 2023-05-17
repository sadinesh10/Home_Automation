import { StyleSheet } from "react-native";
import ForgotPassword from "./ForgotPassword";

export const imageStyles = StyleSheet.create({
  logo: {
    width: 150,
    height: 40,
    resizeMode: "stretch",
    marginTop: 40,
    marginHorizontal: 20,
  },
  loginText: {
    color: "#1a8ae5",
    fontWeight: "700",
    fontSize: 26,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  wrapperInput: {
    borderRadius: 10,
    marginTop: 2,
    marginHorizontal: 25,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    fontSize: 18,
    padding: 1,
    paddingHorizontal: 10,
  },
  input: {
    padding: 10,
    width: "80%",
    fontWeight: "100",
  },
  svgImage: {
    marginRight: 10,
  },
  duplicateIcon: {
    width: 20,
    height: 20,
    borderWidth: 1,
    backgroundColor: "grey",
    marginHorizontal: 5,
  },
  ButtonGap: {
    width: "100%",
    height: "40%",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  pressable: {
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 15,
    backgroundColor: "#1a8ae5",
    marginHorizontal: 25,
  },
  pressableText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  optionalLogin: {
    alignSelf: "center",
    fontSize: 16,
  },
  optionalIcons: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  newUserSignUp: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 50,
  },
  signUpText:{
    fontWeight: "900"
  },
  noticeText:{
    marginHorizontal: 30,
    marginBottom: 10,
    fontWeight: "100",
  },

  OtherPagesLogin:{
    color: "#1a8ae5",
    fontWeight: "700",
    fontSize: 26,
    marginTop: 30,

    marginHorizontal: 30,
  },
  OtherPagesButtonGap:{
    width: "100%",
    height: "58%",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  OtpWrapText:{
    borderRadius: 10,
    marginTop: 2,
    marginBottom: 15,
    marginHorizontal: 10,
    backgroundColor: "#f2f2f2",
    fontSize: 18,
    paddingHorizontal: 5,
    alignItems: "center",
    flexDirection:"row", 
    justifyContent:"space-evenly",
    alignItems:"center"
  }, 
  otpInput:{
    padding: 10,
    fontSize: 25,
    fontWeight: "600",
    alignItems:"center",
    
  },
  ResetButtonGap:{
    width: "100%",
    height: "50%",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  ForgotScreenButtomGap:{
    width: "100%",
    height: "59%",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  ForgotOtp:{
    width: "100%",
    height: "59%",
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  wrapperIcon: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
});
