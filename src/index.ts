import React from 'react'

export default function useLongTimeNoMove(flag = 30000, target = document) {
  const [temp, setTemp] = React.useState<number>(0)
  const [isLongTimeNoMove, setLongTimeNoMove] = React.useState<boolean>(false)
  const handleMouseMove = () => {
    setTemp(0)
    setLongTimeNoMove(false)
  }
  React.useEffect(() => {
    target.addEventListener('mousemove', handleMouseMove)
    let timer = setInterval(() => {
      setTemp(prev => prev + 1000)
    }, 1000)
    return () => {
      target.removeEventListener('mousemove', handleMouseMove)
      clearInterval(timer)
    }
  }, [])

  React.useEffect(() => {
    if (temp >= flag) {
      setLongTimeNoMove(true)
    }
  }, [temp, flag])

  return isLongTimeNoMove
}
