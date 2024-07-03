import { StyleSheet } from 'react-native';
import { Foundation, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Text, View } from '@/components/Themed';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';



export default function NavigationBar() {
    return (
        <View style={designer.container}>

            <View style={designer.navbar}>

                <View style={designer.logo}>

                    <TouchableOpacity>

                        <Foundation name="list" size={28} color="white" />

                    </TouchableOpacity>

                    <TouchableOpacity style={designer.titleWrapper}>

                        <Text style={designer.title}>IVF SOLUTION</Text>

                    </TouchableOpacity>

                </View>


                <View style={designer.iconWrapper}>

                    <FontAwesome name="bell" size={28} color="#ffac32" onPress={() => {
                        Alert.alert('No Notification');
                    }} />

                    <MaterialIcons name="account-circle" size={28} color="white" />

                </View>

            </View>

        </View>
    )
}

const designer = StyleSheet.create({
    container: {
        maxHeight: "35%",
        backgroundColor: 'lightgrey'
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: "5%",
        paddingVertical: 10,
        backgroundColor: '#1d95d2'
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '50%',
        backgroundColor: '#1d95d2'
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        backgroundColor: '#1d95d2'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    iconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
        backgroundColor: '#1d95d2',
        height: 28
    },

});
