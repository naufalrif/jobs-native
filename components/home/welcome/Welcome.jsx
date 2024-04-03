import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native'

import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobTypes = ['Fulltime', 'Parttime', 'Contractor']

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Fulltime') // untuk set highlighted button, default di 'full time'

  return (
    <View>
      <View>
        <Text style={styles.userName}>Welcome</Text>
        <Text style={styles.welcomeMessage}>Hello</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity> 
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {                // onclick ke tiap jenis job, cycle through the states, ganti highlighted jobs
                setActiveJobType(item);
                router.push('/search/${item}') // navigasi
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>

      
    </View>
  )
}

export default Welcome