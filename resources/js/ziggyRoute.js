import route from 'ziggy';
import {Ziggy} from "./ziggy";

const ziggyRoute = (name, params, absolute = true) => {
    return route(name, params, absolute, Ziggy);
}

export default ziggyRoute;
