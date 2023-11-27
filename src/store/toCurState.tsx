import { create } from 'zustand'
import { InitValue } from '../constants'
import { CurrenciesType } from '../interfaces'

type State = {
  inputTo: string
  selectTo: CurrenciesType
}

type Action = {
  updateInputTo: (inputTo: State['inputTo']) => void
  updateSelectTo: (selectTo: State['selectTo']) => void
}

// Create your store, which includes both state and (optionally) actions
export const useToCurStore = create<State & Action>((set) => ({
  inputTo: InitValue,
  selectTo: 'CHF',
  updateInputTo: (inputTo) => set(() => ({ inputTo: inputTo })),
  updateSelectTo: (selectTo) => set(() => ({ selectTo: selectTo })),
}))