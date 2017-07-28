import { RenderMode } from "../enum";
let domHelper = {
    append: append,
    render: render
};
export default domHelper;

function render(selector, content, mode: RenderMode) {
    switch (mode) {

        case RenderMode.Replace:
            replace(selector, content);
            break;
        case RenderMode.Append:
        default:
            append(selector, content);
            break;
    }
}
function replace(selector, content) {
    window.jquery(selector).html(content);
}

function append(selector, content) {
    window.jquery(selector).append(content);
}