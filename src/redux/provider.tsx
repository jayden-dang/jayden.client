'use client'

import { Provider } from 'react-redux'
import store from './store'

// This file is used for creating a provider wrapping our app when using app router in nextjs 
export function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider store={store}>{children}</Provider>
}
