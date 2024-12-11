export const loggerEnhancer = ({getState}) => next => action =>  {
   console.log(`type: ${ action.type }, payload: ${ action.payload }`);
   console.log(getState());
    return next(action);
}