import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resolve } from "path";

export interface IUser { id: string; email: string; token: string; }
export interface AuthState {
    user: IUser | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null
}

export const login = createAsyncThunk('auth/login', async (credentials: { email: string; password: string }, thunkAPI) => {
    try {

        const { email } = credentials
        const response = await new Promise<{ data: IUser }>((resolve, reject) => {
            setTimeout(() => {
                const ran = Math.floor(Math.random() * 10)
                console.log(ran);
                if (ran > 1) {
                    resolve({
                        data: {
                            id: '123',
                            email,
                            token: '123456987'
                        }
                    })

                } else {
                    reject(new Error('Login failed!'));
                }
            }, 500)
        })
        return response.data

    } catch (error) {
        if (error instanceof Error)
            return thunkAPI.rejectWithValue(error.message)
        else return thunkAPI.rejectWithValue('Login Somthing Worng ')

    }


})
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    await new Promise<void>((resolve, reject) => {
        setTimeout(() => resolve(), 500)
    })
    return 'Logout Successful'

})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        }



    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
                const { email, id, token } = action.payload
                state.loading = false
                state.error = null
                state.user = { email, id, token }
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Error Ocured"
                state.user = null
            })
            .addCase(logout.fulfilled, (state, action) => {

                state.user = null
            });
    }
})

export const { clearUser, setUser } = authSlice.actions
export default authSlice.reducer

