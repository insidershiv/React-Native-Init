import React from 'react';
import {TextInput} from 'react-native-paper';
import {SvgProps} from 'react-native-svg';

import globalStyles from '../styles/global';

interface paperTextInputProps extends React.ComponentProps<typeof TextInput> {
  placeHolder: string;
  Icon: React.FC<SvgProps>;
}
const PaperTextInput = ({placeHolder, mode, Icon}: paperTextInputProps) => {
  return (
    <TextInput
      theme={{
        roundness: 10,
        underlineColor: 'gray',
      }}
      placeholder={placeHolder}
      mode={mode}
      outlineColor="#E4DFDF"
      style={globalStyles.input}
      left={<TextInput.Icon icon={() => <Icon height={20} width={20} />} />}
    />
  );
};
export default PaperTextInput;
