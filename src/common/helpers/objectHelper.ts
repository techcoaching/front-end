let objectHelper = {
    apply: apply
};
export default objectHelper;
function apply(obj, destObj) {
    if (!obj) { return destObj; }
    for (let p in obj) {
        destObj[p] = obj[p];
    }
    return destObj;
}