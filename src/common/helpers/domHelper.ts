let domHelper = {
    append: append
};
export default domHelper;
function append(selector, content) {
    window.jquery(selector).append(content);
}