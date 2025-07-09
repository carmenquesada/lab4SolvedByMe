/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, Pressable } from 'react-native'
import TextRegular from '../../components/TextRegular'
import { API_BASE_URL } from '@env'

export default function RestaurantDetailScreen ({ route }) {
  const [restaurant, setRestaurant] = useState({})
  useEffect(() => {
    console.log('Loading restaurant details, please wait 1 second')
    setTimeout(() => {
      setRestaurant(getDetail(route.params.id)) // le pasa el id recibido desde restaurantsScreen
      console.log('Restaurant details loaded')
    }, 1000)
  }, [])
  const renderProduct = ({ item }) => {
    return ( // Devuelve el nombre del producto y, de moemnto, no hace nada al presionar
      <Pressable
        style={styles.row}
        onPress={() => { }}>
          <TextRegular>
              {item.name}
          </TextRegular>
      </Pressable>
    )
  }
  return (
        <View style={styles.container}>
            <TextRegular style={styles.textTitle}>{restaurant.name}</TextRegular>
            <TextRegular style={styles.text}>{restaurant.description}</TextRegular>
            <TextRegular style={styles.text}>shippingCosts: {restaurant.shippingCosts}</TextRegular>
            <FlatList
              style={styles.container}
              data={restaurant.products} // qué datos mostrar 
              renderItem={renderProduct} // función para mostrar cada producto
              keyExtractor={item => item.id.toString()}
            />
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
