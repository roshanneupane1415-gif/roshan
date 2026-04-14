// NEW: New Note button
const newNoteBtn = document.getElementById('new-note');
newNoteBtn.addEventListener(' click', async () => {
// If no unsaved changes, clear immediately
if (textarea.value === lastSavedText) {
textarea.value = '';
lastSavedText = '';
statusEl.textContent = 'New note started.';
return;
}
// If there are unsaved changes, ask the user first
const result = await window.electronAPI.newNote();
if (result.confirmed) {
textarea.value = '';
lastSavedText = '';
statusEl.textContent = 'New note started.';
}
else {
statusEl.textContent = 'New note cancelled.';
}

});