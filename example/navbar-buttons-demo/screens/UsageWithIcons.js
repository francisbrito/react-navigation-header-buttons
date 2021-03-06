//@flow
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from 'react-native';
import HeaderButtons from 'react-navigation-header-buttons';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type ScreenProps from './index';

@withNavigation
export class UsageWithIcons extends React.Component<ScreenProps> {
  static navigationOptions = {
    title: 'Usage With Icons',
    headerRight: (
      <HeaderButtons IconComponent={Ionicons} iconSize={23} color="blue">
        <HeaderButtons.Item title="search" iconName="ios-search" onPress={() => alert('search')} />
        <HeaderButtons.Item title="select" onPress={() => alert('select')} />
      </HeaderButtons>
    ),
  };

  render() {
    const text = `
    headerRight: (
      <HeaderButtons IconComponent={Ionicons} iconSize={23} color="blue">
        <HeaderButtons.Item title="search" iconName="ios-search" onPress={() => alert('search')} />
        <HeaderButtons.Item title="select" onPress={() => alert('select')} />
      </HeaderButtons>
    )
    `;
    return (
      <View>
        {/* <Icon.ToolbarAndroid
          style={{ height: 56, backgroundColor: 'grey' }}
          actions={[
            // { title: 'One', show: 'always' },
            { title: 'edit', show: 'always' },
            { title: 'add', show: 'always', iconName: 'ios-add' },
            // { title: 'Two', show: 'never',  },
          ]}
        /> */}
        <Text>{text}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('UsageWithOverflow')}
          title="Usage with overflow"
        />
      </View>
    );
  }
}
