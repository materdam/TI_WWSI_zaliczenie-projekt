export default function(state={},action){
    switch(action.type){
        case 'GET_COMICS':
            return { ...state,list:action.payload }
        case 'ADD_COMIC':
            return { ...state,newcomic:action.payload }
        default:
            return state;
        
    }
}