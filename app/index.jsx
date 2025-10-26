import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from "expo-router"

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.meh}>compawssion from react native expo aaa</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    meh: {
        color: "brown",
        fontWeight: "bold"
    }
})