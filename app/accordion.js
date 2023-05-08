import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';

const AccordionImage = ({ imageSource, title }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const toggleAccordion = () => {
    if (isAccordionOpen) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsAccordionOpen(false));
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsAccordionOpen(true));
    }
  };

  return (
    <TouchableOpacity onPress={toggleAccordion}>
      <View>
        <Image source={imageSource} />
        <Text>{title}</Text>
      </View>
      {isAccordionOpen && (
        <Animated.View
          style={{
            height: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 200],
            }),
            overflow: 'hidden',
          }}>
          <Text>Additional Content Here</Text>
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

export default AccordionImage;
