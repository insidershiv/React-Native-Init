import React from 'react';
import {Text, useTheme} from 'react-native-paper';
import colors from '../constants/colors';
type textProps = {
  text: string;
  variant:
    | 'titleSmall'
    | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    | 'headlineLarge'
    | 'headlineMedium'
    | 'headlineSmall'
    | 'titleLarge'
    | 'titleMedium'
    | 'labelLarge'
    | 'labelMedium'
    | 'bodyLarge'
    | 'bodyMedium'
    | 'bodySmall'
    | 'labelSmall';
  color?: string;
  fontWeight?: 'normal' | 'bold' | undefined;
  [rest: string]: any;
};
const PaperText = ({
  text,
  variant,
  color = colors.black,
  fontWeight = 'normal',
  rest,
}: textProps) => {
  const theme = useTheme();
  return (
    <Text variant={variant} {...rest}>
      {text}
    </Text>
  );
};
export default PaperText;
