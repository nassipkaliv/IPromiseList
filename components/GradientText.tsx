import React from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientTextProps {
  colors: string[];
  children: React.ReactNode; 
  style?: object;
}

const GradientText = ({ colors, children, style }: GradientTextProps) => {
  return (
    <MaskedView
      maskElement={<Text>{children}</Text>} 
    >
    <LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      <Text style={style}>{children}</Text>
    </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
