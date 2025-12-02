import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="avaliar"
        options={{
          title: 'Avaliar',
          tabBarIcon: ({ color }) => (
            <Octicons size={28} name="feed-star" color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="escolhaTipo"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="infoTipo"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="cuidadosTipo"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="quedaCapilar"
        options={{
          href: null,
          headerShown: false,
        }}
      />

    </Tabs>
  );
}
