// Two ways to implement redux
    // Using react-redux (old method, difficult one)
    // Using redux-toolkit (new method, easier) -> Recommended

// Basic Data Flow in Redux (react redux)
    // Store -> The place where all the state (redux state) is stored (saved)
    // - Action. any thing that a user does to change or view some data.
    // -> Action attributes. -> TYPE (Type of Action), PAYLOAD (The data required to view/update the state)
    // - Action Creators -> functions used to create actions and return them

    // Reducers -> PURE Functions that update a state based on some Actions.

    // Dispatch (dispatching some action(s))

    // State Update

    // Subscription -> Components that need the redux state, subscribe to it.

// ----------------------------------------------------------------------------

// Redux Toolkit Flow...
    
    // Create a Slice (reducer + Action)
    
    // Define Initial State
    
    // Define Reducer (Functions that are used to update the state based n an Action)
        // -> Action creator are automatically generated in this one.

    // Dispatch -> redux-toolkit provides us with a hook called useDispatch()
        // -> used to read the state without writing much boilerplate code
    
    // Async Thunk
        // -> Async way of updating state (API call)


    //Disadvantages
        // boilerplate code
        // learning curve
        // Overkill for small apps
        // performance impact
        // Async code complexity
        // debugging complexity

import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slice/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default store;