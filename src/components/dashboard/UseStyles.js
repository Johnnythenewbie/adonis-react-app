import { red } from '@material-ui/core/colors';

const useStyles = (theme) => ({
    textfield: {
        width: "85%"
    },
    square: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        width:80, 
        height: 80
    },
    heading: {
        display: "inline"
    },
    marginTop: {
        marginTop: "30px"
    },
    button: {
        width: "400px",
        textAlign: "left",
        backgroundColor: red[500],
        color: "#FFFFFF"
    },
    centre: {
        left: "50%",
        marginRight: "- 50%"
    },
    circleStyle: {
        textAlign: "center",
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: "red",
        borderRadius: "50%",
        width: 30,
        height: 30,
    }, 
    inlineDisplay : {
        display: "inline-block"
    }
});

export default useStyles;