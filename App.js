import { creatStackNavigator, createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'

const navigator = creatStackNavigator ({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})