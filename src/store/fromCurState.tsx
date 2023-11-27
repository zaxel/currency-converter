import { create } from 'zustand'
import { InitValue } from '../constants'
import { CurrenciesType } from '../interfaces'

type State = {
  inputFrom: string
  selectFrom: CurrenciesType
}

type Action = {
  updateInputFrom: (inputFrom: State['inputFrom']) => void
  updateSelectFrom: (selectFrom: State['selectFrom']) => void
}

// Create your store, which includes both state and (optionally) actions
export const useFromCurStore = create<State & Action>((set) => ({
  inputFrom: InitValue,
  selectFrom: 'UAH',
  updateInputFrom: (inputFrom) => set(() => ({ inputFrom: inputFrom })),
  updateSelectFrom: (selectFrom) => set(() => ({ selectFrom: selectFrom })),
}))