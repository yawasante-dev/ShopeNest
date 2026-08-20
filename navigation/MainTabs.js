import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const icons = {
    Home: 'home',
    Cart: 'cart',
    Profile: 'person',
};

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#FF6B4A',
                tabBarInactiveTintColor: '#B5B5B5',
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                        name={focused ? icons[route.name] : `${icons[route.name]}-outline`}
                        size={size}
                        color={color}
                    />
                ),
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}