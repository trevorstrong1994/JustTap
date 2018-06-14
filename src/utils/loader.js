import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Modal, ActivityIndicator } from 'react-native';
import { Icon, Content } from 'native-base';
import PropTypes from 'prop-types';

const Loader = (props) => {
    const {
        loading,
        ...attributes
    } = props;

    return(
        <Modal
            visible={loading}></Modal>
    )
}

const styles = StyleSheet.create({

});

export default Loader;