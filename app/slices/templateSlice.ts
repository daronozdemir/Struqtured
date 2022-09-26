import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState, AppThunk } from '../store';

// create state types and initial state
type InitialState = {
    name: string | null
}

const initialState: InitialState = {
    name: null
}

//build slice
export const ProfileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        }
    },

    extraReducers: {
        //SSR support
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', action.payload);

            if (!action.payload.profile.name) {
                return state;
            }

            state.name = action.payload.profile.name;
        }
    }
});



export const selectProfile = (state: RootState) => state.profile;

export const fetchProfile =
    (): AppThunk =>
        async (dispatch: any) => {
            const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

            await timeoutPromise(200);

            dispatch(
                setProfileData('name from thunk')
            );
        };


// destructure actions
export const { setProfileData } = ProfileSlice.actions;

export default ProfileSlice.reducer;