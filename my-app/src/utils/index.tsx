import { Role, Skill } from '@/interface'

/**
 * 1v1
 * role     角色信息
 * skillMap 技能列表
 */
export const hurtCompute = (role: Role, defRole: Role, skill: Skill) => {
  const skillInfo: Skill = skill
  const hurtValue = role.attack * skillInfo.percent - defRole.defense
  // 技能特效
  const buff: any[] = []
  const debuff: any[] = []
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

  return {
    hurtValue: hurtValue > 0 ? hurtValue : 1,
    buff: Array.from(new Set([...defRole.buff, ...buff])),
    debuff: Array.from(new Set([...defRole.debuff, ...debuff])),
  }
}
