import React, { useEffect, useRef} from 'react';

import {connect} from 'react-redux'
import {messagesActions} from './../redux/actions'
import {Messages as BaseMessages} from './../components';

const Dialogs = ({currentDialogId, fetchMessages, items}) => {

    const messagesRef = useRef(null);

    useEffect(() => {
        if(currentDialogId) {
            fetchMessages(currentDialogId)
        }
    }, [currentDialogId])

    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999)
    }, [items])

    return <BaseMessages
        blockRef={messagesRef}
        items={items}
    />
}

export default connect(({dialogs, messages}) => ({
        currentDialogId: dialogs.currentDialogId,
        items: messages.items}), 
        messagesActions)(Dialogs);