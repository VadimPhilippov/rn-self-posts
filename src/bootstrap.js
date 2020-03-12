import * as Font from 'expo-font'
import { DB } from './db'

export async function bootstrap() {
	try {
		await Font.loadAsync({
			'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
			'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
			pudelina: require('../assets/fonts/Pudelina.ttf'),
			drina: require('../assets/fonts/Drina.otf')
		})
        await DB.init()
        console.log('Database started...')
	} catch (e) {
        console.log('Error:', e)
    }
}
