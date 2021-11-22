export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finishing developing
    // token: 'BQDAX9TzExxxx8DUF6BViMaY07HilfKzydb1PWOhnrUNSPkXspXIQD1REvhSAinBsJDl5FuxfsAHBU47ZPNzJufN2x6qk09m-Z8AksjgHTtgU3fk-XguEgjGVQJkPtSbYJWCFZxXT9KCwJOA5Cu7KYCLoFan2K8UYzsd2rckjJmmoq6U',
};

const reducer = (state, action) =>{
    console.log(action);

    //Action -> type, [payload = user in this case]
    switch (action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            }

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            }
        
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    }
};

export default reducer;