import { StyleSheet, View, Button } from 'react-native'
import { useRouter } from 'expo-router'

const Home = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
     <Button title="Go to About" onPress={() => router.navigate('/home')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 40,
    },
})