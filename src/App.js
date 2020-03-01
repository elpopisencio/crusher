import React, { useState, useEffect, useRef, useCallback } from 'react';
import Tab from './components/Tab'
import { TRASH, BINS, EASY } from './constants'

const COLUMNS = 5

const TYPES = ['red', 'green', 'yellow']

const getTrash = (level) => {
  const levelTrash = TRASH.filter((item) => level.find(type => type === item.type))
  return { ...levelTrash[Math.floor(Math.random() * levelTrash.length)], key: Math.random() + '' }
}
const setTab = (animated) => ({ animated: animated, ...getTrash(EASY) })
const LITTER = new Array(COLUMNS)
  .fill()
  .map(() => new Array(Math.floor(Math.random() * 4) + 3).fill().map(() => setTab()))
const getBins = () => BINS.filter((item) => EASY.find(type => type === item.type))

function App() {
  const [litter, setLitter] = useState(LITTER)
  const [coors, setCoors] = useState([])
  const [score, setScore] = useState(0)
  const [intervalId, setIntervalId] = useState()
  const litterRef = useRef(litter);
  litterRef.current = litter;
  const intervalIdRef = useRef(intervalId);
  intervalIdRef.current = intervalId;
  const scoreRef = useRef(score);
  scoreRef.current = score;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const orderedColumns = litterRef.current.map((column, index) => ({ lenght: column.length, column: index })).sort((a, b) => Math.random() - .5).sort((a, b) => a.lenght - b.lenght)
      addGarbage(orderedColumns, litterRef.current, setLitter, finishGame, scoreRef.current);
    }, 2000)
    setIntervalId(intervalId)
  }, [])
  const finishGame = () => {
    clearInterval(intervalIdRef.current)
    setTimeout(() => alert('perdiste'), 350)

  }
  const recicle = (type) => {
    if (coors.length < 2 || litter[coors[0].column][coors[0].row].type !== type) {
      return undefined
    }
    const newLitter = litter.map((column, columnIndex) => {
      const newColumn = column.filter((element, rowIndex) => !coors.find(({ column, row }) => {
        return (column === columnIndex && row === rowIndex)
      }))
      return newColumn || []
    })
    setScore(score + Math.pow(coors.length - 1, 2) * 10)
    setCoors([])
    setLitter(newLitter)
  }
  const handleSelect = (coor) => {
    if (coors.length > 0 && !coors.find(({ column, row }) => {
      if (column < coor.column - 1 || column > coor.column + 1) {
        return undefined
      }
      if (row < coor.row - 1 || row > coor.row + 1) {
        return undefined
      }
      if (row !== coor.row && column !== coor.column) {
        return undefined
      }
      return true
    })) {
      return undefined
    }
    const lastCoor = coors[coors.length - 1]
    if (coors.length > 0 && lastCoor.column === coor.column && lastCoor.row === coor.row) {
      return setCoors(coors.slice(0, coors.length - 1))
    }
    if (coors.find(({ column, row }) => coor.column === column && coor.row === row)) {
      return undefined
    }
    if (!coors[0] || litter[coor.column][coor.row].type === litter[coors[0].column][coors[0].row].type) {
      setCoors([...coors, coor])
    }
  }
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div style={{ position: 'absolute', display: 'flex', width: '100%', justifyContent: 'center' }}>
        <div style={{ width: '30%' }}><p>{score}</p></div>
        {getBins().map(({ type, color }) => <div key={type} onClick={() => recicle(type)} style={{ width: '20vw', height: '20vw', }}>
          <img src={color} style={{ width: '70%', height: '70%' }} />
          <p>{type}</p>
        </div>)}
      </div>
      <div style={{ display: 'flex', }}>
        {litter.map((column, columnIndex) => <div key={`column-${columnIndex}`} style={{ borderTop: '1px solid red', width: '20vw', height: '120vw', display: 'flex', flexDirection: 'column-reverse', marginBottom: 0, marginTop: 'auto' }}>
          {column.map((props, rowIndex) => {
            return <div key={props.key} style={{ opacity: coors.find(coor => columnIndex === coor.column && rowIndex === coor.row) ? .5 : 1 }}
              onClick={() => { handleSelect({ column: columnIndex, row: rowIndex }) }}>
              {<Tab {...props} />}
            </div>
          })}
        </div>)}
      </div>
    </div>
  );
}

export default App;

const addGarbage = (orderedColumns, litter, setLitter, setGameOver, score) => {
  const newLitter = [...litter];
  console.log(score)
  let amount = Math.floor(score / 1000) + 1
  orderedColumns.map(({ length, column }) => {
    if (amount > 0) {
      const newColumn = [...litter[column], setTab(true)]
      newLitter[column] = newColumn;
      amount--
    }
    return undefined
  })
  console.log(newLitter)
  if (newLitter.find(column => column.length > 6)) {
    setGameOver(true)
  }
  setLitter(newLitter)
}