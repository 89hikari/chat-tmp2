import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

import './Status.scss';

//онлайн или нет
const Status = ({online}) => {
        return (
            <div className={classNames("status", {"status--online": online})}>{online ? 'online' : 'offline'}</div>
        );
};

Status.propTypes = {
    online: PropTypes.bool
}

export default Status;
