/**
 * simple     单体
 * whole      全体
 * frontRow   前排
 * backRow    后排
 * ahead      前方一条直线
 * randomTwo  随机2位
 */
type skillType  = "simple" | "whole" | "frontRow" | "backRow"  | "ahead" |"randomTwo"

/**
 * weak        虚弱：输出降低30%
 * burn        灼烧：每回合减少当前33%HP
 * poisoning   中毒：每回合减少当前50%HP
 * reply       回复：回复HP
 * seal        封印技能：不能释放
 * damnation   诅咒：减少防御30%
 */
type effectType  = "weak" | "burn" | "poisoning" | "reply"  | "seal" |"damnation"

/**
 * stone      石头
 * clipper    剪刀
 * cloth      布
 */
type attributeType = "stone" | "clipper" | "cloth"


const roleTypeMap = {
    hp: "体力",
    attack: "攻击"
}