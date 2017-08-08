let pageHelper = {
    render: render
};
export default pageHelper;
function render(renderTo, ctor) {
    var instance = new ctor(renderTo);
    instance.render();
}

