import React, {ReactElement, ReactNode} from 'react';
import {Chip} from 'react-native-paper';
import {SvgProps} from 'react-native-svg';
interface PaperChipInterface {
  title: string;
  onPress?: (event: MouseEvent) => ReactNode;
  Icon?: React.FC<SvgProps>;
}
const PaperChips = ({Icon, title, onPress}: PaperChipInterface) => {
  <Chip icon={Icon}>{title} </Chip>;
};
export default PaperChips;
