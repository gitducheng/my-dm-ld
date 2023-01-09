import { User, Role, Skill } from './interface'

const role: Record<string, Role> = {
    shixiang: {
        name: 'shixiang',
        talent: 11,
        hp: 100,
        mp: 100,
        attack: 100,
        defense: 100,
        reply: 100,
        roleType: "hp",
        attribute: "stone",
        skill: "daliezhan",
        buff: [],
        debuff: []
    },
    kuangshan: {
        name: 'kuangshan',
        talent: 11,
        hp: 150,
        mp: 100,
        attack: 150,
        defense: 150,
        reply: 150,
        roleType: "hp",
        attribute: "clipper",
        skill: "kekedi",
        buff: [],
        debuff: []
    }
}

const skills: Record<string, Skill> = {
    daliezhan: {
        name: "中文名",
        type: "simple",
        percent: 0.67,
        effects: [{
            name: "weak",
            type: "debuff",
            percent: 33, // 33%
            round: 3
        }],
        
    },
    kekedi: {
        name: "中文名2",
        type: "whole",
        percent: 0.33,
        effects: [],
    }
}

const user: User = {
    username: 'duc',
    level: 1,
    gold: 9999,
    experience: 10,
    diamonds: 1000,
    roleList: [],
    teams: [ [role.shixiang, role.kuangshan] ],
}