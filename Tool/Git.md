​	

[TOC]



### 1、基本概述

![image-20220711183657320](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220711183657320.png)



### 2、基础概念

![image-20220711183828577](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220711183828577.png)

![image-20220711193317944](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220711193317944.png)



> **集中式版本控制**
>
> ![image-20220711193746637](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220711193746637.png)
>
> 
>
> **分布式版本控制**
>
> ![image-20220711194143278](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220711194143278.png)
>
> ![image-20220711194550333](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220711194550333.png)
>
> 

![image-20220711194656744](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220711194656744.png)

![image-20220712151630049](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712151630049.png)

![image-20220712151831412](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712151831412.png)



### 3、操作

##### （0）Linux和git都可以用的命令

**ll**：查看全部文件

**ll -a**：查看包括隐藏文件的所有文件

![image-20220712171330843](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712171330843.png)

**vim** hello.txt：编辑文件，如果不存在的话就生成新的文件

![image-20220712172112694](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712172112694.png)

**insert**：如果要输入的话记得点击一下，再点击一下就是替换

**yy**：记得按ESC返回初始的模式，然后在光标在的那一行按yy就是复制了

**p**：复制之后就可以按p进行粘贴了

![image-20220712172325198](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712172325198.png) 

**cat** hello.txt：查看指定文件的内容

**tail -n 1** hello.txt：查看指定文件最后一行的内容



![image-20220712172659946](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712172659946.png)











![image-20220712165611280](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712165611280.png)





##### （1）设置用户签名

![image-20220712170443464](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712170443464.png)



#### 本地库

##### （1）初始化本地库

下面那一行就是说 在你指定的目录下生成了一个.git的文件 并且初始化了一个git库到里面

![image-20220712171112894](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712171112894.png)



##### （2）查看本地库状态(多个状态)

one branch master：当前分支是在master这里

no commits yet：当前还没有提交过东西到**本地库**

nothing to commit(create copy files and use "git add" to track)：当前还没有需要提交的

![image-20220712171456688](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712171456688.png)



下面的红色文件表明你编辑好的文件只存在于工作区中，并不在暂存区里

![image-20220712173435934](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712173435934.png)



提交文件（绿色的）只是存在暂存区里面

![image-20220712173930201](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712173930201.png)



已经有东西提交到本地库了，并且working  tree是干净的，没有要提交的东西时

![image-20220712175106255](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712175106255.png)





##### （3）提交到本地库

提交到本地库之后就会形成自己的历史版本

![image-20220712174845022](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712174845022.png)





#### 暂存区

##### （1）提交到暂存区

warning是说帮你自动转换了换行符

![image-20220712173739366](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712173739366.png)

##### （2）从暂存区删除

**git rm --cached** hello.txt：删除**暂存区**里面指定的文件

![image-20220712174117897](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712174117897.png)



#### 版本

##### （1）查看日志信息

**git reflog**：查看引用日志信息

036122d：版本号

HEAD -> master：当前指针指向master分支

commit(initial): haha：第一次提交的版本信息

![image-20220712175347376](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712175347376.png) 

**git log**：查看引用日志的详细信息

黄色的是版本号的详细信息

Author：不用多讲，跟签名有关

Date：日期

最下面的就是你的备注信息

![image-20220712175614014](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712175614014.png) 



##### （2）版本穿梭

gti reset --hard "你要穿梭到的版本号"

![image-20220712181259182](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712181259182.png)



#### 分支

用户接触到的服务器是线上的服务器，生成开发测试的服务器是另一个的dev分支

![image-20220712192932627](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712192932627.png)

##### （1）什么是分支

![image-20220712193028168](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712193028168.png)

![image-20220712193257445](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712193257445.png)



##### （2）分支的操作

![image-20220712195501067](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712195501067.png)

![image-20220712193732409](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712193732409.png)

![image-20220712193723946](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712193723946.png)

**合并分支**

把指定的分支合并到当前的分支上

![image-20220712194728911](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220712194728911.png)

**冲突分支**

![image-20220713191730310](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220713191730310.png)

 此行的意思就是在不同分支下的文件在同一个地方存在不同的修改，如果合并的话肯定要取舍那一个分支的，于是出现了矛盾

![image-20220713192030975](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220713192030975.png)

> 出现问题的地方
>
> <<<<< HEAD
>
> 你当前文件的代码
>
> ======
>
> 要合并的代码
>
> 》》》



![image-20220713192349559](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220713192349559.png) 

*那么问题来了，这个时候应该如何处理呢？*

很简单 从上面的<<...==...》》手动删除不要的代码行，留下需要的代码行
注意：你手动修改后之后修改当前分支的代码，不会修改另一个分支下的代码。







#### 团队协作

##### （1）团队内协作

![image-20220713195415362](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220713195415362.png)



![image-20220715150637092](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715150637092.png)

下面的红线表示 推送和拉取都可以用这个别名

![image-20220715151203285](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715151203285.png)



**本地库代码推送到远程库**

git push 别名/地址 分支

![image-20220715151751267](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715151751267.png)

![image-20220715152754378](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715152754378.png) 拉取代码



**克隆**

即拉取别人远程库的代码

烫知识：clone别人远程库是不需要登录账号的，因为别人当初**开的是公共库**，那么就不需要你**登录账号来确认是否拥有权限**

![image-20220715153141418](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715153141418.png)



**推送本地库代码到别人的远程库**

![image-20220715162403712](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715162403712.png) 





##### （2）跨团队协作

![image-20220715163936775](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715163936775.png)

![image-20220715164937993](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715164937993.png)





#### SSH免密登录

这个玩意的就相当于你使用SSH的地址替代了http的地址，除了push-pull到远程库换了个地址，不知道有啥用

![image-20220715165143227](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715165143227.png)



**先删除.ssh目录**

![image-20220715165215754](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715165215754.png)



**生成.ssh秘钥目录**

前面的照抄，只需要后面的邮箱根据需求输入
输入之后，连敲三次回车

![image-20220715165235418](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715165235418.png)



获取公钥的方法
先去到.ssh目录(C盘的Lzo里面的.ssh目录)
在里面右键git bash here
然后再cat id_rsa.pub
下面一大串就是那啥公钥了，可以复制一波等会要用

![image-20220715170210987](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715170210987.png) 







之后点击头像，点击settings
再安装下面图片找到New SSH key

![image-20220715165721974](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715165721974.png)



起个名字，之后把公钥给输入到Key里面

![image-20220715165852744](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715165852744.png)





### 4、IDEA集成git

##### （1）忽略文件

这玩意就是你用IDEA推送代码的时候，不是推送所有的代码，而是忽略一些.xml啊.idea这种文件

![image-20220715171007524](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715171007524.png) 如右图

![image-20220715170948060](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715170948060.png)



我个人的理解就是你先在C盘Lzo目录下创建一个git.ignore，然后又notepad编辑，将你不需要上传的格式的后缀以".后缀"的形式放进去，参考下面的模板，然后在gitconfig文件里面引用这个.ignore文件

![image-20220715171034134](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715171034134.png)

```sql
\# Compiled class file
*.class

\# Log file
*.log

\# BlueJ files
*.ctxt

\# Mobile Tools for Java (J2ME)
.mtj.tmp/# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

hs_err_pid*

.classpath
.project
.settings
target
.idea
*.iml
```

引用配置文件，这个.gitconfig在Lzo的目录下

![image-20220715171404122](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715171404122.png)



##### （2）定位git程序

![image-20220715172231298](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715172231298.png)



##### （3）create-add-commit

在上面的工具栏里面的VCS里面直接create git repository，利用IDEA直接就可以创建本地库了

![image-20220715180220344](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715180220344.png) 然后你会发现你没有提交暂存区的就是红色的，

![image-20220715180342069](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715180342069.png) 右键git-add之后变成绿色了

![image-20220715181710114](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715181710114.png) commit之后就变为白色了





##### （4）版本

![image-20220715181845099](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715181845099.png) 当你commit之后又修改了代码就会出现蓝色

![image-20220715182150404](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715182150404.png) 点击这个**蓝色双箭头**就可以比较修改的地方



###### 查看版本

左下角有一个Git，点击出现的Log就是对应出现的版本

![image-20220715182410060](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715182410060.png)

并且在点击对应的版本，右下角就是版本信息

![image-20220715182733431](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715182733431.png)



###### 切换版本

右键版本，点击checkout revision

![image-20220715182552535](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715182552535.png)







##### （5）分支

###### 切换分支

![image-20220715182911822](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715182911822.png)点击git的Branches 

![image-20220715183004922](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715183004922.png) 或者点击右下角的master



![image-20220715183239509](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715183239509.png) 点击分支名，然后checkout就行了



###### 合并分支

**正常合并**

![image-20220715183940287](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715183940287.png) 切换到master分支，将指定分支merge到当前就行



**冲突合并**

出现下面这种情况就代表出现了代码合并冲突，此时你应该点击merge来手动合并

![image-20220715184622927](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715184622927.png)

下面就是IDEA牛逼的地方了，左边和右边是冲突的代码，中间是没有冲突的代码，此时就需要你手动来选择留下哪些代码，删除哪些代码了，有个**快捷键**，就是那个"X 》"  X代表删除那边的有冲突的，》代表把冲突的代码移动到中间来，其实也没啥用，真正生成环境下应该是需要细细考量留下哪些代码的吧

![image-20220715184847046](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715184847046.png)

好看捏

![image-20220715185202761](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715185202761.png)







### 5、IDEA集成Github、Gitee

##### （1）登录账号

先登录github账号，可以利用账号或者密码/token去登录

![image-20220715190200651](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715190200651.png)



##### （2）shared

找到shared on Github，之后的repository name是默认的，remote是起别名，shared by自己选一个

![image-20220715190543656](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715190543656.png)



##### （3）push推送到远程库

你点击了push之后会出现这个界面，我的理解是你输入不同的地址，push到不同的远程库

你可以修改地址，如下，点击蓝色部分，起别名，输入http/SSH地址	

![image-20220715191135657](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715191135657.png)

设置了之后就会如下

![image-20220715191415218](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715191415218.png)

###### push rejected的原因

push之前先pull一下，**虽然**别人都这么说，我还是建议看一下本地代码是否超前于远程的，如果超前再pull吧，不然出现了远程覆盖了本地的一些就有点麻烦了

![image-20220715192132550](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715192132550.png)





##### （4）pull拉取远程库代码

pull很简单，但是你要记得设置对的地址和分支

下面就是示例：

我在Github上修改了一行代码，然后我pull到本地库，第二张图就是pull之后的结果

![image-20220715192839528](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715192839528.png) 

![image-20220715192803995](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715192803995.png) 

###### pull会出现的问题

![image-20220715192432826](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715192432826.png)





##### （5）clone代码到本地

点击Get from Version Control

![image-20220715193120046](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715193120046.png)

然后输入对应的URL，给个Directory就可以把代码done到本地了

![image-20220715193207993](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715193207993.png)





#### （1）Gitee(码云)

参考Github，只是地址需要换一下





### 6、码云导入项目到Github

一切为了**（滑稽

在新建仓库下面有一个“导入已有仓库”

![image-20220715195025669](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715195025669.png)

选择https(只能选择这个)

![image-20220715195214326](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715195214326.png)

转会儿圈就给你建好了

![image-20220715195230407](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715195230407.png)

然后你也可以手动更新Github上的代码最新版本

点一下那个圈圈就更新了

![image-20220715195353235](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220715195353235.png)







