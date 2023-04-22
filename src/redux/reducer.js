const initialState={
    isLoading:null,
    error:false,
    placedata:[]
}
const reducer = (state=initialState,action)=>{
 switch(action.type){
case 'SET_DATA':
{    console.log(action.payload)

      return {...state, placedata:[action.payload] ,error:false ,}
}
case 'SET_LOADING':
    return {...state,isLoading:action.payload} ;
    case 'SET_ERROR':
        return {isLoading:false,error:true,placedata:[]}

default: return state ;
 }

}

export default reducer ;