import { View, Text, Pressable, SafeAreaView, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import HomeScreen from '.';

const { height } = Dimensions.get('window');

const KeypadScreen = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [category, setCategory] = useState(null); // Store selected category

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.selectedCategory) {
      setCategory(route.params.selectedCategory);
    }
  }, [route.params?.selectedCategory]);

  const isOperator = (char) => ['+', '-', '*', '/'].includes(char);

  const handlePress = (value) => {
    if (value === 'back') {
      const newExpression = expression.slice(0, -1);
      setExpression(newExpression);
      if (newExpression === '') setResult('');
    } else if (value === '=') {
      try {
        if (expression && !isOperator(expression.slice(-1))) {
          setResult(eval(expression).toString());
        }
      } catch {
        setResult('Error');
      }
    } else {
      if (isOperator(value) && (expression === '' || isOperator(expression.slice(-1)))) {
        return;
      }
      setExpression(expression + value);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={[tw`flex-row justify-between items-center bg-red-500 p-4`, { height: height * 0.08 }]}>
        <Pressable onPress={() => navigation.navigate('index')}>
          <FontAwesome name="times" size={RFPercentage(3)} color="black" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('index')}>
          <FontAwesome name="check" size={RFPercentage(3)} color="black" />
        </Pressable>
      </View>

      {/* Display */}
      <View style={[tw`p-8 bg-white border-b border-gray-300`, { height: height * 0.2 }]}>
        <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', textAlign: 'right' }}>
          {expression || '0'}
        </Text>
        {result !== '' && (
          <Text style={{ fontSize: RFPercentage(3), fontWeight: 'bold', textAlign: 'right', color: 'gray' }}>
            {result}
          </Text>
        )}
      </View>

      {/* Category Section */}
      <Pressable onPress={() => navigation.navigate('CategoryScreen')}>
        <View style={[tw`bg-red-500 p-6 items-center justify-center`, { height: height * 0.1 }]}>
          {category ? (
            <>
              <Text style={{ color: 'white', fontSize: RFPercentage(1.8), opacity: 0.5 }}>
                CATEGORY
              </Text>
              <Text style={{ color: 'white', fontSize: RFPercentage(2.8), fontWeight: 'bold' }}>
                {category}
              </Text>
            </>
          ) : (
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: RFPercentage(2.5) }}>
              CATEGORY
            </Text>
          )}
        </View>
      </Pressable>

      {/* Keypad */}
      <View style={tw`flex-row w-full flex-1`}>
        {/* Numbers and Backspace */}
        <View style={tw`w-3/4 flex`}>
          {[['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['0', '.', 'back']].map((row, rowIndex) => (
            <View key={rowIndex} style={tw`flex-row flex-1`}>
              {row.map((key) => (
                <Pressable
                  key={key}
                  style={[
                    tw`items-center justify-center border`,
                    { flex: 1, backgroundColor: key === 'back' ? 'rgb(127, 29, 29)' : 'rgb(185, 28, 28)' }
                  ]}
                  onPress={() => handlePress(key)}
                >
                  {key === 'back' ? (
                    <FontAwesome name="arrow-left" size={RFPercentage(3)} color="black" />
                  ) : (
                    <Text style={{ color: 'white', fontSize: RFPercentage(3), fontWeight: 'bold' }}>{key}</Text>
                  )}
                </Pressable>
              ))}
            </View>
          ))}
        </View>

        {/* Operators */}
        <View style={tw`w-1/4 flex`}>
          {['/', '*', '-', '+', '='].map((op) => (
            <Pressable
              key={op}
              style={[tw`items-center justify-center border bg-gray-300 flex-1`]}
              onPress={() => handlePress(op)}
            >
              <Text style={{ color: 'black', fontSize: RFPercentage(3), fontWeight: 'bold' }}>{op}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KeypadScreen;
