// NEW: Save As handler
ipcMain.handle('new-note', async (event, text) => {
    const result = await dialog.showMessageBox({
        type: 'warning',
        buttons:['Discard Changes','Cancel'],
        defaultId: 1,
        title:'Unsave Change',
        message: 'You have unsave changes. Start a new note anyway?'
    });

    
    return {conformed: result.response == 0};
});