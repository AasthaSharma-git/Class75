import * as React from 'react';
import { Text, View, StyleSheet ,Image} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookTransaction from './screens/BookTransaction';
import SearchBook from './screens/SearchBook';
import Login from './screens/Login'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



const TabNavigator = createBottomTabNavigator(
  {
    Transaction: { screen: BookTransaction },
    SearchBook: { screen: SearchBook },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const routeName = navigation.state.routeName;
        if (routeName == 'Transaction') {
          return(
          <Image source={require('./assets/appIcon.png')}
           style={{width:30,height:30}}
          />
          );
        } else if (routeName == 'SearchBook') {
          return(
             <Image source={require('./assets/search.png')}
              style={{width:30,height:30}}
          />
          )
         
        }
      }
    })
  }
);
const SwitchNavigator=createSwitchNavigator({
  Login:{screen:Login},
  TabNavigator:{screen:TabNavigator}
})
var AppContainer = createAppContainer(SwitchNavigator);
