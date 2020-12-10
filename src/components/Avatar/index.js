import React from 'react';
import { generateAvatarFromHash } from '../../utils/helpers';

import './Avatar.scss';

// Если аватар есть, то возвращаем его, если нет, то делаем "пустую" аватарку
const Avatar = user => {
    if (user.user.avatar) {
        return <img class="avatar" src={user.user.avatar} alt={`Avatar ${user.user.fullname}`}/>;
    } else {
        const {color, colorLight} = generateAvatarFromHash(user.user._id);
        const firstChar = user.user.fullname[0].toUpperCase();
    return <div style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLight} 96%)`}} className="avatar avatar--empty">{firstChar}</div>
    }
};

export default Avatar;
