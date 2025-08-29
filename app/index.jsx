import { StyleSheet, View } from 'react-native'
import { useRouter } from 'expo-router'
import { Button } from 'react-native'
const Home = () => {
    const router = useRouter()
  return (
    <View>
     <Button title="Go to About" onPress={() => router.navigate('/home')} />;
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})