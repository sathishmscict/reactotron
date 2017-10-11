import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import Reactotron from 'reactotron-react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu!',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

export default class App extends Component<{}> {
  componentDidMount() {
    Reactotron.configure()
      .useReactNative()
      .connect()
    console.tron = Reactotron
    console.tron.clear()
  }

  press = () => console.tron.log('hello from the simulator')

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native.</Text>

        <Button onPress={this.press} title="Hey" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
