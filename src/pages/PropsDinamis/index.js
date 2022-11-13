import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 70}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
          marginBottom: 10,
        }}>
        Materi Component Dinamis dengan Props
      </Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Youtube Channel"
            gambar="https://burst.shopifycdn.com/photos/relaxing-in-nature.jpg"
          />
          <Story
            judul="Kelas Online"
            gambar="https://burst.shopifycdn.com/photos/nature-photographers-shooting.jpg"
          />
          <Story
            judul="Food"
            gambar="https://burst.shopifycdn.com/photos/antique-camera-view-finder-in-nature.jpg"
          />
          <Story
            judul="Kelas Online"
            gambar="https://burst.shopifycdn.com/photos/nature-photographers-shooting.jpg"
          />
          <Story
            judul="Food"
            gambar="https://burst.shopifycdn.com/photos/antique-camera-view-finder-in-nature.jpg"
          />
          <Story
            judul="Animal"
            gambar="https://burst.shopifycdn.com/photos/woman-and-boy-muscle.jpg"
          />
          <Story
            judul="Beverage"
            gambar="https://burst.shopifycdn.com/photos/sad-dog.jpg"
          />
          <Story
            judul="Plant"
            gambar="https://burst.shopifycdn.com/photos/photo-of-silver-and-blue-fish-in-a-pile.jpg"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
