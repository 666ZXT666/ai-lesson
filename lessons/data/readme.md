# talk in data  传统方式和prompt方式比较

nba 赛季统计投篮数据，设计一个shot表，设计哪些字段

## 数据化
paly_id player_name shot_made(投中) shot_type game_id 
team_id team_name session_id 
action_type 

## 赛季投篮

一切皆可数据化，细致的去数学表达主题
赛季，球队，队员，得分（分数，方式，动作，原因，结果，区域（距离，坐标），position（位置，投篮位置，left））

## AI 如何帮助我们设计数据表
    -数据助理
    -吴恩达的prompt engineering 善于像AI提问
     -给定一个角色 role
     -指定明确的任务
     -约束必须做什么，不做什么
     -一步步做，细化任务
    -任务过程其实也是coding过程
    -prompt 提示词（提问）

    -我想要设计一张关于nba投篮的数据表，麻烦帮我设计一下字段，字段尽可能详细
    -假设你是一位数据工程师     给它一个角色
    -请你帮我设计一张nba赛季投篮的数据表 shots 指定任务：
     数据表需要满足mysql的约束
     请包含：赛季，球队，球员，得分得分与否，投篮动作，得分原因，投篮位置，球员位置，比赛时间，距离结束时间，其他字段不需要给出。
     请返回sql，并给出原因



