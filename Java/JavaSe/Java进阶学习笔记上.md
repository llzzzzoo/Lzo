[TOC]





### 1、IDEA快捷键大全

https://blog.csdn.net/qq_38963960/article/details/89552704

### 2、final

作用：当你子类继承父类后，不想让父类的某些方法被重写（因为如果出现覆盖的时候会报错），就用final修饰，或者你不想某个类被继承就用final修饰

注意final修饰的方法还是类其实都是可以调用的，只是不能继承和覆盖了。
final修饰的变量只能赋一次值，而且必须定义的时候就赋值，初始化
(有一个贼有意思的玩意，注意，**实例变量必须手动赋值，不会赋默认值**，你想一下你用了final，而这玩意只能赋一次值，那么这玩意的值就完全改变了啊，只剩个默认值能用，Sun公司的大佬们，肯定不会干啊，那玩意你后面怪别人不让你再	赋值坑你怎么办)

![image-20220310151636888](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220310151636888.png)

![image-20220312033333480](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220312033333480.png)

#### （1）final修饰引用的时候

![image-20220310153812819](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220310153812819.png)

![image-20220310153759963](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220310153759963.png)

#### （3）final修饰实例变量赋值问题

简单粗暴的理解，就是一旦final修饰的实例变量，你就**必须给它手动赋值**，甭管你搁类体赋值，还是去到构造方法体里面赋值

![image-20220310160006159](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220310160006159.png)

![image-20220310155745743](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220310155745743.png)

#### （4）final修饰实例变量一般加上static

那你一般写static final String COUNTRY（大写字母，因为当做是常量嘛）= "中国";

![image-20220310160724086](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220310160724086.png)

常量一般是公开的。即public static final int i = 1;

![image-20220310160926657](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220310160926657.png)

![image-20220310161040179](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220310161040179.png)

### 3、抽象类

#### （1）基础定义

抽象类不能实例化，即创建对象
final和abstract也是不能联合使用的，因为你写了final，就表明你不希望这玩意被继承被覆盖修改，但是你写abstract，摆明了是要让这个抽象类称为父类，所以逻辑上是自相矛盾的，联合使用会报错
抽象类里面也是用构造方法的，符合**子在必有父**的逻辑
抽象类不一定有抽象方法，但有抽象方法一定是抽象类
子类继承抽象类后，如果有抽象方法，必须覆盖，就是把abstract删了，然后填个方法体
面对抽象编程，其实就是引用类型是抽象类的（说白了就是类名可以当引用数据类型名嘛）

![image-20220312034858044](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220312034858044.png)

![image-20220312044244430](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220312044244430.png)

![image-20220312044830321](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220312044830321.png)

#### （2）重要结论

子类继承抽象父类的时候，如果父类有抽象方法，而子类不是抽象的，那么，非抽象的子类继承了抽象的方法，违背了定义，就会报错，此时有个很重要的东西，就是你把父类继承过来的抽象方法，在子类中覆盖了就行

![image-20220312115853056](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220312115853056.png)

#### （3）面对抽象编程

![image-20220312120916782](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220312120916782.png)

#### （4）小陷阱：并不是没有方法体的方法都是抽象方法

![image-20220312121838332](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220312121838332.png)

### 4、接口

#### （1）基础语法

①接口是抽象的，所以里面可以有抽象方法，并且抽象方法可以省略public abstract，但是注意不要让抽象方法带{}，因为你带了这个就表明方法体实现了，不是抽象方法了
②接口可以**实现多继承**
③接口中写的常量是public static final int PI = 3;也可以直接缩写成int PI = 3;（可以这么说，接口中随便写一个变量就是常量，接口中是不能放变量的），接口中所有元素方法属性都是公开的，都要用public修饰
④接口(interface)中只能出现**抽象方法（没有方法体），和常量**
⑤接口也是一种引用数据类型
⑥接口是完全抽象的，抽象方法和常量

![image-20220313215006600](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313215006600.png)

![image-20220313214615707](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313214615707.png)

![image-20220313233951914](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313233951914.png)

#### （2）类实现接口要实现所有方法

回来了，匿名内部类实现接口就是这样的，new接口的时候后面的{...}相当于实现了接口

其实本质上应该是 new (匿名) implements 接口{...}，怎么样get到了吗

![image-20220313223816141](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313223816141.png)



#### （3）接口中的方法都是public的

怎么证明呢，如下图，我写了个公开的方法，然后实现接口方法没毛病，但是如果我不写public，直接写个int sum(){}，这个操作就是分配更低的访问权限了，记得以前说过，方法重写，访问修饰符不能更低，只能更高

![image-20220313223722377](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313223722377.png)

#### （4）接口和多态联合使用

其实是和子类父类的继承是一样的

![image-20220313224827999](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313224827999.png)

#### （5）接口的转型

第一，一个类实现了多个接口，那么这几个接口可以相互转型的，属于接口转型
第二，一个类实现了一个接口M，很奇葩的就是我可以把一个指向M的引用，强制转化为一个K（注意子类可没有实现K，K和M和子类都没啥关系的），即 

```java
K k = (K)m;
//上面的代码编译时候是不会报错的，尽管两者根本没有继承关系
//但是运行阶段还是说ClassCastException错误
//所以以后不管何时进行强制转型操作的时候最好都用一下instanceof
if(m instanceof K){//这一行的意思是如果m指向的堆内存的数据类型是K的话就可以强制转型，不可以的话就返回false
    K k = (K)m;
}
```

![image-20220313231042399](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313231042399.png)

![image-20220313231005658](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313231005658.png)

![image-20220313230939125](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313230939125.png)

#### （6）关于extends和implement同时出现

先写extends再写implement
这个接口挺牛逼啊，我在接口中写一个抽象方法飞翔
当我想让子类也能飞，我就把这个接口插上去，那么再进行实现抽象方法后，就可以飞了，我不想它飞，把接口罢了就完事了

![image-20220313233621804](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313233621804.png)

#### （7）接口在开发中的作用

![image-20220313235442544](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313235442544.png)

![image-20220313235523787](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220313235523787.png)



这里讲下我对接口的崇拜，我写一个A类，接口B，C类，我作为A类，我是调用者，我想提出一些需求，那么就需要实现者C类出现，此时我的A类只跟接口B交互，我把一切需求教给B，然后C类implement了接口B，那么它也只跟接口B交互，，它通过B知道了我的A类的需求，然后实现它，很神奇啊，明明是A让C干活，但是我们却不用直接接触，降低耦合度。而且这个也炒鸡灵活，我想调用D类，我直接把C类换走，不需要更改A的代码，因为A只跟B对话，而变成D类以后，经过一些调整，D也可以去实现B了，这也就是说，我要完成一个贼牛逼的项目，那么我作为架构师，或者说软件工程师，我就需要把项目分成几部分，然后分给不同的人去做，而我最重要的任务就是搞定一个接口，让大家做不同部分最终能链接起来！！！
**还有不懂的建议结合下面的视频理解**

https://www.bilibili.com/video/BV1Rx411876f?p=514&t=103.4

![image-20220314010659294](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314010659294.png)

### 5、类和类的关系

A like B的关系感觉就像A 实现 B

![image-20220314003411994](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314003411994.png)

### 6、抽象类和接口的关系

注意接口中**没有构造方法**嗷

![image-20220314003855351](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314003855351.png)

### 7、包

#### （1）包的概述

注意包只能出现在第一行，那个啥注释后面也算第一行

 	 ![image-20220314202220793](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314202220793.png)

不使用IDEA的创建包

![image-20220314202911889](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314202911889.png)

#### （2）import机制

即导包

![image-20220314204753051](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314204753051.png)

跟scanner有关的导包

![image-20220314205252178](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314205252178.png)

![image-20220314205338451](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314205338451.png)

#### （3）访问控制权限

![image-20220314211020541](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314211020541.png)

![image-20220314211429266](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314211429266.png)

### 8、API帮助文档

API：应用程序编程接口（Application Program Interface）

![image-20220314213106405](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314213106405.png)

中文文档：  https://www.matools.com/api/java8

### 9、object类

#### 1、toString()

##### （1）基础定义

每次你写一个类，toString()类都是要重写的，因为toString默认的是输出@十六进制

![image-20220314214130840](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314214130840.png)

##### （2）调用toString()有三种方法

一种是把toString()的返回值用一个String来接受
一种是把toString()直接放到println()里面去
还有一种就是直接输出一个引用，你记得一个引用直接println()，系统会自动给你调用toString()来输出吗

![image-20220314214218728](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314214218728.png)

![image-20220315000219848](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315000219848.png)

##### （3）重写toString方法

这玩意非常重要

把下面这段代码复制粘贴然后改下你想return的内容就好了，好比我下下面的代码

```java
public String toString() {
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```

```java
public String toString() {
    return this.name;//返回改对象的私有属性——名字
}
```

#### 2、equals()

##### （1）基础定义

讲下我的理解：首先equals方法在Object类里面，而且它的返回值是布尔类型，参数是Object类型
然后就是对象与对象的比较，其实我觉得应该可以实现一个类的对象和另外一个类的对象进行比较，请看下文
首先我要怎么比较呢？因为equals方法里面是this跟ojb比较，那么神奇的地方来了，当你t1.equals(t3);时你会发现，t1就是你equals方法里面的this，而你传的t3就会向上转型（发现神奇的地方没有，Object是所有类的基类，无论你传的参数是什么类型的，它都会自动向上转型），而此时当你在equals方法里面进行比较的时候，你又会发现**因为Object没有一些属性，所以不能搞一个多态，但是这个时候你就会使用向下转型**，然后配合instanceof判断，然后你就可以拿这两个不同的对象进行比较了，合适的就返回true，不合适的就返回false

![image-20220314220245584](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314220245584.png)

![image-20220314220200105](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314220200105.png)

改良equals方法

![image-20220314220756748](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314220756748.png)

下面就是极致简化版，太佩服了
太佩服了 
思路，我肯定不要null空指针和不能向下转型的呗，而且我一定要先判断，那么我第一行就把这两个条件糅合在一起，简化了吧。
然后我还要判断传过来的会不会同一类型引用，如果是的话，那么我也可以直接返回true
然后我不用向下转型判断，然后就返回一个逻辑判断式，因为逻辑运算符的值直接就是布尔类型，不用判断真假返回true或false

![image-20220314221024837](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314221024837.png)

##### （2）引用类型数据的比较请用equals()

我的理解就是，每次你使用引用类型的时候，类似于String a = "111";的时候，其实编译器是自动new了个对象new String("111");这玩意比较巧妙，编译器其实通过神马手段给你自动重写了，你调用equals()的时候也是这样，编译器会给你自动重写的，所以遇到引用数据类型的比较不用犹豫，直接new完对象用t1.equals(t2);

![image-20220314235310939](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314235310939.png)

##### ![image-20220314234848294](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220314234848294.png)

#####  （3）关于equals方法的深层次理解剖析

equals方法一定要重写彻底啊！！！
怎么理解呢？就是说，因为每个类都会缺省继承Object类，那么每个类里面都有equals()方法，但是这个equals()方法只能比较地址的值，而我们一般都要拿来比较一些字面量什么的，这个时候我们就得重写（方法覆盖）equals()方法了，你看下面的this.name.equals(u.name)这个代码怎么理解呢，就是因为name是String类型的一个引用，其实是创建了一个对象，而那个String类里面的方法是被SUN公司改好的，也就是说你直接调用equals()可以直接比较字符串是否相等，不用担心自己没有覆盖，而当我使用其他的this.add.equals(add.name)的时候，你就必须在add类里面重写equals方法，利用那个Object obj的参数进行向上转型，然后进行null和instanceof的判断，再进行引用相等的判断，最后放心地进行向下转型，然后return一个逻辑表达式（挨个比较是否相等嘛），不需要if(布尔类型)-else来操作，因为逻辑表达式的值最终会为布尔类型

![image-20220315005126672](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315005126672.png)

![image-20220315005059055](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315005059055.png)

#### 3、fanalize()

##### （1）基础定义

非重点，注意记住就行可
格式	

```java
protected void finalize() throws Throwable{}//注意这个是类级别的，不要写到类里面去了
```

一旦编译器发现出现对象没有引用指向它的时候才会调用，而且不是一有垃圾就调用，是垃圾多了GC才会调用这个方法
你可以建议垃圾回收器启动，但是也只是让概率大一点

```java
System.gc();//建议，不一定GC就会启动
```

![image-20220315093022490](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315093022490.png)

##### （2）相关代码实现

![image-20220315093056844](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315093056844.png)

![image-20220315093110434](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315093110434.png)

![image-20220315093137199](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315093137199.png)

#### 4、hashCode()

##### （1）基础定义

说白了你new一个对象，然后t1.hashCode(); 左边这玩意就是t1的地址经过哈希算法得出的一个值（Object类里面的方法，所以你可以直接调用）

![image-20220315094757986](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315094757986.png)

### 10、内部类

了解即可，不建议使用，因为太乱了宝

这边就补充几个知识点
把类写在类里面，你可以把里面的类当做变量来处理，怎么说呢，就是static （不写） public protected private来修饰都行，具体的自行百度，所以被人问你static可以修饰类吗，其实是可以的

![image-20220315100450501](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315100450501.png)

![image-20220315100433993](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315100433993.png)

匿名内部类

说白了就是没有名字，所以很奇葩，只能用一次，不能反复使用

这玩意说白了就是你new一个接口对象的时候，不是一般要有一个类来实现接口吗，现在你可以这样new Compute(){...}，然后在...里面写代码，就不用对接口进行实现了，看下图

其实本质上应该是 new (匿名) implements 接口{...}，怎么样get到了吗

![image-20220315135124511](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315135124511.png)

### 11、数组

### ①一维数组

#### 1、基本概念

![image-20220315151016814](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315151016814.png)

![image-20220315151906414](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315151906414.png)

#### （1）优缺点

优点：检索效率高，比较空间是连续的吗，而且还有下标，所有可以通过数学表示式和下标来遍历

![image-20220315151949550](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315151949550.png)

缺点：两条，增删的时候特别麻烦，而且不能存储很大的数据量，因为很难找到连续的内存空间

![image-20220315152345004](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315152345004.png)

#### 2、初始化

![image-20220315154406226](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315154406226.png)

#### 3、把数组当做参数

参数写(String[] args)
传过去可以传数组的名字a或者直接在

```java
printArray(new int[]{1, 2, 3});//这样	就不用new对象，直接new一下然后传过去，注意标准格式new int[]{...}
```

![image-20220315160124756](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315160124756.png)

#### 4、main方法里面的(String[] args)

其实这个数组是存在的，但是里面内容是空的(即长度为0)

![image-20220315161655217](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315161655217.png)

java 主方法那里的类名 字符 字符
后面的字符会放到args里面 用空格区别 见下图

![image-20220315161738993](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315161738993.png)

#### 6、数据里面存储引用(多态运用到数组)

其实是父类型的数组存储了子类型的数据
就像下面一样，你不是new了一个Cat类型的c和Bird类型的b吗，而你再看你可以直接把c，b存在Animal类型的数组里面，而且你每次调用的ani[0]或者ani[1]的时候这玩意都会自动向上转型，你可以直接调用ani[0]，它代表的就是一个父类是Animal类型，指向堆内存的对象是Cat类型的数据

![image-20220315165041517](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315165041517.png)

![image-20220315164951793](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315164951793.png)

#### 7、数组扩容

说白了就是新建一个大一点的数组，然后把已有的数组拷贝到里面去

数组拷贝和out.println都System类里面的

![image-20220315165645092](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315165645092.png)

src - 源数组。
srcPos - 源数组中的起始位置。
dest - 目标数组。
destPos - 目标数据中的起始位置。
length - 要复制的数组元素的数量。

![image-20220315171547257](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315171547257.png)

![image-20220315171631011](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315171631011.png)

### ②二维数组

跟一维差不多，但是记得a[i]其实代表的不是第一行的首元素的值，而是第一行这个一维数组的地址

![image-20220315174824753](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315174824753.png)

### 12、Arrays工具类的使用

#### （1）排序

Arrays.sort();

![image-20220315182115562](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315182115562.png)

#### （2）二分查找

Arrays.binarySearch(arr, 5);

![image-20220315182713304](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315182713304.png)

## ---------------------------------------------

### 一、String类

##### ①String类的储存原理

其实大概意思如下（可结合下面的内存图理解）

```java
String s1 = "111";
/*上面的这玩意的意思就是你写了一个字符串常量，然后SUN公司为了执行效率，把这种常量字符串放到了“字符串常量池”中，而这行代码的意思就是说字符串常量池创建了一个"111"的数据，并且同时创造了一个字符串对象（我个人理解对象不一定是new出来的才叫，这个先记住吧），然后因为有对象，我在栈里面有个局部变量引用指向它，其实这个上面对象应该是说这个字符串是一个字符串对象，别太死了*/
String s2 = "111" + "222";
/*而上面这个更有意思，它是指你创建一个"222"的数据在常量池，并且这个时候也是创建了一个对象，但是你不知道它的引用是多少，但是它确实有对象的创建，最有意思的就是，你把两个字符串理解起来，其实在内存中，是调用了上面那个s1和你新创建的这个对象，然后把他们连接起来，此时又会创建一个对象，没错第三个对象，而且得到的字符串也会在字符串常量池里面储存，所以到现在为止你创建了三个对象了*/
String s3 = new String("222");
/*这玩意更有意思，怎么说呢，只有当你new对象的时候，才会在堆内存申请一块内存，上面几个对象的创建都不会出现堆内存的申请吧，然后你调用构造方法，传的参数是上面的"222"，注意这个字符串已经是存在于字符串常量池里面的数据了，所以你创建的对象其实存储的是这个字符串的地址，而你的s3储存的是这个对象的地址，也就是说s3指向堆内存的对象，而堆内存对象指向这个字符串常量的地址（这里可能不是很严谨，理解一下我要讲的内容就行了），所以你打印s3你觉得会得到啥嘛，肯定不是字符串啊*/
```

![image-20220315220950881](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315220950881.png)

![image-20220315221011511](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315221011511.png)

##### ②String类的重点

这里强调三个点

①

```java
String t1 = "hello";
String t2 = "hello";
/*上面两行代码的t1和t2指向的其实是一个字符串常量，所以他们的地址是一样的，你用==是true的*/
```

②字符串常量池的内容即字符串常量是不会被GC（垃圾回收站）释放的

③ 之前写的"111".equals(k);其实是因为**"111"是一个字符串(String)对象**，只要是对象，那么就可以调用类里面的equals方法

![image-20220315224449182](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315224449182.png)

![image-20220315224529479](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315224529479.png)

![image-20220315224427305](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315224427305.png)

s保存的不是字符串本身，而是其内存地址，所以你调用toString()本来应该打印的会是个奇奇怪怪的地址，但是却因为String类里面的toString方法重写了，所以你会打印出对应字符串

![image-20220315225114541](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315225114541.png)

**还有一个重点**

![image-20220315225338993](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315225338993.png)

##### ③String类的构造方法

注意下面的s2或者s1其实只是一个引用而已，它本身的值应该是一个地址值，但奈何SUN公司的人性化，直接在**String类里面重写toString()方法，所以你打印的时候，它默认调用toString()方法**，然后本应打印的地址给你输出成了指向的字符串常量内存池里面的字符串，但**千万注意s2或者s1本身存储的就是一个地址，千万不要觉得它本身的内容就是一串字符**

![image-20220315225937612](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315225937612.png)

并不用全部记得构造方法怎么写，因为自己去查API文档下面我给你介绍几个常用的

```java
String s1 = new String("");//这个s是对象的地址，不是字符串的地址哦
String s2  = "";//直接这样调用构造方法就行，这个s2指向的就是字符串
String s3 = new String(char/*数组*/);
String s4 = new String(char/*数组*/, /*起始下标*/, /*长度*/);
String s5 = new String(byte/*数组*/);
String s6 = new String(byte/*数组*/, /*起始下标*/, /*长度*/)

```

![image-20220315230701986](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315230701986.png)

![image-20220315230432267](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315230432267.png)

![image-20220315230557125](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220315230557125.png)

### 二、String类的常用方法

##### （1）charAt（输出指定位置的字符）

![image-20220316212313879](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316212313879.png)

##### （2）compareTo字符串比较

返回值的int的值是前面的第一位减去后边第一位的差，而且只要比较出一位跟后面那位大小不一样的话就不会比较后面了
当然，返回值其实是有范围的

![image-20220316212741660](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316212741660.png)

##### （3）contains(前面字符串是否包含后面字符串)

![image-20220316220525592](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316220525592.png)

##### （4）endsWith(判断前面的字符串是否以后面的结尾)

![image-20220316220715429](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316220715429.png)

##### （5）equals方法(比较字符串是否相等，返回值为布尔类型)

这玩意和compareTo不同的地方大概在于这个只能比较相等与否，而compareTo方法可以看出来谁大谁小

![image-20220316221154154](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316221154154.png)

##### （6）equalsIgnoreCase(字符串比较，并且忽略大小写)

![image-20220316221640640](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316221640640.png)

##### （7）getBytes（把字符串转为byte数组）

![image-20220316221919494](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316221919494.png)

##### （8）indexOf（判断某个子字符串在当前字符串第一次出现的索引(即下标)）

![image-20220316222106091](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316222106091.png)

##### （9）length(判断字符串的长度)

注意一个细节，那就是字符串求长度的时候，是调用字符串里面的length方法，即

```java
"abc".length()
```

而求字符数组的长度是直接*数组名.length*，即访问数组里面的属性length

![image-20220316222457593](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316222457593.png)

##### （10）lastIndexOf(找到指定字符串在当前字符串最后一次出现的索引)

![image-20220316223520894](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316223520894.png)

##### （11）replace（可以把指定字符串替换当前字符串的指定字符串）

![image-20220316224028708](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316224028708.png)

##### （12）split(字符串的拆分)

![image-20220316224308322](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316224308322.png)

##### （13）startsWith(判断某个字符串是否以某个子字符串开始)

##### （14）substring（截取字符串，指定开始下标）

##### （15）substring(截取字符串，可以指定截取范围)

![image-20220316224623343](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316224623343.png)

##### （16）toCharArray（将字符串转化为char数组）

![image-20220316224841441](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316224841441.png)

##### （17）toLowerCase（全部转换为小写）

##### （18）toUpperCase（全部转换为大写）

![image-20220316225101971](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316225101971.png)

##### （19）trim(去除字符串前后空白)

##### （20）valueOf（把一串玩意转换为字符串）

注意valueOf是String类里面**唯一一个静态方法**，不需要new对象

![image-20220316225504822](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316225504822.png)

![image-20220316231220030](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316231220030.png)

##### （21）StringBuffer（字符串追加）！！！

以后追加字符串请用这个东西，格式如下

```java
StringBuffer b1 = new StringBuffer(100);//左边的100是指定数组容量，可以更改
b1.append("hello");//这个就是把字符串放里面
b1.append("world");//这个就是拼接
System.out.println(b1);//会打印helloWorld
```

> 这里我粗略讲一下StringBuffer和String的区别，即为什么我们要用StringBuffer来对大量字符串拼接
>
> 首先请看下面的第二张图，你每次使用“+”号的时候都会拼接成一个字符串对象，而且没拼接一次，就会为生成一个新的对象，占用内存，但是你其实只是想要拼接后的字符串，所以你这么写很浪费空间
>
> 而此时我们会选择使用StringBuffer引用类型，因为它最终占得空间就是把所有字符串拼接起来的空间
>
> 而两者不同的原因我也不细说了，就结合下图来说吧，下面的意思是String类的里面会拿一个char[] value来接受字符串（老杜的是byte[]，但是我翻了我的是char[]）
>
> ```java
> String s1 = "1";
> s1 = "1" + "2";
> /*这个字符串拼接就比较傻，你先搞了一个"1"，此时这个玩意会创建一个char数组（干脆叫A吧）存放这个"1"，因为你底层是用final修饰的char数组，final只能赋一次值，那么基本上杜绝了一切在原有数组，即在A基础上操作基本上不可能，所以下面的拼接其实已经搞了个新的数组（叫B吧），把"1"和"2"放到char数组里面，让s1指向这个新的B，之前的玩意没引用指向了，但是GC不会自动回收，所以浪费内存了*/
> /*上面的话只是帮助你理解，想理解透彻，还是得将来结合字符串常量池来理解啊，不用着急，你现在才学多少东西啊，慢慢来，未来在向你走进.2022-3-17*/
> ```
>
> 经过我反复翻码，发现StringBuffer每次使用时都需要先new一个对象，new对象的同时会生成一个默认16长度的**可变数组**，而以后的append方式都是在该数组基础上进行的，所以其实只是创建了一个数组，并且这个数组长度可变罢了
>
> 而String是这样的，你每次写一个字符串常量，都会new一个对象
>
> 像这样
>
> ```java
> String s1 = "111";
> String s1 = "222";
> /*String是可以反复赋值的，但是我们为什么讨厌呢？本质上两个点，第一个点，就是你这样一通操作下来，创建了两个对象，而那个"111"因为你让s1指向了"222"，所以导致没有对象指向它，而且字符串常量池的内容是不会被GC回收的，所以你浪费了内存，第二个点，就是，我们说的字符串无法更改，是字符串啊老铁，不是说这个s1无法更改，我们的意思是这个"111"字符串是无法更改的，即你无法删除，无法在在其后面追加，你如果想追加一个2在最后面，只能new一个对象，内容是"1112"，然后让s1指向这个新对象，那么之前创造的"111"的坑是不是就浪费了呢*/
> ```
>
> 
>
> 关于StringBuffer的具体实现看下面
>
> ![image-20220316233710995](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316233710995.png)
>
> ![image-20220316233023874](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316233023874.png)
>
> ![image-20220316232920155](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316232920155.png)
>
> ![image-20220317152700331](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317152700331.png)
>
> 但其实说白了最核心的原因还是String的数组是final类型的，那个引用是不能指向其他地方的，而我StringBuffer的数组是可变的，可以指向其他地方的（数组是不能改个下标扩容的，只能拷贝到新数组）
>
> ![image-20220316232908572](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316232908572.png)
>
> ![image-20220316234044326](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316234044326.png)
>
> ![image-20220316234058012](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220316234058012.png)

##### （22）StringBuilder(和StringBuffer有区别)

![image-20220317002959630](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317002959630.png)

### 三、包装类

#### （1）基本概念

说白了就是为了处理那8种基本数据类型而包装好的类，因为你这些类型不能和那个Object类型交互嘛

![image-20220317003809810](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317003809810.png)

#### （2）分类

![image-20220317003932752](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317003932752.png)

#### （3）Integer类型（int类型的包装类）

```java
//把基本数据类型转换为引用数据类型，此所谓装箱
Integer i = new Integer(321);
System.out.println(i);
//把引用数据类型转换为基本数据类型，此所谓拆箱
float f = i.floatValue();
System.out.println(f);
```

![image-20220317092845551](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317092845551.png)

#### （4）构造方法

当你println Interger包装类型的时候，其实你打印的那个变量里面的toString()方法重写了，所以打印出来就是一个字符串，而不是转换成一个地址

（我经过测试发现，你打印8种基本数据类型的时候，没有调用toString()方法，而你打印引用类型的时候就默认调用了该方法，估计有方法重载的因素在，所以上面你打印一个Integer类型的变量的时候也会调用toString()方法，但是不用担心，SUN公司早帮你重写好了

![image-20220317093205290](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317093205290.png)

#### （5）自动装箱和自动拆箱

![image-20220317185748980](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317185748980.png)

![image-20220317185736076](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317185736076.png)

#### （6）注意事项，关于整数型常量池

Java为了提高程序的编译效率，把【-128-127】之前的所有包装对象提前创造好，再放到一个方法区的“整数型常量池”当中，这个池子里面的数据不需要再new了，直接从整数型常量池取出来，如下面的图示，a和b对象的地址一样的，因为都指向了同一个对象（类加载点的时候已经出现了很多对象了）

![image-20220317195138884](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317195138884.png)

![image-20220317195931152](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317195931152.png)

#### （7）经典异常

![image-20220317200450044](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317200450044.png)

#### （8）Integer类里面的方法

##### ①parseInt（把字符串转为整形）

![image-20220317200929302](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317200929302.png)

![image-20220317201035671](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317201035671.png)

##### ②十进制转换其他进制的方法

![image-20220317201632200](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317201632200.png)

#### ③int Integer String三种数据类型之间相互转换

![image-20220317203839697](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317203839697.png)

```java
String s1 = "11";//这里是字符型转换为整形
int i1 = Integer.parseInt(s1);//注意要调用Integer里面的方法
System.out.println(i1 + 1);

String s2 = 10 + "hh";//这里是整形加上""，一个字符串加一个整形自动转换了String类型了
System.out.println(s2 + 2);//这里就直接是字符串的拼接了

Integer i2 = 1000;//这里就是自动封箱了了
int i3 = i2;//自动拆箱了

Integer k = Integer.valueOf("111");//这里就是把字符型转换为Integer类型

String l = String.valueOf(k);//这里就是把Integer类型转换为String类型
```

### 四、日期处理

##### （1）打印当前日期时间

```java
/*我不清楚下面操作的具体原理，调用了什么类，什么操作，但是先记住吧，打印时间就下面的代码*/
//import java.util.Date;//下面的操作要导入左边的包
Date nowTime = new Date();

//import java.text.SimpleDateFormat;//下面的代码要导入左边的包
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");

String nowTimeStr = sdf.format(nowTime);
System.out.println("当前日期时间为：" + nowTimeStr);
```

![image-20220317210700058](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317210700058.png)

![image-20220317210724602](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220317210724602.png)

###### 日期格式化

看下面知道个大概就行了

```java
SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss SSS yyyy-MM-dd ");//2022-03-18 09:42:44 477
SimpleDateFormat sdf1 = new SimpleDateFormat("HH:mm:ss SSS yyyy-MM-dd ");//09:43:16 609 2022-03-18 
```

##### （2）计算1970年到现在多少毫秒数

```java
        //import java.util.Date;//下面的操作要导入左边的包
        Date nowTime = new Date();

        //import java.text.SimpleDateFormat;//下面的代码要导入左边的包
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");

        String nowTimeStr = sdf.format(nowTime);//需要先new对象
        System.out.println("当前日期时间为：" + nowTimeStr);

        long nowTimeMillis = System.currentTimeMillis();
        System.out.println("1970年1月1日00.00.00 000到现在过了");
        System.out.println(":" + nowTimeMillis / 100 + "秒");
```

![image-20220318001450730](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220318001450730.png)

##### （3）Date构造方法输入不同参数的不同

```java
/*讲一下我对时间方法的理解，首先有一个Date类，先创建一个Date类型的对象，暂时不知道干啥，然后
再new一个SimpleDateFormat类型的对象，然后调用里面的方法参数是Date类型的，但是这又跟Date构造方法输入
的参数有关，这玩意就看下面吧*/
Date nowTime = new Date();
Date time = new Date(1);//输入了参数之后，时间起始就是过了一毫秒的时候

//import java.text.SimpleDateFormat;//下面的代码要导入左边的包
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");
String nowTimeStr1 = sdf.format(time);//需要先new对象，需要new对象，需要new对象！！！！
System.out.println("输入参数后的日期时间为：" + nowTimeStr1);//上面的Date输入参数后就会打印当时1970你所在时区的时间

/*下面的代码是打印昨天你此时的时间*/
Date time2 = new Date(System.currentTimeMillis() - 1000 * 60 * 60 * 24);//传入一个参数，这个参数是作为开始的毫秒
String strTime2 = sdf.format(time2);
System.out.println(strTime2);


String nowTimeStr = sdf.format(nowTime);//需要先new对象
System.out.println("当前日期时间为：" + nowTimeStr);
```

### 五、数字处理

##### （1）将数字转成字符串，并且按照指定格式输出

![image-20220318095048900](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220318095048900.png)

![image-20220318094950395](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220318094950395.png)

##### （2）BigDecimal

![image-20220318145731147](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220318145731147.png)

#### （3）产生随机数

```java
//要先导下面的包
//import java.util.Random;

//创建随机数对象
Random random = new Random();

//随机产生一个int类型范围内的数字，这个是Int类型范围的随机数字，可以显示负数的哦
int num1 = random.nextInt();
System.out.println("产生的第一个随机数为：" + num1);

/*这里在nextInt里面输入了一个数字，表示了一个范围，即[0,bound)，左闭右开哦*/
int num2 = random.nextInt(101);
System.out.println("在有bound的情况下，随机显示的数字为：" + num2);
```

![image-20220318150306198](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220318150306198.png)

### 六、枚举类型

暂时只发现了一个作用，就是返回值可以控制在枚举范围内

##### （1）为什么使用

![image-20220319003046734](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319003046734.png)

##### （2）如何使用

```java
public class hhh {
    public static void main(String[] args) {
        System.out.println(Season.SPRING);
    }
}

enum Season{
    SPRING, SUMMER, AUTUMN, WINTER;/*建议全使用大写符号，感觉跟常量一个赶脚，但是看你自己咯*/
}
```

![image-20220319003213000](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319003213000.png)

![image-20220319003206423](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319003206423.png)

![image-20220319003056425](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319003056425.png)

##### （3）建议在颜色季节方面使用枚举

具体的使用到的环境，我建议你去看c语言的，我有详细说

### 七、异常

##### （1）基本定义

下面蓝色部分就是抛出异常

![image-20220319004800794](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319004800794.png)

![image-20220319172832326](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319172832326.png)

##### （2）理解

异常也是以类的方式出现的，不要多想

![image-20220319010502235](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319010502235.png)

##### （3）UML

![image-20220319110225630](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319110225630.png)

##### （4）异常的继承结构

这里我只强调几个点，具体的去看下面的视频吧

第一，异常其实也是类来着的，然后很多异常的类其实都有子类或者父类，总之异常是有继承关系的，不过如其他类一样，他们的**爹都是Object类**，但是，他们还有个独有的祖先，Throwable类，所以不用觉得异常很特别，其实你大可以把它们看做稍微特殊一点的普通类

第二，不管是异常还是错误，都是可抛出的

第三，所有的错误只要发生，Java程序只有一个结果，那就是终止程序的运行。退出JVM，**错误是不能处理的**

第四，运行时异常，所有的RuntimeException及子类都属于运行时异常

第五，编译时异常，所有Exception及其子类都属于编译时异常

第六，编译时异常不是在编译阶段发生的，编译时异常表示必须在编写程序的的时候预先对这种异常进行处理，如果不处理，编译器报错。而运行时异常在编写程序阶段，你可以选择处理或者不处理。看到一种说法说编译时异常要做你编译程序前，即编辑的时候处理，不然程序会报错

https://www.bilibili.com/video/BV1Rx411876f?p=635&t=278.0

![img](https://img-blog.csdn.net/20180920165502957?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21pY2hhZWxnbw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

##### （5）编译时异常和运行时异常

**（1）异常都是发生在运行阶段的，编译时候是不会发现异常的**
因为异常也是一个类，而它抛出异常的时候，其实需要new一异常对象的，但是程序只有在编译阶段才可以new对象，所以只有运行阶段才会发生异常，发生异常说白了就是new一个异常类的对象了嘛

![image-20220319134042053](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319134042053.png)

（2）

> - 编译时异常：在编译某个程序的时候，有可能会有这样那样的事情发生，比如文件找不到，这样的异常就必须在编译的时候处理，如果不处理编译通不过。个人理解就是你写了个玩意，但是可能异常，所以你得在编译时处理，感觉就是编辑的时候处理一下
> - 运行时异常：就是程序员所犯得错误，需要回来修改代码。个人理解就是，你犯了个逻辑上的错误，运行不了，赶紧回来改

![image-20220319142845249](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319142845249.png)

![image-20220319143223217](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319143223217.png)

编译器：逻辑错误关我屁事，但是你tm居然连我编译的需要注意的异常都不处理一下，看不起我是吧，代码给你循咯

![image-20220319155803616](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319155803616.png)

##### （6）Java对异常的处理原理

一个方法里面嵌套了方法再嵌套，假设最底层方法遇到了异常，JVM就会帮你用throw抛一个异常，然后一直往上抛，直到你出问题的地方，如果你处理不了这个异常，那么还得往上抛，上面处理不了继续抛，直到遇到了能处理的，感觉像块烫手的山芋一样哈哈，能处理的那个方法就会捕捉它，然后就是我还没学到的处理操作了吧

![image-20220319145936785](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319145936785.png)

![image-20220319151144014](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319151144014.png)

![image-20220319150432981](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319150432981.png)

##### （7）对异常的处理方式

![image-20220319151541645](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319151541645.png)

###### ①实例分析

这里结合实例来讲一下抛出

情况请看下图

第一张图，为什么编译会报错呢，这就是我说的编译时异常，你调用的构造方法，声明的时候throw了异常，而且经过你给它层层寻亲，发现它的祖先是IOException，那么它的确是编译时异常了
而编译时异常需要，程序员在编写程序的时候对他进行处理，而我这里既没有抛出也没有捕捉，属于是没处理了，编译器自然报错

![image-20220319152830137](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319152830137.png)

第二张图，就总结一下抛出异常的方式吧
第一，抛出相同类的异常，如果是同一辈分的异常可不敢乱抛
第二，可以抛出它长辈类的异常，反正包括它自己嘛
第三，可以一伙皮抛出多个异常，，**记得逗号隔开**，但怎么着也得报错它自身嗷

![image-20220319152814076](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319152814076.png)

###### ②注意

（1）**异常类的toString()类也是重写了的**，println打印的应该是错误类型

（2）不建议在main方法里面还抛出异常，因为你再抛就个JVM了，直接给你程序结束了，建议用try-catch捕捉了

![image-20220319155421472](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319155421472.png)

##### (8)对try-catch的深入理解

个人感觉作用就是抓住了异常，你记得遇到了编译时异常的不会向下执行了对吧，只能往上抛或者捕捉，但是向上抛也只是抛到了调用改方法的方法那里去，出现异常的方法后面的代码还是不会执行，而此时如果你给它捕捉了，代码还是可以往下执行的，虽然会给你说出了什么错，但是还是义无反顾向前冲得死捏

```java
try {
    m3();
    System.out.println("执行到这里");
 }catch(FileAlreadyExistsException e){
    System.out.println("11");//搞了这段代码后它会给我追踪异常在堆栈的信息，注意找错的时候就去找自己写的，然后最上面那个一般
  }catch(FileNotFoundException hh){//都是错的源头
    System.out.println("22");
  }
}

public static void m3() throws FileNotFoundException, FileAlreadyExistsException{
    new FileInputStream("");
}
```
![image-20220319165057543](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319165057543.png)

![image-20220319164318084](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319164318084.png)

##### (9)异常常用方法，重要！！！

![image-20220319171633709](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319171633709.png)

**第一个，printStackTrace**
用于打印异常堆栈追踪信息

```java
    try {
        m3();
        System.out.println("执行到这里");
    }catch(FileAlreadyExistsException | FileNotFoundException e){
        e.printStackTrace();//搞了这段代码后它会给我追踪异常在堆栈的信息，注意找错的时候就去找自己写的，然后最上面那个一般
    }					 //都是错的源头		
}

public static void m3() throws FileNotFoundException, FileAlreadyExistsException{
    new FileInputStream("");
}
```

![image-20220319174333654](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319174333654.png)

**第二个，getMessage**

用于打印异常的简单描述信息

```java
    try {
        m3();
        System.out.println("执行到这里");
    }catch(FileAlreadyExistsException | FileNotFoundException e){
        e.printStackTrace();/*注意一个细节，因为跟线程有关，所以上面的追踪信息可能还在后面才打印出来，这个跟线程有关，暂时不用搞懂*/
        System.out.println("下面是异常的简单描述：");
        System.out.println(e.getMessage());/*这里会打印简单的错误描述信息，这里也是重写了的哦*/
    }
}

public static void m3() throws FileNotFoundException, FileAlreadyExistsException{
    new FileInputStream("");
}
```

![image-20220319180746169](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319180746169.png)

##### (10)finally

###### ①基础理解

所以你打开文件一定要关闭文件，那么就记得finally嗷铁子

```java
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        //创建输入流对象
        fis = new FileInputStream("");
        //开始读文件

        String s = null;
        s.toString();//此处出现空指针异常

        //流使用完是需要关闭的，因为流是占用资源的
        //哪怕上面的程序出现bug我也必须要把流关闭
        //但是如果放在这里的话，可能流关闭不了
        //fis.close();
    }catch(FileNotFoundException e){
        e.printStackTrace();
    }catch(IOException e){
        e.printStackTrace();
    }catch(NullPointerException e){
        e.printStackTrace();
    }finally {
        /*close操作在这里执行比较保险，而且finally里面的代码是一定会执行的，即使try里面出现了异常*/
        System.out.println("进入了finally");
        if (fis != null) {
            try {
                fis.close();//这个地方我还是得用一遍try-catch，因为这方法，居然会抛出异常，那我就给它处理咯
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

补充个贼有意思的东西

你在try里面写了个return，但是程序照样还是会先执行try，再执行finally，再执行try里面的return，很离谱啊哈哈哈

```java
try {
    System.out.println("执行到try里面了哟");
    return;
} finally {
    System.out.println("执行到finally里面了哟");
}
/*
执行到try里面了哟
执行到finally里面了哟
*/
```

![image-20220319183838686](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319183838686.png)

但是finally也有怕的

```java
try {
    System.out.println("执行到try里面了哟");
    //退出JVM
    System.exit(0);//强如finally也怕这个语句
} finally {
    System.out.println("执行到finally里面了哟");
}
/*
执行到try里面了哟
*/
```

###### ②易错点

注意下面的代码最后打印出来的i应该还是100

要问具体是为什么请看下面的下面的图片
但是这里其实我们也可以从最基础的语法去理解
第一，咱们学到这几门语言叫强调了**“自上而下”**的原则，你看看下面的代码，明明i初始化为100，然后返回，i++也只是在return后面进行++操作的，所以按照逻辑，i就应该等于100啊
第二，遇到了return就结束，所以i就铁定了等于100
第三，但其实i确实是发生过++操作的，但是返回值也确实是100
请结合我上面说的话和下面的图片来理解，正是为了满足自上而下，所以下面图片反编译后的代码才这样操作的

![image-20220319185257628](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319185257628.png)

![image-20220319185529066](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319185529066.png)

#### （11）final和finally和finalize的区别

##### （12）自定义异常

```java
public class test01 {
    public static void main(String[] args) {
        MyException userNameException = new MyException("用户名输入有误！");//创建了异常对象

        userNameException.printStackTrace();//打印异常栈追踪信息

        System.out.println(userNameException.getMessage());//重写toString方法，打印错误提示
        
    }
}

class MyException extends Exception{//这里两个方法，一个无惨构造，一个String类型的有参构造，我也不知道为啥，记住完事了
    public MyException(){

    }

    public MyException(String s){
        super(s);//这个玩意很重要，调用超类Exception里面的不知道的方法才能打印出我new的时候输入的字符串
    }
}
```

![image-20220319191200125](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319191200125.png)

![image-20220319191456871](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319191456871.png)

##### （13）自定义异常的使用

两个点：

①throw和throws是不同的哦，你写了throw还是得写throws因为，这个throw相当于调用了抛这个动作，throw实现了抛给上一级并且告诉它是什么异常这个操作
②我们抛出异常的目的就是让其他地方也知道这里出了异常而我们抛出去的异常类型，就是告诉这玩意的上一级我们可能出现的异常

```java
public class test01 {
    int i = 0;
    public static void main(String[] args) {
        H h = new H();
        //注意你下面写的内容，因为可能出现异常嘛，那么你肯定要对下面丢上来的异常进行捕捉
        try{
            h.push();
            h.push();
            h.push();
            h.push();
        }catch(MyException ec){
            ec.printStackTrace();
            System.out.println(ec.getMessage());
        }
/*com.lzo.test.hello.MyException: i太多了捏
	at com.lzo.test.hello.H.push(test01.java:35)
	at com.lzo.test.hello.test01.main(test01.java:18)
i太多了捏*/
    }


}

class H{
    int i = 0;
    public void push() throws MyException {
        i++;
        if(i > 3){
            //System.out.println("i大于三了");
            MyException a = new MyException("i太多了捏");//这个是个编译时异常，但是系统不会吊你，因为此时系统还是把这玩意当做一个普通对象
            /*出现了问题我就得抛出去嘛，但是你如果像下面一样写的话，就属于是自己手动抛出异常，但是又自己捕捉了，而我们抛出异常的目的就是让其他地方也知道这里出了异常
            而我们抛出去的异常类型，就是告诉这玩意的上一级我们可能出现的异常*/
            /*try {
                throw a
            } catch (MyException e) {
                e.printStackTrace();
            }*/
            //throw和throws是不同的哦，你写了throw还是得写throws因为，这个throw相当于调用了抛这个动作，throw实现了抛给上一级并且告诉它是什么异常这个操作
            throw a;//此时就应该抛出去了，不应该捕捉
            //也可以如下面简化一下写
            //throw new MyException("i太多了");
        }
    }
}
class MyException extends Exception{//这里两个方法，一个无惨构造，一个String类型的有参构造，我也不知道为啥，记住完事了
    public MyException(){

    }

    public MyException(String s){
        super(s);//这个玩意很重要，调用超类Exception里面的不知道的方法才能打印出我new的时候输入的字符串
    }
}
```
