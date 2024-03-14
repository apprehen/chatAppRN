import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  BackHandler,
} from 'react-native'
import WebView from 'react-native-webview'
const Live2d = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        // source={{ uri: 'file:///android_asset/index.html' }}
        source={{uri: 'https://infinite.red'}}
      />
    </SafeAreaView>
  )
}

export default Live2d
