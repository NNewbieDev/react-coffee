import { createContext, useState, useContext } from "react";

const StateProvider = createContext()

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [cart, setCart] = useState([])

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
        formatMoney
    }}>
        {children}
    </StateProvider.Provider>
}

export const useStateContext = () => useContext(StateProvider)