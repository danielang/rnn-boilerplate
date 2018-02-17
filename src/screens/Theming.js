import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Row from '../components/Row';

class Actions extends React.Component {

    constructor(props) {
        super(props);

    }

    setTabBarBlue = () => {
        const { navigator } = this.props;

        navigator.setStyle({
            tabBarHidden: false, // make the tab bar hidden
            tabBarButtonColor: '#ffffff', // change the color of the tab icons and text (also unselected)
            tabBarSelectedButtonColor: '#f00', // change the color of the selected tab icon and text (only selected)
            tabBarBackgroundColor: '#00418b', // change the background color of the tab bar
            tabBarTranslucent: false, // change the translucent of the tab bar to false
            tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family
            tabBarLabelColor: '#ffffff', // iOS only. change the color of tab text
            tabBarSelectedLabelColor: '#f00', // iOS only. change the color of the selected tab text
        });
    };

    setTabBarRed = () => {
        const { navigator } = this.props;

        navigator.setStyle({
            tabBarHidden: false, // make the tab bar hidden
            tabBarButtonColor: '#ffffff', // change the color of the tab icons and text (also unselected)
            tabBarSelectedButtonColor: '#00418b', // change the color of the selected tab icon and text (only selected)
            tabBarBackgroundColor: '#f00', // change the background color of the tab bar
            tabBarTranslucent: false, // change the translucent of the tab bar to false
            tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family
            tabBarLabelColor: '#ffffff', // iOS only. change the color of tab text
            tabBarSelectedLabelColor: '#00418b', // iOS only. change the color of the selected tab text
        });
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Row title={'Set Tabbar Blue'} onPress={this.setTabBarBlue}/>
                <Row title={'Set Tabbar Red'} onPress={this.setTabBarRed}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {}
});

export default Actions;
