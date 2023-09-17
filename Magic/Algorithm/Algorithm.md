[TOC]



> - 创建算法D

<img src="Algorithm.assets/image-20230718154326389.png" alt="image-20230718154326389" style="zoom:67%;" /> 

![image-20230811220413491](Algorithm.assets/image-20230811220413491.png) 



> - 图表

![image-20230719153610501](Algorithm.assets/image-20230719153610501.png) 



> - 度
>   - 理解模型逻辑，明确模型应用场景，了解模型优缺点
>   - 对可能的各类问题和对应的主要解决方法做一个总结，做到在看见赛题时大致知道这是哪类问题，该用什么方法。除了常用方法，还应该积累一些不太常见，看着“高深”的方法。





 

# ----评价类模型----

# 一、层次分析法

## 1、入个门先

<img src="Algorithm.assets/image-20230719185131125.png" alt="image-20230719185131125" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230719205023019.png" alt="image-20230719205023019" style="zoom:80%;" /> 

> - 步骤

> - 第一步，`一定要画图`

<img src="Algorithm.assets/image-20230719204833970.png" alt="image-20230719204833970" style="zoom:67%;" /> 



> - 第二步，自己填就好了，有理可据就行

<img src="Algorithm.assets/image-20230720020415357.png" alt="image-20230720020415357" style="zoom:67%;" /> 





> - 第三步，一致性检验
>   - 三种都得用

<img src="Algorithm.assets/image-20230720020528755.png" alt="image-20230720020528755" style="zoom: 67%;" /> 

<img src="Algorithm.assets/image-20230720020705702.png" alt="image-20230720020705702" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230720020911507.png" alt="image-20230720020911507" style="zoom:67%;" /> 





> - 第四步

<img src="Algorithm.assets/image-20230720021450989.png" alt="image-20230720021450989" style="zoom:67%;" /> 



> - 局限性

<img src="Algorithm.assets/image-20230720021533904.png" alt="image-20230720021533904" style="zoom:67%;" /> 









> - 结合示例理解

> - `1.找出评价指标`
>   - 查找文献，小组讨论

<img src="Algorithm.assets/image-20230719185810398.png" alt="image-20230719185810398" style="zoom:67%;" /> 



> - `2.确定指标的权重`
>   - 分治法，先考虑局部的比较

<img src="Algorithm.assets/image-20230719190026504.png" alt="image-20230719190026504" style="zoom:67%;" /> 



> - `3、设置重要程度标准表`
>   - 这玩意先看看题目能不能找出程度表，找不出自己给就好了，偷偷地给，打枪滴不要

<img src="Algorithm.assets/image-20230719190736730.png" alt="image-20230719190736730" style="zoom:67%;" /> 



> - `4、列出判断矩阵`
>   - 只用填对角线一半的，剩余一半自动取倒数

<img src="Algorithm.assets/image-20230719191200703.png" alt="image-20230719191200703" style="zoom: 67%;" /> 

> - 层次分析法中的判断矩阵：正互反矩阵

<img src="Algorithm.assets/image-20230719191256928.png" alt="image-20230719191256928" style="zoom:67%;" /> 



> - 得到地区的判断矩阵

<img src="Algorithm.assets/image-20230719191709387.png" alt="image-20230719191709387" style="zoom:67%;" /> 





> - `5、解决矛盾`
>   - 可能出现某个元素的权重既大于另一个元素又小于另一个元素
>   - 在使用判断矩阵求权重之前，要先进行**一致性检验**
>   - 一致矩阵：各行各列为倍数关系的正互反矩阵

<img src="Algorithm.assets/image-20230719192520408.png" alt="image-20230719192520408" style="zoom:67%;" /> 



> - 一致性检验原理：

<img src="Algorithm.assets/image-20230719195406058.png" alt="image-20230719195406058" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230719195350321.png" alt="image-20230719195350321" style="zoom:67%;" /> 



> - 一致性检验的步骤

<img src="Algorithm.assets/image-20230719200726765.png" alt="image-20230719200726765" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230719200844825.png" alt="image-20230719200844825" style="zoom:67%;" /> 



> - `6、得到多个判断矩阵的权重`

> - 如果是一致矩阵的话，如下计算
>   - 计算一列即可，因为其他列成比例

<img src="Algorithm.assets/image-20230719201304701.png" alt="image-20230719201304701" style="zoom:67%;" /> 



> - 不是一致矩阵的话，如下处理

> - 算术平均法求权重
>   - 将三列都用起来

<img src="Algorithm.assets/image-20230719202126761.png" alt="image-20230719202126761" style="zoom:67%;" /> 

> - 为什么要相加除以3？
>   - 扩展样本空间，将三列数据放到其中计算权重

<img src="Algorithm.assets/image-20230719202531137.png" alt="image-20230719202531137" style="zoom:67%;" /> 



> - 特征值法求权重
>   - 把特征值对应的特征向量归一化后拿来做权重，因为特征向量刚好是第一列的值的等比例放缩

<img src="Algorithm.assets/image-20230719205306246.png" alt="image-20230719205306246" style="zoom:67%;" /> 







> - **计算另一个判断矩阵的权重**

<img src="Algorithm.assets/image-20230719203607497.png" alt="image-20230719203607497" style="zoom:67%;" /> 







> - 总结
>   - 算术平均法求权重

<img src="Algorithm.assets/image-20230719202759944.png" alt="image-20230719202759944" style="zoom:67%;" /> 

> - 还有个几何平均法求权重
>   - 跟算术平均没什么区别

<img src="Algorithm.assets/image-20230719202932183.png" alt="image-20230719202932183" style="zoom:67%;" /> 





> - `7、汇总结果得到权重矩阵`

<img src="Algorithm.assets/image-20230719203659277.png" alt="image-20230719203659277" style="zoom:67%;" /> 





> - `8、计算得分`

<img src="Algorithm.assets/image-20230719203812871.png" alt="image-20230719203812871" style="zoom:67%;" /> 









## 2、适用题目

> - 确定评价指标、形成评价体系

<img src="Algorithm.assets/image-20230719204759622.png" alt="image-20230719204759622" style="zoom:67%;" />  

> - 确认指标

 <img src="Algorithm.assets/image-20230719185638904.png" alt="image-20230719185638904" style="zoom:67%;" /> 

 









# 二、优劣解距离法Topsis

## 1、入个门先

> - 为什么要用<img src="Algorithm.assets/image-20230721135845382.png" alt="image-20230721135845382" style="zoom:50%;" /> ？
>
>   - 拿考试成绩举例，如果仅仅用排名代表评分
>
>     如下，会发现渐即便成绩变化了，但是排名没变，即评分不会发生变化
>
>     因此，`此时的评分并不能反映出成绩的变化，即不能身负“权重”的职责`
>
>     <img src="Algorithm.assets/image-20230721135740358.png" alt="image-20230721135740358" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230721135458079.png" alt="image-20230721135458079" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230721152719548.png" alt="image-20230721152719548" style="zoom:67%;" /> 





> - **步骤**

> - `第一步`
>   - 将原始矩阵正向化：即把所有的指标类型`统一为极大型指标`

<img src="Algorithm.assets/image-20230721152743181.png" alt="image-20230721152743181" style="zoom:67%;" /> 



> - 下面是几种指标正向化的例子

<img src="Algorithm.assets/image-20230721152919881.png" alt="image-20230721152919881" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230721153520186.png" alt="image-20230721153520186" style="zoom:67%;" />  

<img src="Algorithm.assets/image-20230721153659689.png" alt="image-20230721153659689" style="zoom:67%;" /> 



> - `第二步`
>   - 消除不同量纲的影响：抹除它们的一部分属性，保留我们需要的属性

<img src="Algorithm.assets/image-20230721154025444.png" alt="image-20230721154025444" style="zoom:67%;" /> 



> - `第三步`
>   - 计算得分并归一化，得出结论

<img src="Algorithm.assets/image-20230721154104645.png" alt="image-20230721154104645" style="zoom:67%;" /> 







> - **结合示例**

<img src="Algorithm.assets/image-20230721140340888.png" alt="image-20230721140340888" style="zoom:67%;" /> 



> - 新增指标个数
>   - 效益型指标和成本型指标

<img src="Algorithm.assets/image-20230721140406255.png" alt="image-20230721140406255" style="zoom:67%;" /> 



> - 为方便计算，统一指标类型
>   - 此处将所有指标转换为极大型称为指标正向化
>   - `论文中记得指出`

<img src="Algorithm.assets/image-20230721140544996.png" alt="image-20230721140544996" style="zoom:67%;" /> 



> - 标准化处理
>   - 消去不同指标量纲的影响

<img src="Algorithm.assets/image-20230721141046901.png" alt="image-20230721141046901" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230721141144188.png" alt="image-20230721141144188" style="zoom:67%;" /> 



> - 计算得分

<img src="Algorithm.assets/image-20230721151844373.png" alt="image-20230721151844373" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230721152445997.png" alt="image-20230721152445997" style="zoom:67%;" /> 





## 2、适用题目

<img src="Algorithm.assets/image-20230721152743181.png" alt="image-20230721152743181" style="zoom:67%;" /> 

 



## 3、基于熵权法的模型修正

<img src="Algorithm.assets/image-20230725212019848.png" alt="image-20230725212019848" style="zoom:67%;" /> 



<img src="Algorithm.assets/image-20230725212515687.png" alt="image-20230725212515687" style="zoom:67%;" /> 



<img src="Algorithm.assets/image-20230725212720737.png" alt="image-20230725212720737" style="zoom:67%;" /> 



> - **原理**

<img src="Algorithm.assets/image-20230725215606210.png" alt="image-20230725215606210" style="zoom:67%;" /> 





> - **步骤**

<img src="Algorithm.assets/image-20230725213201642.png" alt="image-20230725213201642" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230725215159998.png" alt="image-20230725215159998" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230725215237331.png" alt="image-20230725215237331" style="zoom:67%;" /> 







#  .

# ----插值与拟合模型----

# 一、插值算法



<img src="Algorithm.assets/image-20230726001737156.png" alt="image-20230726001737156" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726001821804.png" alt="image-20230726001821804" style="zoom:67%;" /> 



> - **原理**

<img src="Algorithm.assets/image-20230726002007399.png" alt="image-20230726002007399" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726002034865.png" alt="image-20230726002034865" style="zoom:67%;" /> 

 

## 1、拉格朗日插值法

<img src="Algorithm.assets/image-20230726003247779.png" alt="image-20230726003247779" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726003357887.png" alt="image-20230726003357887" style="zoom:67%;" /> 



> - 龙格现象

<img src="Algorithm.assets/image-20230726003801759.png" alt="image-20230726003801759" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726003817956.png" alt="image-20230726003817956" style="zoom:67%;" /> 





## 2、牛顿插值

<img src="Algorithm.assets/image-20230726014335323.png" alt="image-20230726014335323" style="zoom:67%;" /> 



<img src="Algorithm.assets/image-20230726014455084.png" alt="image-20230726014455084" style="zoom:67%;" /> 



> - 牛顿插值和拉格朗日插值的对比

<img src="Algorithm.assets/image-20230726015245104.png" alt="image-20230726015245104" style="zoom:67%;" /> 





## 3、分段插值

### 3.1、分段三次Hermite插值

> - 满足互异和可导即可使用

<img src="Algorithm.assets/image-20230726015550590.png" alt="image-20230726015550590" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726015638805.png" alt="image-20230726015638805" style="zoom:67%;" /> 





### 3.2、三次样条插值

<img src="Algorithm.assets/image-20230726023415224.png" alt="image-20230726023415224" style="zoom:67%;" /> 









# 二、拟合算法

## 1、入门

<img src="Algorithm.assets/image-20230726151010991.png" alt="image-20230726151010991" style="zoom:67%;" /> 



> - **最小二乘法**

<img src="Algorithm.assets/image-20230726151242582.png" alt="image-20230726151242582" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726151433808.png" alt="image-20230726151433808" style="zoom:67%;" /> 



> - **评价拟合的好坏**
> - R^2只能适用于线性函数，其他函数直接看SSE

<img src="Algorithm.assets/image-20230726152335878.png" alt="image-20230726152335878" style="zoom:67%;" /> 



> - 如何界定线性函数
>   - 线性是指参数为线性，就是下图的a或者b什么的

<img src="Algorithm.assets/image-20230726153549869.png" alt="image-20230726153549869" style="zoom:67%;" /> 









#  .

# ----相关性模型----

# 一、概述

<img src="Algorithm.assets/image-20230726154303011.png" alt="image-20230726154303011" style="zoom:67%;" /> 



# 二、皮尔逊相关系数

## 1、入门

> - Person相关系数
>   - 在总体协方差的基础上消去了量纲

<img src="Algorithm.assets/image-20230726174019493.png" alt="image-20230726174019493" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726174239772.png" alt="image-20230726174239772" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726175510644.png" alt="image-20230726175510644" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230726175643074.png" alt="image-20230726175643074" style="zoom:67%;" /> 





> - 一些相关误区

<img src="Algorithm.assets/image-20230726180136218.png" alt="image-20230726180136218" style="zoom:67%;" />  

> - 只有线性相关才能使用皮尔逊相关系数

<img src="Algorithm.assets/image-20230726180414772.png" alt="image-20230726180414772" style="zoom:67%;" /> 



> - 容易忽视的点

<img src="Algorithm.assets/image-20230726180559256.png" alt="image-20230726180559256" style="zoom:67%;" /> 



> - 总结
>   - 如果是线性关系，那么Period越大越相关
>   - 如果不确定关系，这玩意没毛用，所以`先画出散点图看看`

<img src="Algorithm.assets/image-20230726180714490.png" alt="image-20230726180714490" style="zoom:67%;" /> 



## 2、相关系数的假设检验

<img src="Algorithm.assets/image-20230726181014188.png" alt="image-20230726181014188" style="zoom:67%;" /> 



> - 使用条件

<img src="Algorithm.assets/image-20230727014442327.png" alt="image-20230727014442327" style="zoom:67%;" /> 





<img src="Algorithm.assets/image-20230726182531420.png" alt="image-20230726182531420" style="zoom:67%;" /> 



<img src="Algorithm.assets/image-20230727012044855.png" alt="image-20230727012044855" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230727012245351.png" alt="image-20230727012245351" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230727012542796.png" alt="image-20230727012542796" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230727012617309.png" alt="image-20230727012617309" style="zoom:67%;" /> 

> - p值判断法，改进第五步
>   - 其实差不多，p值判断就是比较概率

<img src="Algorithm.assets/image-20230727014143678.png" alt="image-20230727014143678" style="zoom:67%;" /> 





## 3、正态分布检验

> - 第一个方法：Jarque-Bera test

<img src="Algorithm.assets/image-20230727150147821.png" alt="image-20230727150147821" style="zoom:67%;" /> 

> - 正态分布的偏度为0，峰度为3

<img src="Algorithm.assets/image-20230727150204585.png" alt="image-20230727150204585" style="zoom:67%;" /> 







# 三、斯皮尔曼相关系数

## 1、入门

> - 第一种

<img src="Algorithm.assets/image-20230727152048690.png" alt="image-20230727152048690" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230727152631997.png" alt="image-20230727152631997" style="zoom:67%;" /> 



> - 第二种
>   - 就是求等级之间的皮尔逊相关系数，不是求原数据的皮尔逊相关系数

<img src="Algorithm.assets/image-20230727152845149.png" alt="image-20230727152845149" style="zoom:67%;" /> 



## 2、假设检验

> - 小样本的情况

<img src="Algorithm.assets/image-20230727153801910.png" alt="image-20230727153801910" style="zoom:67%;" /> 

> - 大样本情况

<img src="Algorithm.assets/image-20230727153834783.png" alt="image-20230727153834783" style="zoom:67%;" /> 





# 四、PEARSON VS SPEARMAN

> - 定序数据使用sperman相关系数

<img src="Algorithm.assets/image-20230727155422679.png" alt="image-20230727155422679" style="zoom:67%;" />  









# 五、典型相关分析

## 1、入门

> - 举个例子

<img src="Algorithm.assets/image-20230727170704953.png" alt="image-20230727170704953" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230727170730765.png" alt="image-20230727170730765" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230727170845070.png" alt="image-20230727170845070" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230727170854553.png" alt="image-20230727170854553" style="zoom:67%;" /> 



<img src="Algorithm.assets/image-20230727171151778.png" alt="image-20230727171151778" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230727171517453.png" alt="image-20230727171517453" style="zoom:67%;" /> 



<img src="Algorithm.assets/image-20230727174553875.png" alt="image-20230727174553875" style="zoom:67%;" /> 

> - 为什么两个典型变量的方差都要为1？
>
>   - 首先，我们需要保证相关系数是唯一的，不能几组实验的相关系数一样
>
>     相关系数是忽略了量纲的，也就是说，A * aX^(1) 和 B * bX^(2)的相关系数 `=` aX^(1) 和 bX^(2)的相关系数
>
>     而如果设置了方差为1就是让X的波动较小，尽量靠近X，不会出现2X这种情况

<img src="Algorithm.assets/image-20230727175514079.png" alt="image-20230727175514079" style="zoom:67%;" /> 



> - 下面的约束条件貌似不是做题时需要的步骤，而是推导时的前件
>
>   不用在意

<img src="Algorithm.assets/image-20230728203842883.png" alt="image-20230728203842883" style="zoom:67%;" /> 



## 2、样本分析

> - 相关系数 = 非零的特征根开根号

> - 进行典型相关分析前，先对两组变量进行相关性检验
>
>   - 一定要假设样本服从正态分布
>
>   - 这里是变量之间是否无关的检验，有一个似然比统计量，你憋问这是干嘛的
>
>     总之这个像A的东西会得到一个Q，我们用这个Q值去进行检验。类似于标准化嘛

<img src="Algorithm.assets/image-20230728145542114.png" alt="image-20230728145542114" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230728150036750.png" alt="image-20230728150036750" style="zoom:67%;" /> 

​	

<img src="Algorithm.assets/image-20230728151840077.png" alt="image-20230728151840077" style="zoom:67%;" /> 

> - 典型相关系数检验是否显著
>
>   - 这里是相关系数是否显著的检验，有一个似然比统计量，你憋问这是干嘛的
>
>     总之这个像A的东西会得到一个Q，我们用这个Q值去进行检验。类似于标准化嘛

<img src="Algorithm.assets/image-20230728150211712.png" alt="image-20230728150211712" style="zoom:67%;" />   



> - 典型相关变量 = 两组变量方差都为1，且能使它们相关系数最大(用数学方法计算)
> - 典型相关系数 = 典型相关变量的相关系数

> - 例题
>   - 求和符号是什么、求和带负号是什么、A是什么
>   
>     <img src="Algorithm.assets/image-20230728180520234.png" alt="image-20230728180520234" style="zoom:67%;" /> 
>   
>     <img src="Algorithm.assets/image-20230728181453538.png" alt="image-20230728181453538" style="zoom: 67%;" /> 
>   
>     <img src="Algorithm.assets/image-20230728200858983.png" alt="image-20230728200858983" style="zoom:67%;" /> 
>   
>     
>   
>   - 特征向量干嘛的？Q是什么？什么时候进行显著性检验？第二组不行就不测试第三组了吗
>   
>     - 典型相关系数最大值 = Lambda最大值 = 矩阵A/B的特征根
>     - 典型变量的系数 = 最大特征根Lambda的特征向量
>   
>     - 矩阵的秩 = 非零特征根数 = 进行几组测试
>   
>       <img src="Algorithm.assets/image-20230728202649855.png" alt="image-20230728202649855" style="zoom:67%;" /> 
>   
>     - 关于第二组不行第三组不检验的原因
>   
>       定义，直到某个不显著，后面的就不检测了
>   
>       `但是如果存在显著的Lambda至少表明相关系数是显著的`
>   
>       <img src="Algorithm.assets/image-20230728204755323.png" alt="image-20230728204755323" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230728152743853.png" alt="image-20230728152743853" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230728153139552.png" alt="image-20230728153139552" style="zoom:50%;" /> <img src="Algorithm.assets/image-20230728153149853.png" alt="image-20230728153149853" style="zoom: 50%;" /> 

<img src="Algorithm.assets/image-20230728153248710.png" alt="image-20230728153248710" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230728153307187.png" alt="image-20230728153307187" style="zoom:67%;" /> 



> - 典型相关系数显著性检验

<img src="Algorithm.assets/image-20230728154832471.png" alt="image-20230728154832471" style="zoom:67%;" /> 



> - 强行修改α位点，让显著性出现
> - 继续检测第二对

<img src="Algorithm.assets/image-20230728154924003.png" alt="image-20230728154924003" style="zoom:67%;" /> 





<img src="Algorithm.assets/image-20230728155326716.png" alt="image-20230728155326716" style="zoom:67%;" /> 





## 3、相关矩阵出发

<img src="Algorithm.assets/image-20230728161533724.png" alt="image-20230728161533724" style="zoom:67%;" /> 



> - 示例
> - 干嘛的？怎么干？
>   - 就是把数据标准化了，怎么标准化的？鼠鼠不知道捏

<img src="Algorithm.assets/image-20230728161654905.png" alt="image-20230728161654905" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230728161725068.png" alt="image-20230728161725068" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230728161740948.png" alt="image-20230728161740948" style="zoom:67%;" /> 





# . 

# ----回归模型----

# 概述

> - 回归的类型

<img src="Algorithm.assets/image-20230801154207770.png" alt="image-20230801154207770" style="zoom:67%;" /> 



> - 主要是研究X和Y的相关性，尝试去解释Y的形成机制，从而通过x去预测y的值
>   - 相关性 ≠ 因果性

<img src="Algorithm.assets/image-20230731201502183.png" alt="image-20230731201502183" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230731201527491.png" alt="image-20230731201527491" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230801153550910.png" alt="image-20230801153550910" style="zoom:67%;" /> 



> - 回归分析的作用
>   - 找出需要的变量x
>   - 找到x与y的相关性为正/负
>   - 找到x的系数

<img src="Algorithm.assets/image-20230801153923697.png" alt="image-20230801153923697" style="zoom:67%;" /> 





## 1、n元线性回归

> - 数据分类

<img src="Algorithm.assets/image-20230801154452676.png" alt="image-20230801154452676" style="zoom:67%;" /> 





> - 一元线性函数拟合和一元线性回归本质是一样的
>   - 底层思想都是用了最小二乘法，使得残差最小

<img src="Algorithm.assets/image-20230801160642600.png" alt="image-20230801160642600" style="zoom:67%;" /> 



### 1.1、解释系数

> - `回归系数的解释`
>   - 小心内生性
>     - 解决方案就是把扰动项放到自变量去

<img src="Algorithm.assets/image-20230801161648977.png" alt="image-20230801161648977" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230801162249030.png" alt="image-20230801162249030" style="zoom:67%;" /> 

> - 由于外生性的要求太高，实际做题时会引入核心解释变量和控制变量
>   - 核心解释变量：在诸多解释变量中我最关注的那个
>   - 控制变量：不太感兴趣，但是为了不让扰动项和核心解释变量相关，我可以把对应的扰动项放入控制变量

<img src="Algorithm.assets/image-20230801170644805.png" alt="image-20230801170644805" style="zoom:67%;" /> 



### 1.2、取对数

> - 何时取对数？好处？

<img src="Algorithm.assets/image-20230801172159313.png" alt="image-20230801172159313" style="zoom:67%;" /> 

> - 如果我取了对数，即让回归函数趋于线性，那又该怎么解释系数呢？
>   - 其实就是从一个单位转换到了一个百分比

<img src="Algorithm.assets/image-20230801171600434.png" alt="image-20230801171600434" style="zoom:67%;" /> 

> - 示例

<img src="Algorithm.assets/image-20230801172326476.png" alt="image-20230801172326476" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230801172454304.png" alt="image-20230801172454304" style="zoom:67%;" /> 



### 1.3、定性变量

> - 实例
>   - 类似于true/false

<img src="Algorithm.assets/image-20230801172909113.png" alt="image-20230801172909113" style="zoom:67%;" /> 

> - 那么如何解释回归系数呢?
>   - 

<img src="Algorithm.assets/image-20230801173318325.png" alt="image-20230801173318325" style="zoom:67%;" /> 



### 1.4、扰动项

> - 怎么理解球形扰动项？
>   - 即满足了“同方差”和“无自相关”两个条件
>     - “同方差”：每个扰动项的方差都是相同的；“无自相关”：误差项之间没有相关性

<img src="Algorithm.assets/image-20230801180700386.png" alt="image-20230801180700386" style="zoom:67%;" /> 



> - 存在异方差咋办？
>   - 

<img src="Algorithm.assets/image-20230801192524276.png" alt="image-20230801192524276" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230801192804494.png" alt="image-20230801192804494" style="zoom:67%;" /> 



### 1.5、示例

> - STEP
>
>   - 使用regress，得到的结果怎么看？
>
>     - 
>
>     - 关注假设是否成立，原假设为<img src="Algorithm.assets/image-20230827212343258.png" alt="image-20230827212343258" style="zoom:67%;"/>看Prob，大于0.05代表原假设成立，即这个回归是个答辩
>
>       ![image-20230827212952023](Algorithm.assets/image-20230827212952023.png)
>
>     - 再看每个系数β的假设检验，检查是否显著。原假设是每个评价都等于零
>
>       <img src="Algorithm.assets/image-20230827213115815.png" alt="image-20230827213115815" style="zoom:67%;" />
>
>     - 

> - 对应SSR、SSE、SST。还有个自由度df，用来调增拟合优度R^2用的

<img src="Algorithm.assets/image-20230827205928320.png" alt="image-20230827205928320" style="zoom:67%;" />

> - 解释型回归只解释关系，对R^2的关注度不如预测型回归高

<img src="Algorithm.assets/image-20230827210228373.png" alt="image-20230827210228373" style="zoom:67%;" /><img src="Algorithm.assets/image-20230827214950576.png" alt="image-20230827214950576" style="zoom:67%;" /> 









## 2、逐步回归















# . 

# ----分类模型----

# 概述

<img src="Algorithm.assets/image-20230801193209507.png" alt="image-20230801193209507" style="zoom:67%;" /> 





<img src="Algorithm.assets/image-20230801200639031.png" alt="image-20230801200639031" style="zoom:67%;" /> 

​	

## 1、线性概率模型

### 1.1、概述

> - 有两个问题：内生性和不符合实际值的问题

<img src="Algorithm.assets/image-20230801200825015.png" alt="image-20230801200825015" style="zoom:67%;" /> 



> - 解决了预测值超出[0,1]的情况
>   - 因为将beta和x作为函数F的自变量，而F的值域位于[0,1]之间，就不会出现异常情况了
>   - 其实就是函数的函数，只是把参数函数的映射范围缩小了
> - 为什么F得到是概率但是却能表示期望呢，见下面的那段话，求下期望就知道了

<img src="Algorithm.assets/image-20230801211736902.png" alt="image-20230801211736902" style="zoom:67%;" /> 



### 1.2、Logistic回归

> - 如何选取F呢？
>   - 

<img src="Algorithm.assets/image-20230801213905117.png" alt="image-20230801213905117" style="zoom:67%;" />  

<img src="Algorithm.assets/image-20230801213922799.png" alt="image-20230801213922799" style="zoom:67%;" /> 

> - 知道了F就是求beta了，怎么求呢？
>   - `由于使用了Logistic回归`，已经是非线性模型了，所以利用极大似然估计beta

<img src="Algorithm.assets/image-20230801214715857.png" alt="image-20230801214715857" style="zoom:67%;" /> 

> - 总结步骤

<img src="Algorithm.assets/image-20230801214951140.png" alt="image-20230801214951140" style="zoom:67%;" /> 







## 2、Fisher线性判别分析

<img src="Algorithm.assets/image-20230801215805448.png" alt="image-20230801215805448" style="zoom:67%;" /> 







# . 

# ----聚类模型----

# 概述

<img src="Algorithm.assets/image-20230802143403187.png" alt="image-20230802143403187" style="zoom:67%;" /> 



## 1、K-means聚类算法

> - 下面的步骤用流程图画出来，不要用文字描述，为什么降低查重和使目标更清晰

<img src="Algorithm.assets/image-20230802143447295.png" alt="image-20230802143447295" style="zoom:67%;" /> 

> - 下面为图解

<img src="Algorithm.assets/image-20230802143718771.png" alt="image-20230802143718771" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230802154158512.png" alt="image-20230802154158512" style="zoom:67%;" /> 

> - 算法优缺点

<img src="Algorithm.assets/image-20230802155316464.png" alt="image-20230802155316464" style="zoom:67%;" /> 



## 2、K-means++聚类算法

> - 为了解决K-means的孤立点敏感、初始点瞎吉尔乱选而诞生
>   - 主要是体现在选取初始聚类中心的规则上
>     - 底层思想就是让距离较远的点自成一类，不会划分到本类去

<img src="Algorithm.assets/image-20230802155810000.png" alt="image-20230802155810000" style="zoom:67%;" /> 



## 3、系统聚类

### 3.1、概述

> - 为什么不用决定分多少类？
>   - 其实不然，它是给你分成了1......n类，你自己选择要分成几个类

<img src="Algorithm.assets/image-20230827165422352.png" alt="image-20230827165422352" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230802164024172.png" alt="image-20230802164024172" style="zoom:67%;" /> 



> - 分类的准则

<img src="Algorithm.assets/image-20230802164125688.png" alt="image-20230802164125688" style="zoom:67%;" /> 

> - 计算样本与样本的距离
>   - 绝对值距离：计算网状道路的题型时会用到
>   - 欧氏距离：`最为常见`

<img src="Algorithm.assets/image-20230802164207599.png" alt="image-20230802164207599" style="zoom:67%;" /> 

> - 使用示例

<img src="Algorithm.assets/image-20230802164624936.png" alt="image-20230802164624936" style="zoom:67%;" /> 



> - 那么如何计算指标与指标的距离呢？
>   - 了解一下即可

<img src="Algorithm.assets/image-20230802164818303.png" alt="image-20230802164818303" style="zoom:67%;" /> 



> - 如何计算类与类之间的距离的呢？

<img src="Algorithm.assets/image-20230802165156123.png" alt="image-20230802165156123" style="zoom:67%;" /> 

> - 组间平均连接法、组内平均连接法、重心法

<img src="Algorithm.assets/image-20230802165349929.png" alt="image-20230802165349929" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230802165310907.png" alt="image-20230802165310907" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230802165324206.png" alt="image-20230802165324206" style="zoom:67%;" /> 



> - 过程流程图

<img src="Algorithm.assets/image-20230802165507723.png" alt="image-20230802165507723" style="zoom:67%;" /> 



### 3.2、示例

<img src="Algorithm.assets/image-20230802165611930.png" alt="image-20230802165611930" style="zoom:67%;" /> 

> - 如果不是已经存在的类，就新建类
>   - 就是在放入已有类和新建类做选择

<img src="Algorithm.assets/image-20230802165847375.png" alt="image-20230802165847375" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230802172607376.png" alt="image-20230802172607376" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230802172641244.png" alt="image-20230802172641244" style="zoom:67%;" /> 



> - 目的就是得到一个谱系图
>   - 有点决策树的感觉

<img src="Algorithm.assets/image-20230802173042444.png" alt="image-20230802173042444" style="zoom:67%;" /> 

### 3.3、注意事项

<img src="Algorithm.assets/image-20230802173440424.png" alt="image-20230802173440424" style="zoom:67%;" /> 

### 3.4、选择聚类个数

<img src="Algorithm.assets/image-20230827170823789.png" alt="image-20230827170823789" style="zoom:67%;" /><img src="Algorithm.assets/image-20230827170903407.png" alt="image-20230827170903407" style="zoom:67%;" /> 

 

### 3.5、方差检验和L-W检验

<img src="Algorithm.assets/image-20230906231441082.png" alt="image-20230906231441082" style="zoom:80%;" />





### 3.6、合理性检验

> - 利用轮廓系数
>   - 

<img src="Algorithm.assets/image-20230907010708320.png" alt="image-20230907010708320" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230907010833758.png" alt="image-20230907010833758" style="zoom:67%;" />

> - 聚类噪声指标

<img src="Algorithm.assets/image-20230907011103150.png" alt="image-20230907011103150" style="zoom:67%;" />



> - 噪声和离群点

<img src="Algorithm.assets/image-20230907011159623.png" alt="image-20230907011159623" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230907012006327.png" alt="image-20230907012006327" style="zoom:67%;" />









## 4、DBSCAN算法

### 4.1、概述

<img src="Algorithm.assets/image-20230802175918734.png" alt="image-20230802175918734" style="zoom:67%;" /> 



> - 基本的算法

<img src="Algorithm.assets/image-20230802192112913.png" alt="image-20230802192112913" style="zoom:67%;" /> 



> - 如果只有两个指标，并且散点图很“DBSCAN”，就是说分布呈现出一个形状，就用“DBSCAN”，否则就用系统聚类

<img src="Algorithm.assets/image-20230802192825965.png" alt="image-20230802192825965" style="zoom:67%;" /> 





















# . 

# ----规划类模型----

# 概述

> - 喵的记成了DP了
> - 什么是线性规划模型？
>   - 一组公式，对公式中每个变量的解释
>   - 求解约束条件下目标函数的极值

<img src="Algorithm.assets/image-20230802202502383.png" alt="image-20230802202502383" style="zoom:67%;" /> 



> - 数学示例

<img src="Algorithm.assets/image-20230802202731584.png" alt="image-20230802202731584" style="zoom:67%;" /> 





## 1、线性规划

### 1.1、概述

> - 目标函数和约束条件都必须是`线性表达式`

<img src="Algorithm.assets/image-20230802203054723.png" alt="image-20230802203054723" style="zoom:67%;" /> 



> - 下面讲了如何在MATLAB实现线性规划
>   - 三个示例

<img src="Algorithm.assets/image-20230802204738801.png" alt="image-20230802204738801" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230802205355500.png" alt="image-20230802205355500" style="zoom:67%;" /> 

> - 线性规划的命令
>   - 别忘了求解最大值的话要给fval加个负号

<img src="Algorithm.assets/image-20230802205854890.png" alt="image-20230802205854890" style="zoom:67%;" /> 







> - 下面是示例

<img src="Algorithm.assets/image-20230427214918806.png" alt="image-20230427214918806" style="zoom:67%;" /> 



> - 认识决策变量，目标函数，约束条件

<img src="Algorithm.assets/image-20230427215041112.png" alt="image-20230427215041112" style="zoom:67%;" /> 





### 1.2、适用题目

> - 注意：总收益最大适合，但是`总收益率最大不适合`
>   - 因为率等于一个x/y，x为收益，y为总支出；这不属于线性范畴了

<img src="Algorithm.assets/image-20230427215501707.png" alt="image-20230427215501707" style="zoom:67%;" />  





### 1.3、例题

> - 投料问题

<img src="Algorithm.assets/image-20230802223205272.png" alt="image-20230802223205272" style="zoom:67%;" /> 



### 1.3、代码相关

> - 最大值不能直接求得
>   - 由于matlab只能求函数的最小值，所以需要准换一下
>   - 求x_max = (-x)_min
>   - 于是可以看到`下图求最大转换为了求最小`
> - `目标函数`只能用`列向量表示`，合理`利用矩阵的转置`来表示就OK了

<img src="Algorithm.assets/image-20230427221309442.png" alt="image-20230427221309442" style="zoom:67%;" /> 

```matlab
f = [-40;-30]; % 目标函数中变量的系数矩阵
a = [1,1;-1,0;0,-1;240,120]; % 小于等于的约束条件的常数矩阵
b = [6;-1;-1;1200]; % 小于等于的约束条件的常数矩阵

% 标准形式：[x, fval] = linprog (f,A,b,aeq,beq,lb)
% 从某个变量开始后面全没有的话，后面的都不用写
% 没有等式约束条件、但有上下界约束的时候，用[]代替函数的参数
[x,y] = linprog(f,a,b)
y = -y % 记得取反，因为求的是负数

```

<img src="Algorithm.assets/image-20230428010910643.png" alt="image-20230428010910643" style="zoom:80%;" />  





## 2、非线性规划

<img src="Algorithm.assets/image-20230802204108000.png" alt="image-20230802204108000" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230803165236092.png" alt="image-20230803165236092" style="zoom:67%;" /> 

> - 三个练习题

<img src="Algorithm.assets/image-20230803165549003.png" alt="image-20230803165549003" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230803170011140.png" alt="image-20230803170011140" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230803170042341.png" alt="image-20230803170042341" style="zoom:67%;" /> 



> - 求解全局最优解的时候，可以先用蒙特卡洛模拟
> - option一般都是选择内点法

<img src="Algorithm.assets/image-20230803175113300.png" alt="image-20230803175113300" style="zoom:67%;" />  

<img src="Algorithm.assets/image-20230803175128838.png" alt="image-20230803175128838" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230803175432691.png" alt="image-20230803175432691" style="zoom:67%;" /> 



### 2.1、适用题目

> - 角度

<img src="Algorithm.assets/image-20230719013356832.png" alt="image-20230719013356832" style="zoom:67%;" /> 













## 3、整数/0-1规划

<img src="Algorithm.assets/image-20230802204213622.png" alt="image-20230802204213622" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230802204226260.png" alt="image-20230802204226260" style="zoom: 80%;" />  

<img src="Algorithm.assets/image-20230803153416160.png" alt="image-20230803153416160" style="zoom:67%;" /> 







## 4、最大最小化模型

### 4.1、入门

> - 求最大值的最小化问题

<img src="Algorithm.assets/image-20230803194831529.png" alt="image-20230803194831529" style="zoom:67%;" /> 















## 5、多目标规划

### 5.1、入门

<img src="Algorithm.assets/image-20230803200545949.png" alt="image-20230803200545949" style="zoom:67%;" /> 





### 5.2、适用题目

<img src="Algorithm.assets/image-20230719143709630.png" alt="image-20230719143709630" style="zoom:67%;" />  

<img src="Algorithm.assets/image-20230719143731249.png" alt="image-20230719143731249" style="zoom:67%;" /> 



# .

# ----预测模型----



# 一、灰色预测

## 1、PRINCIPLE

<img src="Algorithm.assets/image-20230829160015775.png" alt="image-20230829160015775" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829161656094.png" alt="image-20230829161656094" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829162244258.png" alt="image-20230829162244258" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829162559748.png" alt="image-20230829162559748" style="zoom:67%;" />

 <img src="Algorithm.assets/image-20230829164207722.png" alt="image-20230829164207722" style="zoom:80%;" />

> - OLS原理介绍

<img src="Algorithm.assets/image-20230829164553369.png" alt="image-20230829164553369" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829164649863.png" alt="image-20230829164649863" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829165347656.png" alt="image-20230829165347656" style="zoom:67%;" />

> - 将基本形式灰色微分方程(离散微分方程)化为白化方程(连续微分方程)

<img src="Algorithm.assets/image-20230829173726795.png" alt="image-20230829173726795" style="zoom:67%;" />

> - 

<img src="Algorithm.assets/image-20230829181507318.png" alt="image-20230829181507318" style="zoom:67%;" />

> - 本质就是一条指数拟合曲线，但是需要满足条件`指数规律，即求出合理的α、β`

<img src="Algorithm.assets/image-20230829182003465.png" alt="image-20230829182003465" style="zoom:67%;" />

> - 如何检测是否满足`指数规律`呢？
>   - 总结，只要ρ(k)∈(0, 0.5)的占比越高越说明符合准指数规律

<img src="Algorithm.assets/image-20230829182816745.png" alt="image-20230829182816745" style="zoom:67%;" />



> - EVALUATION OF MODEL

> - 经典残差
>   - 

<img src="Algorithm.assets/image-20230829184156066.png" alt="image-20230829184156066" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829184340865.png" alt="image-20230829184340865" style="zoom:67%;" />



## 2、应用场景

<img src="Algorithm.assets/image-20230829185348593.png" alt="image-20230829185348593" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829185335313.png" alt="image-20230829185335313" style="zoom:67%;" />





## 3、CODE

<img src="Algorithm.assets/image-20230829200814548.png" alt="image-20230829200814548" style="zoom:67%;" />









# .

# ----时间序列----

# 概述

# 一、尝鬼操作

> - 时间序列：同一对象，不同时间

<img src="Algorithm.assets/image-20230827231256451.png" alt="image-20230827231256451" style="zoom:67%;" /> 

> - 时期时间序列和时点时间序列的区别？
>   - 可加性

<img src="Algorithm.assets/image-20230827231506446.png" alt="image-20230827231506446" style="zoom:67%;" /> 

## 1、时间序列分解

> - 长期、季节、周期、不规则
>   - 季节和周期去主要区别是时间：周期的是很久的才循环，季节的一般季、月、周
> - 注意：`只有周期性的数据才能分解`

<img src="Algorithm.assets/image-20230827231800698.png" alt="image-20230827231800698" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230827231932689.png" alt="image-20230827231932689" style="zoom:67%;" /> 

![image-20230827232009714](Algorithm.assets/image-20230827232009714.png)



<img src="Algorithm.assets/image-20230827232604870.png" alt="image-20230827232604870" style="zoom:67%;" /> 

### 1.1、叠加和乘积

> - 选叠加还是乘积？
>   - 看序列的季节波动，如果一直平稳，就不会受到其他变动影响；如果呈现波动，就表明会受到影响

<img src="Algorithm.assets/image-20230827232907098.png" alt="image-20230827232907098" style="zoom:67%;" /> 



## 2、处理数据

### 2.1、缺失值

> - 只可删除头和尾，中间用其他办法替换

![image-20230828001932699](Algorithm.assets/image-20230828001932699.png)

<img src="Algorithm.assets/image-20230828001914822.png" alt="image-20230828001914822" style="zoom:67%;" /> 

## 3、分析步骤

### 3.1、定义时间变量

<img src="Algorithm.assets/image-20230828002224795.png" alt="image-20230828002224795" style="zoom:67%;" /> 

### 3.2、画出序列图

<img src="Algorithm.assets/image-20230828002454139.png" alt="image-20230828002454139" style="zoom:67%;" /> 

### 3.3、季节性分解

<img src="Algorithm.assets/image-20230828003354761.png" alt="image-20230828003354761" style="zoom:67%;" /> 

> - 结果含义如下

<img src="Algorithm.assets/image-20230828003845483.png" alt="image-20230828003845483" style="zoom:67%;" />  <img src="Algorithm.assets/image-20230828004133937.png" alt="image-20230828004133937" style="zoom:67%;" /> 

> - 画出时序图
>
> - 那么问题来了，这玩意有什么用呢？
>
>   - 看到了T+C+I吗，近似为直线，可以进行拟合，再加上S即可得到最终的值
>
>     所以就可以通过时间预测当前的数据值了

<img src="Algorithm.assets/image-20230828005409547.png" alt="image-20230828005409547" style="zoom:67%;" /> 

> - SUMMARY

<img src="Algorithm.assets/image-20230828005821297.png" alt="image-20230828005821297" style="zoom:67%;" /> 



## 4、这下想不专家都不行啦

<img src="Algorithm.assets/image-20230828010016531.png" alt="image-20230828010016531" style="zoom:67%;" /> 

### 4.1、指数平滑模型

<img src="Algorithm.assets/image-20230828012818834.png" alt="image-20230828012818834" style="zoom:67%;" /> 

#### 4.1.1、SIMPLE模型

> - 底层思想：预测数据 = 以往数据加权求和，离得越近的数据权重越大

<img src="Algorithm.assets/image-20230828013741244.png" alt="image-20230828013741244" style="zoom:67%;" /> 

#### 4.1.2、线性趋势模型

> - 主要关注α和β，因为有了他们后面的东西都可以求出来了

<img src="Algorithm.assets/image-20230828014721456.png" alt="image-20230828014721456" style="zoom:67%;" /> 



#### 4.1.3、阻尼趋势模型

> - 其实GDP也是这样，先直线上升然后趋于平缓

<img src="Algorithm.assets/image-20230828015043401.png" alt="image-20230828015043401" style="zoom:67%;" /> 

#### 4.1.4、简单季节性

<img src="Algorithm.assets/image-20230828015353636.png" alt="image-20230828015353636" style="zoom:67%;" /> 

#### 4.1.5、温特加/乘法模型

<img src="Algorithm.assets/image-20230828015439302.png" alt="image-20230828015439302" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828015517516.png" alt="image-20230828015517516" style="zoom:67%;" />





## 5、例题

<img src="Algorithm.assets/image-20230828175851054.png" alt="image-20230828175851054" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828181410033.png" alt="image-20230828181410033" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230828181448085.png" alt="image-20230828181448085" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828181602714.png" alt="image-20230828181602714" style="zoom:67%;" />

> - 有些其他步骤见视频吧

<img src="Algorithm.assets/image-20230828181642316.png" alt="image-20230828181642316" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828181929733.png" alt="image-20230828181929733" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230828183702971.png" alt="image-20230828183702971" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828183736628.png" alt="image-20230828183736628" style="zoom:67%;" />



> - 论文如何写？
>
>   - 见25分钟
>
>     [数学建模]: https://www.youtube.com/watch?v=wPwGkKOEZiM&amp;list=PLvce_oy4ggsHzrmgBz8vwQqRmezDOzo1N	"11-04 实例1销量数据预测和实例2人口数据预测"



















# .

# ----降维----

# 概述

## 1、主成分分析

<img src="Algorithm.assets/image-20230828173427508.png" alt="image-20230828173427508" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828173725965.png" alt="image-20230828173725965" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828173904924.png" alt="image-20230828173904924" style="zoom:67%;" />



### 1.1、STEP

<img src="Algorithm.assets/image-20230828175239912.png" alt="image-20230828175239912" style="zoom:80%;" />

> - 样本相关系数矩阵 = 样本标准化后的协防差矩阵

<img src="Algorithm.assets/image-20230828175311126.png" alt="image-20230828175311126" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230828175457555.png" alt="image-20230828175457555" style="zoom: 80%;" />

<img src="Algorithm.assets/image-20230828175541148.png" alt="image-20230828175541148" style="zoom:80%;" />





## 2、因子分析

<img src="Algorithm.assets/image-20230828210146036.png" alt="image-20230828210146036" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828211957262.png" alt="image-20230828211957262" style="zoom:80%;" />



### 2.1、PRINCIPLE

<img src="Algorithm.assets/image-20230829005444296.png" alt="image-20230829005444296" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828214633152.png" alt="image-20230828214633152" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828214947773.png" alt="image-20230828214947773" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828215239772.png" alt="image-20230828215239772" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828220724981.png" alt="image-20230828220724981" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828222544162.png" alt="image-20230828222544162" style="zoom:67%;" />



### 2.2、STEP

<img src="Algorithm.assets/image-20230828224257784.png" alt="image-20230828224257784" style="zoom:67%;" />

> - 为什么要接近0/1？
>   - 为了消除一些系数和保留一些系数，equals筛选

<img src="Algorithm.assets/image-20230828224434796.png" alt="image-20230828224434796" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828224754002.png" alt="image-20230828224754002" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230828224832827.png" alt="image-20230828224832827" style="zoom:67%;" />



## 3、EXAMPLE

<img src="Algorithm.assets/image-20230829010001711.png" alt="image-20230829010001711" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829010018973.png" alt="image-20230829010018973" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829010113508.png" alt="image-20230829010113508" style="zoom:67%;" />

> - 要通过检验啊魂淡！

<img src="Algorithm.assets/image-20230829010258571.png" alt="image-20230829010258571" style="zoom:67%;" />

> - 碎石图确认因子数目

<img src="Algorithm.assets/image-20230829010645284.png" alt="image-20230829010645284" style="zoom:67%;" />

> - 对结果进行分析

<img src="Algorithm.assets/image-20230829010837354.png" alt="image-20230829010837354" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829011034306.png" alt="image-20230829011034306" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829013106001.png" alt="image-20230829013106001" style="zoom:67%;" />

<img src="Algorithm.assets/image-20230829013433023.png" alt="image-20230829013433023" style="zoom:67%;" />

> - 得到因子得分？
>   - 1
> - 有什么用？

<img src="Algorithm.assets/image-20230829013545116.png" alt="image-20230829013545116" style="zoom:80%;" />









# .

# ----图论----





# . 

# ----机器学习模型----

# ----模型选择----

<img src="Algorithm.assets/image-20230904155610606.png" alt="image-20230904155610606" style="zoom:80%;" />

 





## 1、SVM向量机应用

### 1.1、入门

> - 线性支持向量机

<img src="Algorithm.assets/image-20230803203026505.png" alt="image-20230803203026505" style="zoom:67%;" />  

<img src="Algorithm.assets/image-20230803203052271.png" alt="image-20230803203052271" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230803203132496.png" alt="image-20230803203132496" style="zoom:67%;" /> 



> - 非线性支持向量机

<img src="Algorithm.assets/image-20230803203751397.png" alt="image-20230803203751397" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230803203939635.png" alt="image-20230803203939635" style="zoom:67%;" /> 

 <img src="Algorithm.assets/image-20230904161020324.png" alt="image-20230904161020324" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230904161156259.png" alt="image-20230904161156259" style="zoom:80%;" /> 













## 2、集成学习

<img src="Algorithm.assets/image-20230803204541428.png" alt="image-20230803204541428" style="zoom:67%;" /> 想·

<img src="Algorithm.assets/image-20230803205127885.png" alt="image-20230803205127885" style="zoom:67%;" /> 





## 3、KNN最近邻算法

<img src="Algorithm.assets/image-20230804153208667.png" alt="image-20230804153208667" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230804153339807.png" alt="image-20230804153339807" style="zoom:67%;" /> 



## 4、决策树

> - GOAL
>   - 构建最佳的决策树ID3的话就是每次熵降最多
>   - 防止过拟合

![image-20230902100715006](Algorithm.assets/image-20230902100715006.png)

> - 下图为CART决策树

<img src="Algorithm.assets/image-20230902103503112.png" alt="image-20230902103503112" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230902103657216.png" alt="image-20230902103657216" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230902105917489.png" alt="image-20230902105917489" style="zoom: 80%;" />







 

## 5、随机森林

> - 不需单独设置测试，袋外数据即为测试集

<img src="Algorithm.assets/image-20230907095245848.png" alt="image-20230907095245848" style="zoom: 80%;" />

<img src="Algorithm.assets/image-20230804155042317.png" alt="image-20230804155042317" style="zoom:67%;" /> 

<img src="Algorithm.assets/image-20230804155125478.png" alt="image-20230804155125478" style="zoom:67%;" /> 



> - 啥是bootstrap抽样

<img src="Algorithm.assets/image-20230804161347743.png" alt="image-20230804161347743" style="zoom:67%;" /> 



### 5.1、得到指标重要性

> - 分类变量需要更改决策树设置
>   - 见视频65









## 6、BP神经网络

> - 

<img src="Algorithm.assets/image-20230816192625252.png" alt="image-20230816192625252" style="zoom:67%;" /> 

## 7、交叉验证

> - 随机数种子
>   - 固定交叉验证的随机性

<img src="Algorithm.assets/image-20230904153858041.png" alt="image-20230904153858041" style="zoom:67%;" />



### 7.1、F1分数

> - 计算F1分数
>   - 利用混淆矩阵

<img src="Algorithm.assets/image-20230904155211463.png" alt="image-20230904155211463" style="zoom: 80%;" />

<img src="Algorithm.assets/image-20230904155237105.png" alt="image-20230904155237105" style="zoom: 80%;" />



> - 多分类问题的F1分数

<img src="Algorithm.assets/image-20230906122458189.png" alt="image-20230906122458189" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230906122316205.png" alt="image-20230906122316205" style="zoom:80%;" />





### 7.2、ROC曲线和AUC

<img src="Algorithm.assets/image-20230906171517084.png" alt="image-20230906171517084" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230906172109164.png" alt="image-20230906172109164" style="zoom:80%;" />









## 8、调参怪

<img src="Algorithm.assets/image-20230906003932664.png" alt="image-20230906003932664" style="zoom:80%;" />





### 8.1、具体方法

#### 8.1.1、网格搜索

<img src="Algorithm.assets/image-20230906011220499.png" alt="image-20230906011220499" style="zoom:80%;" />

<img src="Algorithm.assets/image-20230906011201807.png" alt="image-20230906011201807" style="zoom:80%;" />

![image-20230906011439194](Algorithm.assets/image-20230906011439194.png)

<img src="Algorithm.assets/image-20230906011522324.png" alt="image-20230906011522324" style="zoom:80%;" />



> - 多个参数调参

<img src="Algorithm.assets/image-20230907151907525.png" alt="image-20230907151907525" style="zoom:67%;" />







#### 8.1.2、随机搜索

![image-20230906011532754](Algorithm.assets/image-20230906011532754.png)



#### 8.1.3、贝叶斯调参

<img src="Algorithm.assets/image-20230906011636638.png" alt="image-20230906011636638" style="zoom:80%;" /> 









## 9、特征选择

<img src="Algorithm.assets/image-20230907100216236.png" alt="image-20230907100216236" style="zoom:80%;" />

![image-20230907171153592](Algorithm.assets/image-20230907171153592.png)

> - 降维和特征选择有什么区别
>   - 前者是删除特征，后者是选择一部分特征
>   - 依靠主成分分析进行降维

<img src="Algorithm.assets/image-20230907171222915.png" alt="image-20230907171222915" style="zoom:80%;" />









`

`

`

`

`