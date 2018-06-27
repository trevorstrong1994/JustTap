import React, {Component} from 'react';
import TagsScreen from './tags';
import { StackNavigator } from 'react-navigation';

export default (DrawNav = StackNavigator({
    TagsScreen: {screen: TagsScreen},
}));