import { useEffect, createContext, useContext, useState } from 'react'

const AppContext = createContext({})

export function useAppContext() {
	return useContext(AppContext)
}

export function AppContextProvider({ children }) {
	return <AppContext.Provider>{children}</AppContext.Provider>
}
