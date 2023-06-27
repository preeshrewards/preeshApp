import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

AntDesign.loadFont();

const Search = ( {navigation} ) => {
    const [searchValue, setSearchValue] = useState(null);
return (
    <SafeAreaView>
        {/* Search */}
        <SearchBar
        placeholder="Search Here..."
        lightTheme
        round
        value={this.state.searchValue}
        onChangeText={(text) => this.searchFunction(text)}
        autoCorrect={false}
        />
            
    </SafeAreaView>
    );
};

const aboutStyles = StyleSheet.create({
    backArrow: {
        left: 29,
        top: 80,
        position: 'absolute',
        height: 24
    },
    select: {
        padding: 20,
        margin: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
        backgroundColor: '#f9f9f9',
        top: 80,
    },
    title: {
        fontWeight: 600,
        fontSize: 18,
        top: 80,
        position: 'absolute',
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        color: '#404040'
    }
});

export default Search;