import { createContext, useState, useContext } from "react";
import { createTheme } from "@mui/material/styles";
const StateProvider = createContext()

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [temp, setTemp] = useState(1)
    const [sum, setSum] = useState(0)
    const [cart, setCart] = useState([])
    const [trial, setTrial] = useState([])

    const theme = createTheme({
        components: {
            MuiSwitch: {
                styleOverrides: {
                    switchBase: {
                        // Controls default (unchecked) color for the thumb
                        color: "#E3CAA5"
                    },
                    colorPrimary: {
                        "&.Mui-checked": {
                            // Controls checked color for the thumb
                            color: "#876445"
                        }
                    },
                    track: {
                        // Controls default (unchecked) color for the track
                        opacity: 0.2,
                        backgroundColor: "#E3CAA5",
                        ".Mui-checked.Mui-checked + &": {
                            // Controls checked color for the track
                            opacity: 0.7,
                            backgroundColor: "#876445"
                        }
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '&': {
                            caretColor: '#E3CAA5'
                        },
                        '& label': {
                            color: "#E3CAA5",
                        },
                        '& label.Mui-focused': {
                            color: "#E3CAA5",
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#E3CAA5',
                            },
                            '&:hover fieldset': {
                                borderColor: '#CA965C',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#E3CAA5',
                            },
                        },
                    }
                }
            }
        }
    })

    function formatMoney(value) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);
    }

    return <StateProvider.Provider value={{
        activeMenu, setActiveMenu,
        darkMode, setDarkMode,
        showCart, setShowCart,
        cart, setCart,
        trial, setTrial,
        temp, setTemp,
        sum, setSum,
        formatMoney, theme
    }}>
        {children}
    </StateProvider.Provider>
}

export const useStateContext = () => useContext(StateProvider)