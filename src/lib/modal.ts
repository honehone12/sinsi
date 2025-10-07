export const AGE_MODAL_ID = 'sinsi_age_modal_dialog';

export function getModal(modalId: string) {
    const elem = window.document.getElementById(modalId);
    if (elem instanceof HTMLDialogElement) {
        return elem;
    } else {
        console.error('modal not found');
        return null;
    }
}

export function openAgeModal() {
    getModal(AGE_MODAL_ID)?.showModal();
}
