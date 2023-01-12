import { Role, Skill } from '@/interface'

/**
 * 1v1
 * role     角色信息
 * skillMap 技能列表
 */
export const hurtCompute = (role: Role, defRole: Role, skill: Skill) => {
  let hurtValue = 0
  // 技能特效
  const buff: any[] = []
  const debuff: any[] = []

  // 有技能，按照技能伤害
  if (role.mp >= 100) {
    const skillInfo: Skill = skill
    hurtValue = role.attack * skillInfo.percent - defRole.defense

    skillInfo.effects.forEach((effect) => {
      if (effect.type === 'debuff') {
        const odds = parseInt(String(Math.random() * 100))
        if (odds < effect.percent) {
          debuff.push({ name: effect.name, round: effect.round })
        }
      } else {
        buff.push({ name: effect.name, round: effect.round })
      }
    })
    role.mp = 0
  } else {
    // 无技能，普攻
    hurtValue = role.attack - defRole.defense
  }

  return {
    hurtValue: hurtValue > 0 ? hurtValue : 1,
    buff: Array.from(new Set([...defRole.buff, ...buff])),
    debuff: Array.from(new Set([...defRole.debuff, ...debuff])),
  }
}

export const sleep = (time: number) => {
  let now = Date.now()
  while (Date.now() - now < time) {}
}
