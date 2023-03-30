import React from 'react'
import { Switch } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useStateContext } from '../../contexts/ContextProvider'

const Settings = () => {
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
            }
        }
    })

    const { setDarkMode } = useStateContext()

    return (
        <div className='w-full h-10 absolute bottom-0 bg-yellow-600 outline-orange-200 dark:bg-grey-900 outline outline-2 text-orange-200 flex items-center justify-around drop-shadow-2xl'>
            <div className="text-lg font-bold">
                Chế độ màn hình
            </div>
            <div className="drop-shadow-xl">
                <ThemeProvider theme={theme}>
                    <Switch onChange={() => setDarkMode(prev => !prev)} />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Settings