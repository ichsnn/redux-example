import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../hooks/counterSlice';
import CounterBtn from './CounterBtn'

const IncreaseBtn = () => {
  const dispatch = useDispatch();
  return (
    <CounterBtn label="+" handle={() => dispatch(increment())} />
  )
}

export default IncreaseBtn