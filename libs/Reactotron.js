import Reactotron, {
  trackGlobalErrors,
  networking,
} from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeModules } from 'react-native'

let reactotron

// eslint-disable-next-line no-undef
if (__DEV__) {
  reactotron = Reactotron.configure({
    host: NativeModules.SourceCode.scriptURL.split(`://`)[1].split(`:`)[0],
    name: 'test-shop-car',
  })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(trackGlobalErrors())
    .use(
      networking({
        ignoreUrls: /\/(logs|symbolicate)$/,
      }),
    )

  console.tron = Reactotron

  reactotron.connect()

  Reactotron.clear()
}

export default reactotron
