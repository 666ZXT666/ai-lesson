- git 有哪些命令？
  版本控制软件 多人协作，几个亿的项目 
  写项目？ 电脑坏了 保存代码的版本且安全
  git 帮我们在本地 管理代码的版本， 远程仓库（分布式）
  - 为什么要学git？
  - git init 初始化
  把代码提交到暂存区
  - git add 
  - git commit -m ""
  - git push origin main
  - git pull
  - git branch 查看分支/创建分支
  - git checkout 切换分支
  - git merge 合并分支

##大厂需要的git 能力
  - git是必备技能
  - 高级技巧，考点
  - git 文档内置
  - git help 常用的git 命令
  - git help -a 列出所有命令
    vi 编辑器
    git help add 查看add命令的作用和参数

    你是如何了解git命令的作用和参数的 ？
  

## 代码仓库
   文件夹 -> 开发目录（网站） -> 代码仓库
   - 好处
     项目代码的版本 git关注的是代码的版本

   - git仓库里存的是什么？
     文件的版本
     拿着相机一直拍
     .git 目录 就是 仓库  git相关的内容放在里面
    - git config 配置 操作留下了责任人，多人协作的思想
      老板就知道谁写的代码
      git config --global user.name " "
      git config --global user.email " "
      配置， --global 全局的

  -  git status
     当前仓库的状态 
     on branch main 在哪个分支上 默认分支
     
     untracked file 未跟踪状态 还没有纳入版本控制

  添加到仓库是一件比较严谨的事情
    - git add file 
      将文件当前版本 先添加到暂存区 
      git status

 - 为什么需要暂存区，仓库两个概念
   - 后悔药
   - 分几次add ，最后一次性commit
     进货 ， 辆买菜车 （git add 多次） 买完了 （git commit 一次）买好了