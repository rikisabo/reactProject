// import Store from "..Store"
const validatorMidlleware = Store => next => action => {
    console.log(action.payload.Name);
    if (!action.payload.Name)
        console.log('error- you didnt insert name');
    else {
        next(action);
    }
}
export default validatorMidlleware;