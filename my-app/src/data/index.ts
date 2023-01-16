import { Role, Skill } from '@/interface';

export const skillMap: Record<string, Skill> = {
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

  export const myTeam1: Role[] = [
    {
      name: 'shixiang',
      talent: 11,
      hp: 150,
      mp: 0,
      attack: 100,
      defense: 30,
      reply: 100,
      roleType: 'hp',
      attribute: 'stone',
      skill: 'daliezhan',
      buff: [],
      debuff: [],
    },
    undefined,
    undefined,
    {
      name: 'kuangshan',
      talent: 11,
      hp: 250,
      mp: 0,
      attack: 150,
      defense: 50,
      reply: 150,
      roleType: 'hp',
      attribute: 'clipper',
      skill: 'kekedi',
      buff: [],
      debuff: [],
    },
    undefined
  ]
  export const myTeam2: Role[] = [
    {
      name: 'shixiang2',
      talent: 10,
      hp: 100,
      mp: 0,
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
      name: 'kuangshan2',
      talent: 10,
      hp: 150,
      mp: 0,
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
  