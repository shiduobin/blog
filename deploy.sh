###
 # @Description: 运行脚本
 # @Author: shiduobin
 # @Date: 2021-01-29 11:31:15
 # @LastEditors: shiduobin
 # @LastEditTime: 2021-01-29 11:44:59
### 

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:shiduobin/blog.git master:gh-pages

cd -