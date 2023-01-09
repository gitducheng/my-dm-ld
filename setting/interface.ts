export interface User {
    username: string, // 名字
    level: number, // 等级
    gold: number, // 金币
    experience: number, // 当前经验值
    diamonds: number, // 钻石
    roleList: string[], // 宠物列表
    teams: (Role[])[], // 队伍
}

export interface Role {
    name: string, // 名称
    talent: number, // 资质：12、11、10、9
    hp: number, // 血量
    mp: number, // 能量值
    attack: number, // 攻击力
    defense: number, // 防御力
    reply: number, // 回复力
    roleType: string, // 类型：体力（hp）、攻击（attack）、防御（defense）、回复（reply）
    attribute: string, // 属性：石头、剪刀、布
    skill: string, // 技能
    buff: string[], // 自身buff
    debuff: string[], // 自身debuff
}

export interface Skill {
    name: string, // 技能中文名
    type: string, // 类型：单体、全体...
    percent: number, // 攻击力百分比
    effects: { // 技能特效
        name: string, // 特效名称："weak" | "burn" ...
        type: string, // 类型：buff、debuff
        percent: number, // 特效概率，例：33%
        round: number, // 持续回合
    }[],
}
