const initialState={
    placedata:[]
}
const reducer = (state=initialState,action)=>{
 switch(action.type){
case 'SET_DATA':
{  state.placedata=action.payload;
 console.log(state);
}

default: return state ;
 }

}

export default reducer ;