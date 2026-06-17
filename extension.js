const vscode = require('vscode');

function activate(context) {
    console.log("Toggle GitIgnore Explorer activated");

    const disposable = vscode.commands.registerCommand(
        'toggleGitIgnoreExplorer.toggle',
        async () => {
            console.log("Command executed");

            const config = vscode.workspace.getConfiguration('explorer');
            const current = config.get('excludeGitIgnore', false);

            await config.update(
                'excludeGitIgnore',
                !current,
                vscode.ConfigurationTarget.Global
            );

            vscode.window.showInformationMessage(
                `explorer.excludeGitIgnore = ${!current}`
            );
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
