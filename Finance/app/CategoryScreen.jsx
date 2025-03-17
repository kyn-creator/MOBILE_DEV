import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

const CategoryScreen = () => {
  const navigation = useNavigation();

  const handleSelectCategory = (category) => {
    navigation.navigate('Keypad', { selectedCategory: category });
  };

  return (
    <View style={tw`flex-1 bg-white`}>

      <View style={tw`flex-row items-center bg-green-900 p-4`}>
        <Pressable onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={18} color="white" />
        </Pressable>
        <Text style={tw`text-white text-lg font-bold ml-2`}>Category</Text>
      </View>

      <View style={tw`flex-row bg-gray-300 p-2`}>
        <Text style={tw`text-gray`}>SELECT A CATEGORY</Text>
      </View>

      {[
        'Food & Drinks', 'Transportation', 'Shopping', 'Housing', 
        'Life and Entertainment', 'Vehicle', 'Communication & PC', 'Financial Expenses'
      ].map((category) => (
        <Pressable key={category} style={tw`border-t p-5`} onPress={() => handleSelectCategory(category)}>
          <Text style={tw`text-black font-bold`}>{category}</Text>
        </Pressable>
      ))}

    </View>
  );
};

export default CategoryScreen;
