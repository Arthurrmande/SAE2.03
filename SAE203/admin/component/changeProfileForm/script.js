let templateFile = await fetch('./component/changeProfileForm/template.html');
let template = await templateFile.text();


let changeProfileForm = {};

changeProfileForm.format = function(handlerchange, handlerProfil) {
    let html = template;
    html = html.replace('{{handlerchange}}', handlerchange);
    html = html.replace('{{handlerProfil}}', handlerProfil);
    return html;
}

export {changeProfileForm};