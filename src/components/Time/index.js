import React from 'react';
import PropTypes from 'prop-types'
import distanceInWordsToNow  from 'date-fns/distance_in_words_to_now';
import ruLocale from 'date-fns/locale/ru'

// время сообщения
const Time = ({date}) => distanceInWordsToNow(date, {addSuffix: true, locale: ruLocale}) 

Time.propTypes = {
    date: PropTypes.string
}

export default Time;
  