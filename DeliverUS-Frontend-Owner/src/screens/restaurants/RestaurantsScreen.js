import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import TextRegular from '../../components/TextRegular'
import { getAll } from '../../api/RestaurantEndpoints'
import * as GlobalStyles from '../../styles/GlobalStyles'
import TextSemiBold from '../../components/TextSemibold'
import { API_BASE_URL } from '@env'
import restaurantLogo from '../../../assets/restaurantLogo.jpeg'

export default function RestaurantsScreen ({ navigation }) {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    console.log('Loading restaurants, please wait 2 seconds')
    setTimeout(() => {
      setRestaurants(getAll) // getAll function has to be imported
      console.log('Restaurants loaded')
    }, 2000)
  }, [])
  // How to render each item?
  const renderRestaurant = ({ item }) => { // receives an item to be rendered
    return (
        <Pressable
          style={styles.row}
          onPress={() => {
            navigation.navigate('RestaurantDetailScreen', { id: item.id }) //  When pressed, navigate to RestaurantDetailScreen
          }}>
            <TextRegular>
                {item.name}
            </TextRegular>
        </Pressable>
    )
  }
  return (
        <FlatList
          style={styles.container}
          data={restaurants} // array of elements to be rendered
          renderItem={renderRestaurant} // function that receives each element
          keyExtractor={item => item.id.toString()} // function that extracts an unique key for each element
        />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  actionButton: {
    borderRadius: 8,
    height: 40,
    marginTop: 12,
    margin: '1%',
    padding: 10,
    alignSelf: 'center',
    flexDirection: 'column',
    width: '50%'
  },
  text: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    marginLeft: 5
  }
})
