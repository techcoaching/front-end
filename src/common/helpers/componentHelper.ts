
import {Const} from "../const";
let componentHelper={
    isValidAttribute: isValidAttribute
};
export default componentHelper;
function isValidAttribute(name){
    return name.startWith(Const.ComponentAttrPrefix);
}
