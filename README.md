## Express

express 用于替换原生的 http 功能

## 执行代码，热更新 

nodemon xxx.js  // nodemon router-demo.js

# 上传本地代码到github

image.png

git remote add origin git@github.com:jay267758/React.Environment.git

git add .

git commit -m '备注信息'

git branch -M master

git push -u origin master

# 克隆代码

git clone name

# 创建自己的分支

git checkout master

git pull

git checkout -b name // 分支名称

git push origin name:name // 将新建本地分支push到远程仓库

git branch --set-upstream-to=origin/name // 让本地分支和远程分支建立关联

git push origin --delete name 删除远程分支

# 更新分支

git checkout master

git pull

git checkout 自己分支

git merge master

有冲突解决冲突，再从新提交

无冲突，输入 :wq

git push origin 自己分支


