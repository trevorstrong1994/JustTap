import React, { Component } from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";

const SettingsDrawer = DrawerNavigator(
    TagsScreen: { screen: TagsScreen }
),

contentComponent: props => <SideBar {...props} />

export default SettingsDrawer;
