import React from 'react';
import {Text} from 'react-native-paper';
import colors from '../constants/colors';
type textProps = {
  text: string;
  variant: string;
  color?: string;
  fontWeight?: string;
};
const PaperText = ({
  text,
  variant,
  color = colors.black,
  fontWeight = 'normal',
}: textProps) => {
  return (
    <Text variant={variant} style={{color: color, fontWeight: fontWeight}}>
      {text}
    </Text>
  );
};
export default PaperText;
