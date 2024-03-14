/**
 * @format
 */

import {AppRegistry, Platform, UIManager} from 'react-native'
import App from './App'
import {name as appName} from './app.json'

// console.log('explosion')
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    console.log('enable...')
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
}
AppRegistry.registerComponent(appName, () => App)
