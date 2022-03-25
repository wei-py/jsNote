> https://github.com/Wscats/CV/issues/31

### tag

* **添加 tag** → git tag v1.0 commitID
* **删除 tag** → git tag -d v1.0
* **推送 tag** → git push origin v1.0
### 分支
* **删除分支** → git brach -d (dev)
* **强制删除分支** → git branch -D test
* **创建并跳转** → git checkout -b test
* **合并分支** → git merge dev
* **忽略冲突** → git merge --absort
### 查看
* **简洁查看 log** → git log --oneline
* **查看版本路线** → git log --oneline --graph
* **查看分支** → git brach -av
* **删除分支** → git push origin --delete dev
### 不同人修改不同文件 处理
* **查看冲突** → git branch -av
* **解决冲突** → git merge origin/test
### 不同人修改同个文件
* **添加信息** → git config --add --local user.name "wei-py" \
git config --add --local user.email "1937506227@qq.com"
* **查看信息** → git config --local --list
* **创建分支并与远端关联** → git checkout -b test remotes/origin/test


### 合并远程master和develop分支
* 前提条件是本地代码已经全部提交到远程develop分支；
* 首先在本地的develop分支pull远程develop代码；
* 切换到master分支，从远程pull代码，将develop分支合并到本地master分支（此时本地master分支是与远程同步的），有冲突解决，没有则罢。
* 最后push到远程master仓库
