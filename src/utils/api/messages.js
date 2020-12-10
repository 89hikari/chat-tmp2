import {axios} from '../../core';

export default {
    getAllByDialogId: id => axios.get(`messages/messages/?contact_id=${id}` + id),
    send: (text, dialogId, attachments) =>
    axios.post("/messages", {
      text: text,
      dialog_id: dialogId,
      attachments
    })
}