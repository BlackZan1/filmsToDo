import { useCallback, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/Theme.context";

export const useTheme = () => {
    let themeContext = useContext(ThemeContext);

    let [ themeData, setThemeData ] = useState({...themeContext});

    useEffect(() => {
        if(themeData.leftTheme && themeData.rightTheme) {
            localStorage.setItem('insomnia_theme', JSON.stringify(themeData));
        }
    }, [themeData, themeContext])

    const themes = {
        light: {
            bg: '#fff',
            window: 'darkorange'
        },
        leaf: {
            bg: 'lightgreen',
            window: 'limegreen'
        },
        marina: {
            bg: 'dodgerblue',
            window: 'orchid'
        },
        pikachu: {
            bg: 'khaki',
            window: 'chocolate'
        }
    };

    const values = Object.values({...themes});
    const keys = Object.keys({...themes});

    const changeTheme = useCallback((value, side) => {
        console.log(themeData)

        themeContext[side] = value;

        setThemeData({...themeContext});

    }, [themeContext, themeData])

    return {
        themeData,
        themes,
        changeTheme,
        values,
        keys
    }
}