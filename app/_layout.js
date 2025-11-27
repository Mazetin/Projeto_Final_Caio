import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) =><FontAwesome name="user-secret" size={28} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="avaliar"
        options={{
          title: 'Avaliar',
          tabBarIcon: ({ color }) => <Octicons name="feed-star" size={28} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: 'Mais',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
