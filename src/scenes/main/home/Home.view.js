import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './Home.styles';
import withLoading from 'components/HOC/withLoading';
import ScrollViewPullRefresh from 'components/ScrollViewPullRefresh';

function HomeView() {
  return (
    <ScrollViewPullRefresh safeArea>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </ScrollViewPullRefresh>
  );
}

export default withLoading(HomeView);
