import { create } from "zustand"
import { ICurRatesProps, IRate } from "../interfaces"

type State = {
  rates: Array<Omit<IRate, 'base_ccy'>>
}

type Action = {
  setRates: (rates: State['rates']) => void
  addRates: (updateData: ICurRatesProps) => void
}

export const useChangedRatesState = create<State & Action>((set) => ({
  rates: [],
  setRates: (rates) => set(() => ({ rates: rates })),
  addRates: (updateData) => set((state) => ({
    rates: [...state.rates].map(el => {
      if (el.ccy === updateData.ccy) {
        return {
          ...el,
          [updateData.operation]: updateData.rate
        }
      }
      return el;
    })
  }))
}))

