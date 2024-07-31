import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        minHeight: '100%',
    },
    bodyTop: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 50,
    },
    content: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
    },
    bodyBottom: {
        marginTop: 'auto',
        marginBottom: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    textTitle: {
        fontFamily: 'Sans-serif',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222831',
    },
    textGeneral: {
        fontFamily: 'Sans-serif',
        fontSize: 17,
        color: '#222831',
    },
    textInput: {
        color: '#222831',
        fontSize: 17,
        paddingHorizontal: 8,
        paddingVertical: 7,
        borderWidth: 1,
        borderColor: '#222831',
        fontFamily: 'Sans-serif',
    },
    inputContainer: {
        width: '90%',
        gap: 4,
        marginBottom: 12,
    },
    buttonSubmit: {
        width: '90%',
        textAlign: 'center',
        backgroundColor: '#3FA2F6',
        fontSize: 17,
        fontFamily: 'Sans-serif',
        padding: 10,
        color: 'white',
    },
    anchorLink: {
        textDecorationLine: 'underline',
        color: '#3FA2F6',
    }
});

export default GlobalStyles