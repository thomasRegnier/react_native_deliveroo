import React, { Component } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './components/Home'
import detailScreen from './components/detailScreen'
import { Provider } from "react-redux";
import createStore from './redux'
const Stack = createSharedElementStackNavigator();
const { store } = createStore()
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home"
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <Stack.Screen
                            name="Home"
                            component={Home}
                        />

                        <Stack.Screen
                            name="detailScreen"
                            component={detailScreen}
                            sharedElementsConfig= {(route,showing) =>{
                                const { item } = route.params;
                                if (route.name === "detailScreen" && showing){
                                    return [
                                        {
                                            id: `item.${item.id}.photo`,
                                            resize: 'stretch',
                                        },
                                    ];
                                }
                                else{
                                    return [
                                        {
                                            id: `item.${item.id}.photo`,
                                            resize: 'stretch',
                                        },
                                    ];
                                }
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default App;
