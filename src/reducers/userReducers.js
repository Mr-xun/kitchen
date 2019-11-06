export default function(state = {}, action) {
    let { type, payload } = action;
    switch (type) {
        case "USER_INFO":
            return payload;
        default:
            return state;
    }
}
