import { Role, Skill } from './interface'

/**
 * role     角色信息
 * skillMap 技能列表
 */
const hurtCompute = (role: Role, defenseRole: Role, skillMap) => {
    const skillInfo: Skill = skillMap[role.skill]
    const hurtValue = role.attack * skillInfo.percent - defenseRole.defense
    // 技能特效
    const buff: any[] = []
    const debuff: any[] = []
    skillInfo.effects.forEach(effect => {
        if (effect.type === "debuff") {
            const odds = parseInt(String(Math.random()*100))
            if (odds < effect.percent) {
                debuff.push({name: effect.name,round: effect.round})
            }
        } else {
            buff.push({name: effect.name,round: effect.round})
        }
    })

    return {
        hurtValue: hurtValue > 0 ? hurtValue : 1,
        buff: buff,
        debuff: debuff
    }
}