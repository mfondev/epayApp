import { StyleSheet, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { Button } from 'react-native'
const Home = () => {
    const router = useRouter()
  return (
    <View>
     return <Button title="Go to About" onPress={() => router.navigate('/home')} />;
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})