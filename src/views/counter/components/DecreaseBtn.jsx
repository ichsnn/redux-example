import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../hooks/counterSlice';
import CounterBtn from './CounterBtn'

const DecreaseBtn = () => {
  const dispatch = useDispatch();
  return (
    <CounterBtn label="-" handle={() => dispatch(decrement())} />
  )
}

export default DecreaseBtn