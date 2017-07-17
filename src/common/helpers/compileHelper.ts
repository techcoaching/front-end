let compileHelper = {
    compile: compile
};
export default compileHelper;
function compile(html, model, prefix: string = ""): string {
    if (String.isNullOrWhiteSpace(html)) { return ""; }
    if (!model) { return html; }
    let compiledHtml = html;
    for (let pro in model) {
        if (typeof model[pro] == "function") { continue; }
        if (typeof model[pro] == "object" && model.hasOwnProperty(pro)) {
            compiledHtml = compile(compiledHtml, model[pro], prefix + pro + ".");
            continue;
        }
        let key = "{{model." + prefix + pro + "}}";
        compiledHtml = compiledHtml.replace(key, model[pro])
    }
    return compiledHtml;
}