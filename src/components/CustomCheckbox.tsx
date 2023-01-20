import {View, TouchableOpacity, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';

interface Props {
  label: string;
  status: 'checked' | 'unchecked' | 'indeterminate';
  onPress: () => void;
}

function CustomCheckBox({label, status, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox status={status} focusable />
        <Text style={{fontWeight: 'bold'}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CustomCheckBox;
