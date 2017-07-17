let compileHelper = {
    compile: compile
};
export default compileHelper;
function compile(html, model): string {
    if (String.isNullOrWhiteSpace(html)) { return ""; }
    if (!model) { return html; }
    let compiledHtml = html;
    for (let pro in model) {
        let key = "{{model." + pro + "}}";
        compiledHtml = compiledHtml.replace(key, model[pro])
    }
    return compiledHtml;
}