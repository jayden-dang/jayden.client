import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Network, NetworkId } from '@near-wallet-selector/core'
import { RootState } from '../store'
import { Wallet } from '@/utils/nearWallet'

// This slice is used to initialize the wallet when accessing the app for the first time, before any interaction with the wallet

type WalletState = {
  wallet: Wallet | null
  isLoading: boolean
}

const initialState: WalletState = {
  wallet: null,
  isLoading: true,
}

export const initWallet = createAsyncThunk(
  'wallet/init',
  async ({
    contractId,
    network,
  }: {
    contractId: string | undefined
    network: Network | NetworkId
  }) => {
    const wallet = new Wallet({
      createAccessKeyFor: contractId,
      network,
    })

    await wallet.startUp().catch((error: any) => {
      console.error('Wallet start up failed', error)
    })

    return wallet
  }
)

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    logout: (state) => {
      state.wallet = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initWallet.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(initWallet.fulfilled, (state, action) => {
      if (!state.wallet) state.wallet = action.payload

      state.isLoading = false
    })
    builder.addCase(initWallet.rejected, (state) => {
      state.wallet = null
    })
  },
})

export const { logout } = walletSlice.actions
export default walletSlice.reducer

export const getWallet = (state: RootState): Wallet | null =>
  state.wallet.wallet
export const getAccountId = (state: RootState): string | undefined =>
  state.wallet.wallet?.accountId
export const walletIsSignedIn = (state: RootState): boolean =>
  !!state.wallet.wallet?.accountId
export const walletIsLoading = (state: RootState): boolean =>
  state.wallet.isLoading
