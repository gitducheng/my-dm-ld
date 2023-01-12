import React, { useEffect, useState } from 'react'
import { Avatar, Grid } from '@arco-design/web-react'
import { Role } from '@/interface'
import { hurtCompute, sleep } from '@/utils'
import { myTeam1, myTeam2, skillMap } from '@/data'

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

    startBattle(leftTeam, rightTeam, count)
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
      if (role.hp > 0) {
        defIndex = index
        return true
      }
      return false
    })

    if (defIndex === undefined) {
      setBattleResult(attacker)
      return
    }

    // 动画过程
    sleep(1000)

    // 1v1战斗结果
    ackTeam[ackIndex].mp = ackTeam[ackIndex].mp + 50
    const hurtResult = hurtCompute(ackRole, defRole, skillMap[ackRole.skill])
    if (defRole.hp - hurtResult.hurtValue <= 0) {
      defTeam.splice(defIndex, 1)
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
      {count}
      <Row>
        <Col span={12}>
          {leftTeam.map((role, index) => {
            return (
              <div key={index.toString()}>
                <Avatar>
                  <img
                    alt='avatar'
                    src={require(`@/assets/${role.name}.png`)}
                  />
                </Avatar>
                HP: {role.hp}
                MP: {role.mp}
              </div>
            )
          })}
        </Col>
        <Col span={12}>
          {rightTeam.map((role, index) => {
            return (
              <div key={index.toString()}>
                <Avatar>
                  <img
                    alt='avatar'
                    src={require(`@/assets/${role.name}.png`)}
                  />
                </Avatar>
                HP: {role.hp}
                MP: {role.mp}
              </div>
            )
          })}
        </Col>
      </Row>
    </div>
  )
}

export default Battle
