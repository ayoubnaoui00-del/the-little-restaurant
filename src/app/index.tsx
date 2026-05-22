import { Text, View, StyleSheet, ScrollView,} from "react-native";
import Home from "@/components/home"
import { Menu } from "expo-router/build/primitives/menu";
export default function Index() {
  return (
    <ScrollView style={{ flex:1,backgroundColor:"#F5E6CA"}}>
      <Home/>
       <Menu/>
    </ScrollView>
  )
  }

