'use client'

// This provider is used to initialize the wallet when accessing the website.
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getWallet, initWallet } from '@/redux/slicers/walletSlice'
import { NetworkId } from '@near-wallet-selector/core'
import { useEffect } from 'react'

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const wallet = useAppSelector(getWallet)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!wallet) {
      dispatch(
        initWallet({
          contractId: process.env.NEXT_PUBLIC_CONTRACT_ID,
          network:
            (process.env.NEXT_PUBLIC_NETWORK_ID as NetworkId) ||
            'mainnet',
        })
      )
    }
  })
  return <>{children}</>
}