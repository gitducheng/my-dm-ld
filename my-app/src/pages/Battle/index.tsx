import React, { useEffect, useState } from 'react'
import { Avatar, Grid } from '@arco-design/web-react'
import { Role } from '@/interface'
import { hurtCompute, roleAnimation, sleep } from '@/utils'
import { myTeam1, myTeam2, skillMap } from '@/data'

import './index.less'

const Row = Grid.Row
const Col = Grid.Col

const Battle: React.FC = () => {
  const [battleResult, setBattleResult] = useState('')
  const [leftTeam, setLeftTeam] = useState([...myTeam1])
  const [rightTeam, setRightTeam] = useState([...myTeam2])
  const [round, setRound] = useState(1)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (battleResult === 'left') {
      console.log('进攻方胜利')
      return
    } else if (battleResult === 'left') {
      console.log('防守方胜利')
      return
    }
    if (round === 1) {
      setTimeout(() => startBattle(leftTeam, rightTeam, count), 500)
    } else {
      startBattle(leftTeam, rightTeam, count)
    }
  }, [count, round, battleResult])

  const startBattle = (left: Role[], right: Role[], count: number) => {
    if (count < 6) {
      attackRole(left, right, count, 'left')
    } else {
      attackRole(right, left, count - 6, 'right')
    }
    // next round
    if (count === 11) {
      setCount(0)
      setRound((r) => r + 1)
    } else {
      setCount((r) => r + 1)
    }
  }

  const attackRole = (
    ackTeam: Role[],
    defTeam: Role[],
    ackIndex: number,
    attacker: string
  ) => {
    const ackRole = ackTeam[ackIndex]
    if (ackRole === undefined) {
      return
    }
    let defIndex: number
    const defRole = defTeam?.find((role, index) => {
      if (role?.hp > 0) {
        defIndex = index
        return true
      }
      return false
    })

    if (defIndex === undefined) {
      setBattleResult(attacker)
      return
    }

    // 动画过程 todo
    roleAnimation('roleList', `ack${ackIndex}`, `def${defIndex}`)
    sleep(2000)

    // 1v1战斗结果
    ackTeam[ackIndex].mp = ackTeam[ackIndex].mp + 50
    const hurtResult = hurtCompute(ackRole, defRole, skillMap[ackRole.skill])
    if (defRole.hp - hurtResult.hurtValue <= 0) {
      defTeam.splice(defIndex, 1, undefined)
    } else {
      defTeam[defIndex] = {
        ...defRole,
        hp: defRole.hp - hurtResult.hurtValue,
        buff: hurtResult.buff,
        debuff: hurtResult.debuff,
      }
    }

    setLeftTeam(attacker === 'left' ? [...ackTeam] : [...defTeam])
    setRightTeam(attacker === 'left' ? [...defTeam] : [...ackTeam])
  }

  return (
    <div>
      <Row id='roleList'>
        <Col span={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {leftTeam?.[0] ? (
            <div className='role'>
              <Avatar className='ack1'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${leftTeam[0].name}.png`)}
                />
              </Avatar>
              HP: {leftTeam[0].hp}
              MP: {leftTeam[0].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {leftTeam?.[1] ? (
            <div className='role'>
              <Avatar className='ack1'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${leftTeam[1].name}.png`)}
                />
              </Avatar>
              HP: {leftTeam[1].hp}
              MP: {leftTeam[1].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {leftTeam?.[2] ? (
            <div className='role'>
              <Avatar className='ack1'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${leftTeam[2].name}.png`)}
                />
              </Avatar>
              HP: {leftTeam[2].hp}
              MP: {leftTeam[2].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {leftTeam?.[3] ? (
            <div className='role'>
              <Avatar className='ack1'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${leftTeam[3].name}.png`)}
                />
              </Avatar>
              HP: {leftTeam[3].hp}
              MP: {leftTeam[3].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {leftTeam?.[4] ? (
            <div className='role'>
              <Avatar className='ack1'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${leftTeam[4].name}.png`)}
                />
              </Avatar>
              HP: {leftTeam[4].hp}
              MP: {leftTeam[4].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {leftTeam?.[5] ? (
            <div className='role'>
              <Avatar className='ack1'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${leftTeam[5].name}.png`)}
                />
              </Avatar>
              HP: {leftTeam[5].hp}
              MP: {leftTeam[5].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
        </Col>
        <Col span={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {rightTeam?.[0] ? (
            <div className='role'>
              <Avatar className='def0'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${rightTeam[0].name}.png`)}
                />
              </Avatar>
              HP: {rightTeam[0].hp}
              MP: {rightTeam[0].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {rightTeam?.[1] ? (
            <div className='role'>
              <Avatar className='def1'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${rightTeam[1].name}.png`)}
                />
              </Avatar>
              HP: {rightTeam[1].hp}
              MP: {rightTeam[1].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {rightTeam?.[2] ? (
            <div className='role'>
              <Avatar className='def2'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${rightTeam[2].name}.png`)}
                />
              </Avatar>
              HP: {rightTeam[2].hp}
              MP: {rightTeam[2].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {rightTeam?.[3] ? (
            <div className='role'>
              <Avatar className='def3'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${rightTeam[3].name}.png`)}
                />
              </Avatar>
              HP: {rightTeam[3].hp}
              MP: {rightTeam[3].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {rightTeam?.[4] ? (
            <div className='role'>
              <Avatar className='def4'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${rightTeam[4].name}.png`)}
                />
              </Avatar>
              HP: {rightTeam[4].hp}
              MP: {rightTeam[4].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
          {rightTeam?.[5] ? (
            <div className='role'>
              <Avatar className='def5'>
                <img
                  alt='avatar'
                  src={require(`@/assets/${rightTeam[5].name}.png`)}
                />
              </Avatar>
              HP: {rightTeam[5].hp}
              MP: {rightTeam[5].mp}
            </div>
          ) : (
            <div className='role' style={{ backgroundColor: '#ccc' }}></div>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default Battle
