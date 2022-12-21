import React from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import {Button, Card, Chip, Text, Title} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Container from '../components/Container';
import CustomCard from '../components/CustomCard';
import BookmarkIcon from '../assets/icons/Bookmark.svg';
export const Explore = () => {
  const data = [
    {
      id: 1,
      title: 'Item #1',
    },
    {
      id: 2,
      title: 'Item #2',
    },
    {
      id: 3,
      title: 'Item #3',
    },
  ];
  const ListItem = () => {
    return (
      <Card style={{width: 200}}>
        <Card.Cover source={require('../assets/user.jpg')} />
        <Card.Content>
          <Text>thsss</Text>
        </Card.Content>
      </Card>
    );
  };
  return (
    <Container>
      <View style={styles.titleRow}>
        <Text variant="titleMedium">Upcoming Events</Text>
        <Button
          mode="text"
          icon="chevron-right"
          contentStyle={{flexDirection: 'row-reverse'}}>
          Seel All
        </Button>
      </View>
      <FlatList
        data={data}
        renderItem={CustomCard}
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View style={{margin: 5}} />}
      />
    </Container>
  );
};
export default Explore;

const styles = StyleSheet.create({
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
