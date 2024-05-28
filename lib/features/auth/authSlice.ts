import { createAppSlice } from "@/lib/createAppSlice";

export interface AuthSliceState {
  value: boolean;
}

const initialState: AuthSliceState = {
  value: false,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const authSlice = createAppSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    login: create.reducer((state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    }),
    logout: create.reducer((state) => {
      state.value = false;
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectLoginState: (counter) => counter.value,
  },
});

// Action creators are generated for each case reducer function.
export const { login, logout } =
  authSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectLoginState } = authSlice.selectors;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
