import { act, fireEvent, render } from '@testing-library/react'
import React from 'react'
import useLongTimeNoMove from '../src'

function sleep(period) {
  return new Promise(resolve => setTimeout(resolve, period))
}

function DetectMouseMove(props) {
  const isNoLongTimeMove = useLongTimeNoMove(props.flag)
  return (
    <div>
      <div>isNoLongTimeMove: {isNoLongTimeMove ? 'yes' : 'no'}</div>
    </div>
  )
}

test('It should return no if the time interval for mouse movement < flag', async () => {
  const { container } = render(<DetectMouseMove flag={2000} />)
  await act(async () => {
    await sleep(1000)
  })

  fireEvent.mouseMove(document, {
    clientX: 110,
    clientY: 120
  })

  expect(container.firstChild.textContent).toMatchInlineSnapshot(
    `"isNoLongTimeMove: no"`
  )

  await act(async () => {
    await sleep(2000)
  })

  expect(container.firstChild.textContent).toMatchInlineSnapshot(
    `"isNoLongTimeMove: yes"`
  )
})

test('It should return yes if no mousemove and time interval > flag', async () => {
  let container
  act(() => {
    container = render(<DetectMouseMove flag={2000} />).container
  })
  expect(container.firstChild.textContent).toMatchInlineSnapshot(
    `"isNoLongTimeMove: no"`
  )
  await act(async () => {
    await sleep(3000) // wait *just* a little longer than the timeout in the component
  })
  expect(container.firstChild.textContent).toMatchInlineSnapshot(
    `"isNoLongTimeMove: yes"`
  )
})
