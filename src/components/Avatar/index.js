import React from 'react';
import { generateAvatarFromHash } from '../../utils/helpers';
import {md5} from 'blueimp-md5'

import './Avatar.scss';

// Если аватар есть, то возвращаем его, если нет, то делаем "пустую" аватарку
const Avatar = ({avatar, id, user}) => {
    if (avatar) {
        return <img class="avatar" src={user} alt={`Avatar ${user}`}/>;
    } else {
        var md5 = require('md5');
        const {color, colorLight} = generateAvatarFromHash(md5(id.toString()));
        const firstChar = user[0].toUpperCase();
    return <div style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLight} 96%)`}} className="avatar avatar--empty">{firstChar}</div>
    }
};

export default Avatar;
