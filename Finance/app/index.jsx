import { View, Text, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center bg-green-900 p-4`}>
        <FontAwesome name="bars" size={24} color="white" />
        <Text style={tw`text-white text-lg font-bold ml-2`}>HOME</Text>
      </View>
      
      {/* Cash Balance */}
      <View style={tw`p-4 bg-white`}>
        <Text style={tw`text-gray-500 text-sm`}>Cash</Text>
        <View style={tw`flex-row justify-between items-center bg-gray-300 p-3 rounded-md mt-1`}>
          <Text style={tw`text-lg font-bold`}>P 1,000.00</Text>
          <Pressable>
            <FontAwesome name="pencil" size={18} color="black" />
          </Pressable>
        </View>
      </View>
      
      {/* Sections */}
      <Section title="EXPENSE STRUCTURE/GRAPH" />
      <Section title="PLANNED PAYMENTS" />
      <Section title="RECORDS/HISTORY" />

      {/* Floating Add Button */}
      <Pressable 
        style={tw`absolute bottom-5 right-5 bg-yellow-500 p-4 rounded-full`} 
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="plus" size={24} color="black" />
      </Pressable>

      {/* Modal */}
      <Modal 
        transparent 
        visible={modalVisible} 
        animationType="fade"
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={tw`flex-1 bg-white/50 justify-end`}>
            <View style={tw`absolute bottom-20 right-5 bg-white p-4 rounded-lg shadow-lg items-center`}>
              <Pressable 
                style={tw`bg-green-500 px-6 py-3 rounded-md mb-2`} 
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('KeypadScreen', { type: 'Income' });
                }}
              >
                <Text style={tw`text-white font-bold`}>Income</Text>
              </Pressable>
              <Pressable 
                style={tw`bg-red-500 px-6 py-3 rounded-md`} 
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('KeypadScreen', { type: 'Expenses' });
                }}
              >
                <Text style={tw`text-white font-bold`}>Expenses</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const Section = ({ title }) => (
  <View style={tw`bg-red-600 m-2 p-4 rounded-md`}>
    <Text style={tw`text-white text-lg font-bold`}>{title}</Text>
    <Pressable style={tw`mt-2 p-2 bg-red-800 items-center rounded-md`}>
      <Text style={tw`text-white text-sm`}>SHOW MORE</Text>
    </Pressable>
  </View>
);

export default HomeScreen;
