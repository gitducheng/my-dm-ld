import React, { useEffect, useState } from 'react'
import { Avatar, Grid } from '@arco-design/web-react'
import { Role, Skill } from '@/interface'
import { hurtCompute } from '@/utils'

const myTeam: Role[] = [
  {
    name: 'shixiang',
    talent: 11,
    hp: 100,
    mp: 100,
    attack: 100,
    defense: 30,
    reply: 100,
    roleType: 'hp',
    attribute: 'stone',
    skill: 'daliezhan',
    buff: [],
    debuff: [],
  },
  {
    name: 'kuangshan',
    talent: 11,
    hp: 150,
    mp: 100,
    attack: 150,
    defense: 50,
    reply: 150,
    roleType: 'hp',
    attribute: 'clipper',
    skill: 'kekedi',
    buff: [],
    debuff: [],
  },
]
const skillMap: Record<string, Skill> = {
  daliezhan: {
    name: '中文名',
    type: 'simple',
    percent: 0.67,
    effects: [
      {
        name: 'weak',
        type: 'debuff',
        percent: 66, // 66%
        round: 3,
      },
    ],
  },
  kekedi: {
    name: '中文名2',
    type: 'whole',
    percent: 0.33,
    effects: [],
  },
}

const Row = Grid.Row
const Col = Grid.Col

const Battle: React.FC = () => {
  const [battleResult, setBattleResult] = useState('')
  const [leftTeam, setLeftTeam] = useState(myTeam)
  const [rightTeam, setRightTeam] = useState(myTeam)

  useEffect(() => {
    startBattle(leftTeam, rightTeam)
  }, [])

  const startBattle = (left: Role[], right: Role[]) => {
    attackRole(left, right, 0, 0)
  }

  const attackRole = (
    ackTeam: Role[],
    defTeam: Role[],
    ackIndex: number,
    defIndex: number
  ) => {
    const ackRole = ackTeam[ackIndex]
    const defRole = defTeam[defIndex]

    const hurtResult = hurtCompute(ackRole, defRole, skillMap[ackRole.skill])
    ackTeam[ackIndex].mp = 50
    defTeam[defIndex] = {
      ...defRole,
      hp: defRole.hp - hurtResult.hurtValue,
      buff: hurtResult.buff,
      debuff: hurtResult.debuff,
    }

    setLeftTeam([...leftTeam])
    setRightTeam([...defTeam])
    console.log(hurtResult)
  }

  return (
    <div>
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
