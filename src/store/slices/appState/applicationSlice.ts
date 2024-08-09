import { createSlice } from '@reduxjs/toolkit'

export interface ApplicationState {
  loaded: boolean
}

export const initialState: ApplicationState = {
  loaded: false
}

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setAppLoaded: (state) => {
      state.loaded = true
    }
  }
})

export const { setAppLoaded } = applicationSlice.actions

export default applicationSlice.reducer
