import React from 'react'
import { render } from 'react-dom'
import { Basic } from './Basic'
import { CustomArrow } from './CustomArrow'
import { CustomDot } from './CustomDot'

import './index.css'

const $root = document.getElementById('app')

const NextArrow = (props) => <CustomArrow type='next' {...props} />
const PrevArrow = (props) => <CustomArrow type='prev' {...props} />

render(
  <div>
    <Basic title='Basic' itemsCount={5} />
    <Basic title='Custom count' itemsCount={8} showItemsCount={5} />
    <Basic title='Custom transition duration' transitionDuration={2} itemsCount={5} />
    <Basic title='Infinite' itemsCount={5} infinite />
    <Basic title='Infinite 1000 items' itemsCount={1000} infinite />
    <Basic
      title='Custom Arrows'
      itemsCount={5}
      nextArrow={NextArrow}
      prevArrow={PrevArrow}
      ArrowWrapperClassName='rcc-CustomArrowWrapper'
    />
    <Basic title='Dots' itemsCount={10} showDots />
    <Basic title='Dots infinite' itemsCount={10} showDots infinite />
    <Basic
      title='Custom Dots'
      itemsCount={10}
      showDots
      dot={CustomDot}
      dotWrapperClassName='rcc-CustomDotWrapper'
    />
  </div>,
  $root
)
