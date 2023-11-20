[TOC]





# 1.

# Java语言的发展史



![image-20220125004603465](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220125004603465.png)



# 2.

# Java语言特性【开源、免费、跨平台、纯面向对象】

####   *简单性：

​		这是相对而言的，因为java中不支持多继承，而c++支持多继承（多继承比较复杂，后面再做了解，这里记住就好）

​		java屏蔽了指针的概念（赢！）

​		java语言底层是**C语言实现的，不是c++**

####   *面向对象：

​		java是纯面向对象的，更符合人的思维模式，更便于理解。

####   *可移植性：

​		可移植性指的是一次编译，多次运行。

​		即java程序能做Windows操作系统上运行，

​		不做任何修改，也可以把它直接放到Linux操作系统是运行。

​		可移植性也称作跨平台

​		原理：因为两个操作系统执行指令的方式不一样，所以Java程序不能直接和操作系统打交道，所以SUN的团队创造了Java虚拟机，即JVM（Java Virtual Machine），不同的操作系统对应不同的虚拟机，虚拟机的作用个人认为就相当于翻译官的感觉，我们在虚拟的电脑编写Java程序，然后再通过“翻译”，在不同的操作系统运行。

####   *多线程：

####   *健壮性：

​		和自动垃圾回收机制有关，自动垃圾回收机制简称GC机制。

​		Java语言运行过程中产生的垃圾是自动回收的，不需要程序员手动释放。（类似于malloc开辟动态内存，不需要free）

####   *安全性：

  ......

# 3.

# 关于Java程序的加载和执行

![image-20220126152802287](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220126152802287.png)

左边方格代表编译阶段 右边代表运行阶段

​	*Java程序的运行包括两个非常重要的阶段

​		**-编译阶段**

​		**-运行阶段**

#### 	***编译阶段**

​		-编译阶段主要的任务是检查Java源程序是否符合Java语法

​		 符合Java语法则能够生成正常的字节码文件（xxx.class）

​		 不符合则无法生成（注：字节码文件不是二进制文件，二进制文件可以直接放到操作系统运行的）

![image-20220127024706020](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127024706020.png)

![image-20220127025326509](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127025326509.png)



#### ***运行阶段**

![[image-20220127025900340]()](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127025900340.png)

![image-20220127033252603](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127033252603.png)

![image-20220127042437193](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127042437193.png)

![image-20220127052254806](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127052254806.png)

![image-20220127060028626](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127060028626.png)

> 原理部分和classpath的讲解（不推荐使用）

![image-20220127063727245](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127063727245.png)

![image-20220127064002023](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127064002023.png)

![image-20220127064058980](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127064058980.png)

（上面对环境变量的修改是拿来面对这种情况的：如果别给了我们class文件那么我们就需要靠指定的路径即otherpath去找到，而“.”则表明我们也可以同时找当前路径，两者结合挺好的）



# 4.

# Java程序的语法

#### 1.关于注释的写法

![image-20220127071406822](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220127071406822.png)

#### 2.关于代码的解释

![image-20220128203711345](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220128203711345.png)

```java

public class hello {//此处代表声明/定义了一个“公开的”的“类”，“类名”叫hello
    //两个大括号之间的内容即为“类体”
    
          //下面的整个代码被称作：main方法（程序的入口，就像C语言的主函数） 
    	 //JVM在执行程序的时候，会主动去找这样的一个“方法”
    	 //mian方法也被称作“主方法”
    	 //注意：方法必须放到“类体”中，不能放到“类体”的外面
    	 //下面的“args”可以改成随意的，但是不能不写，因为java需要这个标识符
  		public static void main(String[] args){//这个是入口方法
            System.out.println("Hello World!");//这行的作用就是像控制台输出一句话 就是那个DOS窗口
            System.out.println("Hello World!");
    }
    //方法1（一个类体可以写多个方法）
    //方法2
    //方法3
}
```



#### 3.关于public class和class的区别

![image-20220206004653402](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206004653402.png)

![image-20220206005214107](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206005214107.png)

![image-20220206004711432](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206004711432.png)



#### 4.关于标识符

（1）标识符可以标记什么？

类名 方法名 变量名 常量名 接口名。。。。。。

（2）什么是标识符？

就是程序员自己自己有权力命名的单词都可称作标识符（其实main也算作标识符，但是制作者把这个main锁死了，就让他代表主方法，C语言应该也是一样的，主函数和其他函数的命名也算作标识符）

（3）关于标识符的符号和命名规则

第一，标识符只能由“数字”、“字母（包括中文）”、“下划线_”、“美元$”组成。（注意：C语言中标识符的字母不包括中文，也没有“$”）

第二，不能以数字开头，且标识符之间不能用空格。但是类名后面是可以跟空格的，因为它的底层逻辑就是我找一个字符串（即标识符）然后识别到空格结束，然后我再往后去找“{”这个符号，我只要找到的是这个符号而不是其他什么符号，这个语法上就过得去

![image-20220206023755553](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206023755553.png)

第三，不能是关键字。

第四，标识符严格区分大小写，“A”和“B”是不一样的。

关于下图，如果使用控制台操作java A和java a是会出问题的，谁放前面运行谁，原因是Windows不区分大小写，A.txt和a.txt两者是不能共存于一个目录下的

![image-20220206025109491](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206025109491.png)

第五，理论上来说，标识符没有长度限制。

（4）关于命名的规范

![image-20220206031001663](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206031001663.png)



#### 5.变量

###### （1）字面量

其实在java中“数据”也被称作“字面量”，比如你println后面括号接的就可以称之为数据

![image-20220206221421552](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206221421552.png)

![image-20220206221749293](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206221749293.png)

![image-20220206222437047](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206222437047.png)

![image-20220206231600341](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220206231600341.png)

***注意，与C语言不同，Java一定是要赋值后才能使用，不存在什么默认初始化为0***
*但是很奇葩的就是我在dev上面不初始化它可以输出0，在visual studio上却不得行，报了个错*

###### （2）方法变量和局部变量

这个Java的**方法变量**有点像C的全局变量

![image-20220207000721242](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207000721242.png)

###### （3）变量的作用域

![image-20220207001428252](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207001428252.png)



##### 6.数据类型



![image-20220207034059502](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207034059502.png)

![image-20220207034304049](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207034304049.png)

引用类型有：String、类、接口......

![image-20220207034715366](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207034715366.png)

###### （1）关于二进制

![image-20220207035441903](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207035441903.png)



###### （2）关于各类数据的取值范围

![image-20220207040432032](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207040432032.png)

![image-20220207040538761](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207040538761.png)

![image-20220207041111002](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207041111002.png)



###### （3）关于字符编码

![image-20220207041349737](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207041349737.png)

![image-20220207041754131](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207041754131.png)

![image-20220207042032236](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207042032236.png)

###### （4）char（字符）类型

![image-20220207042509339](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220207042509339.png)



###### （5）转义字符

①为什么我不能直接把'\'当做一个字符打印出来，原因炒鸡简单，是因为 ' \ '，**里面的 \ 把它后面的 ' 给转义成普通字符了**，导致 ' ' 发挥不出它的作用，所以我们如果想在控制台打印出 \ ，就得写 ' \\ '，get了吗。 

 ②注意print和println的区别是后者会自动换行

③注意可以这样定义字符型

`char x = '\u4e2d'`这个反斜杠u表示后面的'4e2d'是一个字符的unicode编码 而且unicode编码是十六进制的



###### （6）关于进制

数码*权值

![image-20220221223717351](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220221223717351.png)

（注意八进制开始要写**0**，十六进制开头要写**0x**）

###### （7）类型转换相关

①自动类型转换

![image-20220221225544819](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220221225544819.png)

![image-20220221230346344](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220221230346344.png)

这里写2147483648会报错不是long类型放不下，而是它默认这个是int型，但是2147483647是int型的最大值，写的数字太大了，大出范围了

②强制类型转换

![image-20220221231918583](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220221231918583.png)

![image-20220221232151597](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220221232151597.png)

![image-20220221233709912](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220221233709912.png)

###### （8）没有超出范围的整数可以赋值给char

![image-20220223133929019](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223133929019.png)

###### （9）原码反码补码

![image-20220223152306149](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223152306149.png)

###### （10）关于byte short char类型的混合运算问题

这里补充两个知识点：
①编译器遇到你**直接把一个数据赋值给一个变量**的时候才会检测你是不是给大了或者给小了，而当你把**几个数据类型的运算表达式的值给一个变量**的时候，编译器却傻了，为什么呢？因为请看下图第14行，*编译器此时看到了加号，就知道要把两边的值加起来，但是它此时并不会检测你最终的结果有没有溢出什么的*，所以很可能你两个数加起来大于的左值能表示的最大值，当编译器不会报错，只是在运行结果中你会看到这玩意进行了一次模运算，这玩意很难受，而编译器这里编译不通过跟第二条知识点有关，混合运算的byte、char、short都转换为了int，但是却赋值给了short，编译器这个时候就会叼你了
②当byte、char、short三种类型做混合运算时，都是**全部转化为int型进行运算**，所以你看下面的图片，byte型+char类型赋值给int型会被编译器吊，但是你直接拿个数字赋值它却不会出问题

![image-20220223154632615](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223154632615.png)

下图的结论：多种数据类型做混合运算的时候，最终结果的类型是容量最大的那个数据类型
**注意：但是byte、short、char除外，只要他们做运算（加减乘除）的时候，他们会各自转化为int来做运算，而且哪怕byte加byte或者byte + 1这种情况**

![image-20220223160921524](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223160921524.png)

**这里补充一个知识点**：以前我们遇到int a = 10 / 3;的时候下意识说等于3，但是你有没有想过为什么呢？因为10 和 3 都是默认的int类型，而你把两个int类型进行运算，最终肯定得到的也是int类型啊，cpu算出来等于3.333，但是最终还是会取整，得到最终结果3

![image-20220223161422640](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223161422640.png)

###### （11）浮点型数据

long类似8个字节
float类型4个字节
**但是在容量方面，我们认为float类型的容量远远大于long类型的容量，看下图**

**注意：任意一个浮点型数据都比整形的空间大**
float容量 > long容量
![image-20220223165357812](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223165357812.png)

![image-20220223164833959](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223164833959.png)



注意，与整形数据类似，**浮点型数据默认为double类型**，所以当你想把一个浮点型数据当做float类型处理的是，你最好在数据后面写一个**f**或者写个**F**，或者强转一下

![image-20220223165910266](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223165910266.png)

###### （12）布尔类型

在Java中，boolean类型只有两个值，不像C语言，也就说Java中你给boolean类型的赋值只能赋值true或者false，但是在C语言中，你赋值true和false和1和0都是可以的（因为在Java中它会觉得你把1这个整形赋值给了一个boolean型，类型不兼容）

![image-20220223180856993](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223180856993.png)

![image-20220223211041451](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223211041451.png)

###### （13）基本数据类型转换规则

①八种数据类型中（byte.short.int.long.float.double.boolean.char）只有boolean类型是不能进行自动或者强制类型转换的
②如果整形字面量（数据）没有超出byte，short，char的取值范围，那么可以直接把数据赋值给这种数据类型的变量
③小容量往大容量的数据类型转化称为自动类型转换，容量由小到大的排序时：byte < short(char) < int < long < float < double
尽管，short和char都是两个字节，但是char能表示的正整数更大，因为char是无符号类型（unsigned类型的）
④大容量转化为小容量，需要使用强制类型转换，运行的时候可能造成精度损失，谨慎使用
⑤仅限byte，short，char这三者数据类型，进行混合运算的时候会先转化为int型的数据（哪怕是byte加byte型的也是这样）
⑥多种数据类型混合运算时，都会各自转换成容量最大的数据类型来运算

![image-20220223211517724](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223211517724.png)



#### 7.运算符

###### （1）运算符分类

![image-20220223222808243](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220223222808243.png)

###### （2）关于自增符号++和自减符号--和一个有意思的问题

![image-20220224002411463](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224002411463.png)

**下图是一个有意思的关于i = i++;这个问题**

如果考到了还是随缘吧

![image-20220224154945443](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224154945443.png)

###### （3）关于关系运算符

![image-20220224002822557](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224002822557.png)

###### （4）关于逻辑运算符

**逻辑运算符两边都要求都是布尔类型，最终的运算结果也是布尔类型（注意：布尔类型指的就是true和false）**

![image-20220224003924351](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224003924351.png)

关于短路与和短路或

![image-20220224004918043](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224004918043.png)

###### （5）赋值运算符

注意如下代码：

```java
byte a = 0;
a += 1;
a = a + 1;
/*上面两行看似都是加一，实际上区别很大，因为第二行加1时属于混合运算了，那个1其实是整形，那你这样搞其实属于类型不兼容了
再看第一行当你自增的时候其实是a = (byte)(a + 1)明显是强转的，所以不会报错*/
```

![image-20220224011038112](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224011038112.png)

###### （6）三目运算符

这里补充两个知识点：①在Java语言的开发中，三目运算符单独拎出来并不算一个完整的语句，所以我们使用三目运算符的时候，一定要有一个左值去接收此运算符得到的值。但C语言中并非如此，C语言可以直接写一行 a > b? 1: 2; 这里就不会报错
②那就是当你用三目运算符赋值的时候，那两个表达式能赋给左值都最好是相同数据类型，不然小容量会自动转化为大容量，可能挺奇怪的，还有大容量转化为小容量出现类型不兼容这种情况
③就是这种情况 char x = a > b? 'a': "a"; 此时也会报错，毕竟你这出现把一个字符串赋值给一个字符的类型不兼容的情况了，但是我们可以这样写 System.out.println(a > b? 'a': "a"); 具体原因我也不知道，好像这个System很强大，什么数据类型都可以存储

![image-20220224013525933](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224013525933.png)

![image-20220224013554953](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224013554953.png)

###### （7）字符串连接运算符以及引用数据类型String的使用

![image-20220224020735659](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224020735659.png)

![image-20220224021357039](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224021357039.png)



#### 8.从键盘接收用户的输入

若在首行写一个：

```java
import java.util.Scanner;
```

就可以不必写 “java.util.” 了

![image-20220224234810598](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220224234810598.png)



#### 9.控制语句

###### （1）控制语句的分类

![image-20220225000856652](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225000856652.png)

###### （2）if语句

注意和C语言不同的是，if的条件判断式只能是布尔表达式（true或者false或者关系运算符得出来的布尔值），也就是if(1)，它会给你报错int型的1不兼容，而if(a = b)也是不行的，不会像C一样哪怕不合理还会执行下去，但是if(a = true(or)false)这样写不会报错，因为类型是兼容的，但是这个是fw代码

![image-20220225002833130](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225002833130.png)

![image-20220225004119516](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225004119516.png)

![image-20220225004234432](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225004234432.png)

![image-20220225004930089](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225004930089.png)

这里教你一下怎么看哪行报错

![image-20220225010335966](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225010335966.png)

这里主要让你注意对if里面判断条件的优化，没必要的判断尽量别写，因为你多写个什么&或者&&看的人眼睛乱

![image-20220225011227711](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225011227711.png)

下图是对上图代码的优化改良，不得不说，真的是学无止境啊！
嵌套是指if或者else语句中还有if和else语句
并列平行是指if-else if这种操作

![image-20220225012017988](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225012017988.png)

###### （3）switch语句

居然啥都能放进去

![image-20220319002905548](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220319002905548.png)

别忘了break啊兄弟!!!

注意，这里跟C语言又略有不同，这里的switch括号里的值可以是整形，也可以是字符串String型(JDk8之后才支持字符串的)，甚至还可以是byte，short，char类型，因为这三个小容量遇到大容量会自动类型转换

![image-20220225013720583](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225013720583.png)

![image-20220225014149608](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225014149608.png)

![image-20220225014828572](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225014828572.png)

下图稍微case的合并就是利用case的**穿透现象**

![image-20220225015038059](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225015038059.png)

###### （4）for语句

for(初始化表达式; 条件表达式; 更新表达式);

![image-20220225232147395](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225232147395.png)

当你在for循环里面写k++的时候，注意放开头和末尾的区别

![image-20220225233834322](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220225233834322.png)

循环嵌套

![image-20220226000729746](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220226000729746.png)

![image-20220226000500814](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220226000500814.png)

上面30-33的代码很有意思，k先执行一次，然后i = 10离开内层循环，然后k执行第二次的时候，i没有初始化表达式为0了，所以直接不满足条件表达式，为false，直接离开循环了，这个玩意估计拿去凑行数的吧

###### （5）while语句

注意和C语言不同，这个里面的条件只能是布尔表达式

![image-20220226003029888](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220226003029888.png)

##### （6）有想过为什么大括号后面不写分号吗

很简单，因为大括号带有一种结束的含义或者说作用，而其他语句如没有大括号的就需要带;来画个句号让其结束，好比do-while的while();的分号是因为小括号没有结束的功能，所以我加个分号帮助它结束，当然结构体的{};这里属实给我整不会了，可能这玩意像个数组吧，{}里面都是内容，但是你最后还是得画个句号（;）

###### （7）do-while语句

![image-20220226005527246](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220226005527246.png)

其实从下面的代码可以看出
当一个变量脱离循环的时候，必然达到了不满足条件的值，所以下面的++i其实表示着i变量的一点一点的变化，并且为10的时候识别然后脱离循环，而i++这玩意就是比i钝一步，所以表示的也比i钝一步，但是这个也和do-while有关系，所以遇到这种循环时，得小心谨慎啊，但是总归循环10次，所以遇到了**不管它怎么变化就抓住循环几次这个点**不放就行了

![image-20220226013459003](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220226013459003.png)



###### （8）break转向语句

![image-20220226015448901](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220226015448901.png)

###### tips：break终止指定的循环

![image-20220226021923841](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220226021923841.png)

###### （9）continue语句

![image-20220226022611875](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220226022611875.png)

###### tips：continue也可以指定循环



#### 10.方法

###### （1）为什么我们要使用方法？

提高代码的“复用性”

![image-20220227031003160](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227031003160.png)

这个好像不需要声明，只要你写在同一类体里面，顺序是无所谓的

![image-20220227031518177](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227031518177.png)

###### （2）方法的定义

为了满足需求，抽象出来的特定功能，依靠业务逻辑代码实现

![image-20220227032029375](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227032029375.png)

###### （3）方法体的语法机制

![image-20220227032753524](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227032753524.png)

![image-20220227033449636](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227033449636.png)

![image-20220227034616192](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227034616192.png)

![image-20220227034527829](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227034527829.png)

![image-20220227035204359](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227035204359.png)

![image-20220227035330392](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227035330392.png)

记得调用方法的格式，是类名.方法名();

![image-20220227044346356](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227044346356.png)

###### （4）方法的调用

最好还是把类名带上，这样可以实现跨类调用什么的

![image-20220227130549780](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227130549780.png)

其他方法也可以调用方法

![image-20220227131116462](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227131116462.png)

###### （5）return和break

![image-20220227131403267](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227131403267.png)

###### （6）缺少返回语句

不能怎么写，有返回值的，你把return放到if语句里面，编译器没那么聪明，if括号里面的是布尔表达式，它也不确定你有没有返回值，所以会报错，但是C语言可以这么写。。。

![image-20220227132607409](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227132607409.png)

修改的第一种方案：但是可以写个if-else，很离谱啊，编译器会觉得你写个if-else保证有一个分支执行，所以给你通过了

![image-20220227132934926](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227132934926.png)

修改的第二种方案：最后补一个return咯

![image-20220227133058881](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227133058881.png)

注意：同一个代码块作用域，return下面是不能放语句，编译器会认为你写的代码无用，太智能了，也就是说编译器会给那些完全没有执行机会的语句报错

![image-20220227133311574](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227133311574.png)

三目运算符来搞定返回

```java
boolean flag = true;
return flag? 1: 0;//三目运算符可以让代码变得很简练
```

#### 11.结构

###### （1）JVM的内存结构

方法区是在运行时期产生的，跟编译阶段没关系

![image-20220227212708589](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227212708589.png)

###### （2）栈数据结构

![image-20220227213854251](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227213854251.png)

###### （3）方法执行时内存变化

栈中储存什么？方法运行过程中产生的内存，以及栈会存储方法中的局部变量

![image-20220227220107090](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227220107090.png)

栈帧永远指向栈顶部的元素（栈顶元素具有活跃权）

![image-20220227220424093](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220227220424093.png)

#### 12.方法重载

![image-20220301205128265](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301205128265.png)

方法重载（overload）的大概就是，你可以写同样的方法名，填写不同类型的参数，这样就可以，同一方法名sum可以让多种不同数据类型相加。原理，是java编译器区别方法先看方法名，如果名字一样，看参数类型，然后就被区分了。

![image-20220301205353515](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301205353515.png)

上面叫方法不同
第一，方法参数个数不同
第二，方法类型不同
第三，方法顺序不同（这玩意给我整不会了，sum(int x, Long y)和sum(Long y, int x)其实是不同的。。但是sum(int x, int y)和sum(int y, int x)是相同的哦）顺序不同其实也是类型不同，你比较的参数的时候像下面一样嘛，两张纸重叠

我这里好像get到了一个比较是否overload的tip，你把两个方法像两张纸似的重叠，若除了参数的名称有所不同，那就是方法重载、方法重写

![image-20220301210431363](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301210431363.png)

![image-20220301210654627](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301210654627.png)

特别注意！！！
①**返回值不同**的同名同参的方法名也是**不能**发生方法重载的的，不是重载而是重复，你想想嘛，有返回值的方法你不接收返回值，m1();m1();左边两个返回值是不同，但是我不接收返回值，编译器怎么知道我调用的啥。
②**修饰符列表**也跟方法重载**无关**

![image-20220301214946630](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301214946630.png)

其实println()也是个在方法重载的条件下发生的，也就是println()也是个方法

![image-20220301220757213](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301220757213.png)

###### （1）代码包装

这个叫一个简单的包装，就是你的类包了别人写的大小

说白了就是在同一个目录下我再写一个类.java，然后编译生成字节码文件，即.class，然后我就可以在一个java文件中调用另一个java文件，只需要注意我写的类名就行了，即s.p();类名加点方法名，而且我把**java文件删了，只要有个class文件**它也照样可以调用

![image-20220301225701675](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301225701675.png)

#### 13、递归

###### （1）基础

![image-20220301231359401](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301231359401.png)

![image-20220301231518241](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301231518241.png)

###### （2）扩展延伸

![image-20220301231924700](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301231924700.png)

#### 14、面向对象

###### （1）面向过程和面向对象区别

![image-20220301235613121](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301235613121.png)

![image-20220302001356161](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302001356161.png)

###### （2）面向过程

![image-20220301235912785](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220301235912785.png)

![image-20220302000414491](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302000414491.png)

###### （3）面向对象

![image-20220302000658191](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302000658191.png)

![image-20220302001240497](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302001240497.png)

OOA：面向对象分析
OOD：面对对象设计
OOP：面对对象编程

面向对象三大特征：封装，继承，多态

![image-20220302002631767](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302002631767.png)

###### （4）类和对象

![image-20220302004345355](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302004345355.png)

通过类创建对象称为实例化，而对象的别称是实例

![image-20220302004758268](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302004758268.png)

![image-20220302011544476](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302011544476.png)

![image-20220302011922021](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302011922021.png)

定义一个类

![image-20220302012308597](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302012308597.png)

###### （5）程序员在Java程序中是桥梁

![image-20220302013055384](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302013055384.png)

###### （6）类的定义

其实吧属性就是指的数据（数据不同，属性相同不是扯淡），数据由变量存储，所以说属性是以变量形式存在的

![image-20220302013709176](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302013709176.png)

###### （7）对象的创建

成员变量才叫属性，局部变量不算

![image-20220302014325657](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302014325657.png)

所谓“new一个对象”
且Java中所有的类都属于引用数据类型，其实String就是这么来的

![image-20220302015111800](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302015111800.png)

###### ①编译过程

①先编译需要的引用数据类型的类，在编译用到这玩意的类
②或者直接编译最终的，编译器看到不懂的玩意会自动在当前目录下面找
③javac .java//未曾设想的道路

![image-20220302020907011](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302020907011.png)

###### ②过程中JVM内存结构

注意：引用数据类型的默认值是null（全小写）

![image-20220302024202658](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302024202658.png)

实例变量：对象级别的变量。其实就是说一个成员变量所在的类被反复new一个对象，而每个对象所对应的成员变量占不同空间，因此也是不同的，注意：**不能使用类名.成员变量去访问，得先创建一个对象**

![image-20220302023930458](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302023930458.png)

这里有个易错的地方 Student s1 = new Student();
s1并不是对象，对象应该是右边的表达式，s1应该称为引用，怎么理解呢？就是说new的对象内存是在堆内，而它把地址传给了栈里面的局部变量s1，因此s1也被叫做引用，有种指针的味道了，但是不能粗略理解，访问方式很简单s1.实例变量名，可以结合下图理解
**注意：堆内存不能直接被访问**

![image-20220302025618661](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302025618661.png)

![image-20220302025311350](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302025311350.png)

###### （8）内存图

![image-20220302103254067](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302103254067.png)

###### ①一道有趣的题

这里用两种方法做，第一种画内存图，第二种靠思维

![image-20220302224524882](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302224524882.png)

```java
package com.xxx.hello;

import java.util.Scanner;
public class hello{
    A a;
    public static void main(String[] args){
        D d = new D();
        C c = new C();
        B b = new B();
        A a = new A();
        hello h = new hello();

        h.a = a;
        a.b = b;
        b.c = c;
        c.d = d;

        System.out.println(h.a.b.c.d.i);
   }

}

class A{
    B b;
}

class B{
    C c;
}

class C{
    D d;
}

class D{
    int i = 11;
}
```

###### （9）空指针异常

①Java的垃圾回收机制，首先一个垃圾回收器叫GC，专门针对JVM里面的堆内存，而在堆（heap）里面，你new了一个对象，并且把地址传给stack里面的局部变量，但是你后面又给该局部变量赋值为null，至此该引用不成立失效了，那么heap里面的对象因为没有了引用，且我们不能直接操作它，相当于一堆废物数据，只能等待垃圾回收器的回收释放了
②还有报错的空指针异常，为什么不在编译阶段报错呢？因为编译器只检查语法，你的变量是引用数据类型的，然后我就会去你引用的类里面看一下，你访问的成员变量确实在那么就没问题。可以成功，但是在运行阶段，因为你这属于空引用访问“对象相关”的数据，所以会出现空指针异常的错误。说白了就是它先看你的引用类型，发现引用类型里面确实有个id属性，那么编译器就不会报错，但是当你运行的时候由于没指向一个确切的对象，那么就会显示空指针异常

![image-20220302230944365](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302230944365.png)

![image-20220302230915121](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220302230915121.png)

#### 15、构造方法

###### ①定义

①构造方法其实是一个特殊的方法，通过构造方法可以完成对象的创建，并且同时给**在同一类下面的**实例变量初始化，也就是说new一个对象离不开构造方法这玩意，我觉得很合理啊，你new了一个对象，开辟了一个可以放数据的heap内存空间，而且对模板要注入数据了，肯定先赋一个默认值呀
②当一个类没有主动提供构造方法的，系统会提供一个默认的无参数的构造方法（又称缺省构造器），因为你只有类里面有这个玩意才能实现类的实例化，即创建对象
③用new符号来进行调用 new Student();
④构造方法的语法结构
[修饰符列表] 构造方法名(形式参数列表){

​            构造方法体;
​			通常在构造方法体中给属性赋值，完成属性初始化

}

注意：

第一：修饰符列表目前统一写，public。千万不要写public static
第二：构造体名和类名必须一致
第三：构造方法不需要指定返回值类型，包括void，如果写了就变成普通方法了
普通方法的语法结构？
[修饰符列表] 返回值类型 方法名（形式参数列表）{方法体}

![image-20220303002046352](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303002046352.png)

![image-20220303002327362](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303002327362.png)

![image-20220303001515026](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303001515026.png)

###### ②关于多个构造方法的问题

会发生方法重载

**注意：**当你写了一个构造方法，不管形参类型的，对于系统来说，它就不会默认给你一个缺省构造器了，所以当你另外地方调用一个无参方法体的时候务必小心

![image-20220303015336609](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303015336609.png)

![image-20220303015232391](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303015232391.png)

###### ③实例变量默认赋值

①只要调用了构造方法，那么它就会在构造方法体中赋默认值（成员变量直接调用），但是你看不见O(∩_∩)O哈哈~
②你也可以在构造方法体里面进行赋值
③以上代码能实现的原理其实是构造方法里面的变量都this.的，而不是对象.来访问的

![image-20220303021548109](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303021548109.png)

![image-20220303021612114](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303021612114.png)

#### 16、封装

###### （1）目的

![image-20220303030629790](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303030629790.png)

搞个封装免得数据被任意篡改![image-20220303032942077](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303032942077.png)

###### （2）如何封装

第一种是使用private关键字修饰变量，这玩意只能在本类访问了
第二种是对外提供一个简单的入口

![image-20220303033305242](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220303033305242.png)

###### （3）实例方法

不带static表明是实例方法，而且有返回值，所以不是构造方法嗷。
每次调用不能直接访问，因为这个是对象级别的方法（感觉就是说每个对象的方法模板一样，但是具体是不同的），所以每次你都需要new一个对象才行。

![image-20220304040327141](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220304040327141.png)

![image-20220304041026897](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220304041026897.png)

###### （4）封装的实现

第一步在另外一类使用private修饰变量，使得我们不能跨类修改变量
第二步，如果想读数据，就专门对这个属性写两个方法set和get两个实例方法（命名最好set(get)大写单词），get方法用来每次返回变量的值，set方法用来修改变量的值，还可以在set中加上条件，免得瞎吉尔改

![image-20220304041705774](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220304041705774.png)

![image-20220304042455036](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220304042455036.png)

#### 17、static修饰符

![image-20220305024132774](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305024132774.png)

![image-20220305024223052](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305024223052.png)

static修饰的变量叫做静态变量，静态变量在类加载时就被初始化，不需要new对象，静态变量的空间就开辟出来了，并且这玩意存在方法区，变成类级别，而不是对象级别的变量了，类级别啊，真牛

![image-20220305025404188](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305025404188.png)

###### （0）变量存储位置

局部变量，方法里面的变量
实例变量，没有static修饰的吧，new对象才可以调用的变量（对象级别）
静态变量，用static修饰的，类级别的变量

局部变量在栈，成员变量（实例变量）在堆heap里面，而静态变量在方法区，类加载的时候会给其初始化

![image-20220305025838454](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305025838454.png)

出现空指针异常的就一个，空引用访问实例相关的变量

为什么空指针居然可以访问静态变量呢？因为空指针虽然屁对象都不指向，但是你知道它的类啊，既然你知道它的类，那么编译器就会自动把c1看成Chinese，所以没毛病

![image-20220305031557236](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305031557236.png)

![image-20220305031436218](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305031436218.png)

下面是静态方法，参考标准就是如果一个方法访问了实例变量，那么它只能是实例方法

![image-20220305033711716](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305033711716.png)

###### （1）静态代码块

存放在方法区，毕竟是代码嘛又不是方法

格式

static{ java语句; java语句}

类加载时执行，并且只执行一次，在main方法执行前执行，而且也是遵照从上而下的顺序执行的。注意这个代码只执行一次，如果你把一个时间节点放到这里面，那么它就会表明类加载的时间，而如果你放在构造方法里面那么每次new对象都会出现一次，如果你放在主方法每次调用主方法都会出现一次

![image-20220305122607118](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305122607118.png)

![image-20220305122639978](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305122639978.png)

![image-20220305122511076](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305122511076.png)

###### （2）实例语句块

格式：{java语句}

当你每次调用构造方法的时候之前，会执行这个

作用就是你每次调用构造方法，其实就是new对象的时候，可以把一些每个构造方法都相同的内容放到实例代码块中。这样更好看到的每个构造方法不同的部分

![image-20220305124844721](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305124844721.png)

#### 18、关于this

###### （1）基本语法

注意this变量存储在对象中，也就是heap中
每new一个对象，this就是最新创建的那个对象的地址，指向最新的对象，也就是在对象里面指向自己

我感觉神奇的地方就是哪怕你不new对象也可以在一个类里面的方法操作实例变量，因为编译器给你默认了一个this，所以不会报错，而你真new了对象的时候，this就指向它，然后就可以对数据操作了

![image-20220305171833028](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305171833028.png)

![image-20220305172227607](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305172227607.png)

![image-20220305171811582](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305171811582.png)

![image-20220305183030385](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305183030385.png)

###### （2）this的省略相关问题

其实吧，我觉得this也就在你写函数的时候的形参和实例变量重名的时候用
this.a = a; 毕竟就近原则嘛 你如果a=a，其实根本没有实现给实例变量赋值

![image-20220305185315721](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305185315721.png)

![image-20220305185252425](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305185252425.png)

###### （3）this()的妙用

众所周知，this可以用在实例方法里面，当你每次new一个对象的时候，this就会指向那个对象，而你通过那个对象调用实例方法的时候，就可以写个上面this.访问上面的实例变量。
此时厉害的来了，this可以用在构造方法里面，依次来实现代码复用，格式如下

```java
public Husband(){
    this("我去");
    System.out.println("Husband的无参构造方法设置");
}

public Husband(String manName){
    name = manName;
}
```

**注意，这个this只能写在第一行**

![image-20220305192106559](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220305192106559.png)

需求环境：我想了半天暂时发现这个this好像就下面这个用处
①我需要你创建默认的日期是1970对吧，可以这样操作，我们先调用这个无参的构造方法，免得别人不输入参数，咱们总得给个默认值吧

②那么如果别人要输入参数，那么我们就调用这个有参构造方法，此时请看下面，你会发现前几行代码其实差不多啊，那么我们何必要写前几行的默认赋值呢，对吧此时我们就可以写this(1970, 1, 1);这样就可以实现代码复用并且赋值了

③其实逻辑就是，我先进入你这无参构造方法，然后发现this指向了另外一个有参的构造方法，并且由于方法重载，我一下看出了，你指的是哪个方法，我再进入，然后再赋值。（this是对象级别的，所以一个对象如果创建了，那么里面有几个方法重载的构造方法，我可以通过this去访问）

![img](http://www.bjpowernode.com/Public/Uploads/index/itArticle/20200303/1583240552@d880ed70de74417af8fcf22872d05a90.png)

```java
public class hhh {
    public static void main(String[] args) {

        Date date = new Date(1);

        System.out.println(date.year);
        //打印了10
    }
}

class Date{
    int year;

    public Date(){
        this.year = 10;//其实你这里不需要太理解这个东西，我怀疑这个东西应该跟构造方法能创建对象有关系，你记住就行了
    }                   //this()就相当于调用无参构造方法，this(10)就相当于调用有参构造方法

    public Date(int year){
        this();//这里我反而调用了无参构造方法，这个传过来的参数我忽略了，然后进入到了无参构造，所以最后打印了10
    }

}
```

#### 19、继承

###### （1）定义

注意两个点，第一个就是继承会把超类（superclass），父类，基类的**除构造方法的代码**全部放到子类（subclass）、派生类、扩展类

但是你问我private私有成员能放进去吗，我的评价是能，但是好玩的就这样，尽管你放进去了，但是私有成员还是不能调用，改变量还是只有在超类（superclass）、父类、基类里面调用（能继承内存空间，但是没有访问权限捏）

没有指明类继承那个类的编译器默认继承它祖宗Object类

![image-20220306014809983](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306014809983.png)

当然，继承也是有缺点的，毕竟是继承吗，耦合度什么的还是太高了

![image-20220306020714336](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306020714336.png)

###### （2）进一步解释

所谓继承就相当于赋值一份到子类中，所以能调用父类方法，不用担心什么无限循环

![image-20220306022600968](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306022600968.png)

###### （3）何时使用

其实这个要看逻辑的，当你满足充分不必要的情况时就可以考虑这么搞搞（不好意思，这玩意真的很重要，现在才知道）

![image-20220306023112594](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306023112594.png)

#### 20、关于toString()

System.out.println(p1);
System.out.println(p1.toString());
什么两种格式都可以

当我们每次创建一个类的时候，都会自动继承Object类，那么我们new对象，然后再输出p1.toString()，就是把一个引用也可以直接说对象转换为一个字符串（被哈希过的地址）

![image-20220306131844963](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306131844963.png)

![image-20220306131901667](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306131901667.png)

![image-20220306131806316](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306131806316.png)

#### 21、方法覆盖

方法覆盖又叫方法重写，Override，Overwrite。

说白了就是继承父类里面的啥子方法，然后我把父类里面的方法复制一下到我的子类去就欧了，这个复制后的方法会覆盖继承来的方法，此时你只要注意**返回值类型，方法名，形式参数列表**这三者完全一样就行，此时你new对象调用这个方法，编译器就不会读你继承的方法，而是读取你复制的这个方法了（其实返回值类型不一定相同，一般当不同的时候会说父类子类的对应方法返回值不兼容，但是当你父类是返回值是一个父类的引用类型，你就可以把子类方法的返回值换成对应子类的引用类型，但是返回值只能缩小父类到子类，不能扩大，子类到父类）

###### 注意四个点：

①方法覆盖**跟属性无关**
②不能覆盖**私有方法**
③**构造方法**不能被继承，所以也不存在覆盖
④方法覆盖只针对“实例方法”，**与“静态方法”无关**
--------时隔n天我胡汉三又回来了，我这里解释一下权限只能更高和抛出异常只能更少的原因-------
⑤权限这里我其实属于没玩明白，但是我想啊，你父类都权限这么低了，子类权限更低，那我怎么调用子类的方法啊，我不是多态吗，我先静态绑定找到父类，嗯没毛病，我动态绑定的时候去找子类的方法，结果权限更低，我进不去了，呜呜呜那我怎么办，我怎么找到堆内存中对象的方法啊┭┮﹏┭┮，我的程序不得傻了，我都进了父类方法了，你告诉我子类不能用，达咩
⑥关于异常更少这里，很明白啊，你子类方法既然是继承的父类，你老爹的异常传给你了，结果你居然还多了些异常，我都怀疑是不是亲生的了，换句话来说，就是，总不可能子类多了些无中生有的异常吧，这不符合逻辑啊集美

![image-20220306161327110](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306161327110.png)

这玩意吧，其实可以用到toString()里面去

![image-20220306171406582](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306171406582.png)

方法覆盖和多态不能分开，而静态方法public static void a{}这玩意呢其实不需要对象的，类级别的，而多态是建立在对象的前提下的，所以也可以说静态方法没有多态

![image-20220308020430092](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220308020430092.png)

#### 22、多态

###### （0）什么是多态

**静态绑定**是你编译阶段new子类（subclass 派生类 扩展类）对象，并让父类（superclass 超类 基类）类型的引用指向它时
**动态绑定**是你在运行阶段，真正运行的是堆内存中父类型的引用指向的那个子类对象中的move()方法

![image-20220307213351622](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220307213351622.png)

###### （1）向上转型(upcasting)

说白了就是先继承一波（extend），然后捏，当你new Cat的时候把地址传给引用类型Animal的引用，这个时候就发现了“子到父”的自动类型转换

![image-20220306183237449](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306183237449.png)

###### （2）定义

多态具体体现就是，当你发生类型转换的时候，你编译的时候慢慢引用.方法名调用的是他爹，但是到了运行阶段还是会输出它儿子的方法覆盖后的那个方法（毕竟你的对象就是指向子类的啊喂(#`O′)）
总结一下：大概就是编译是一种形态，运行又是一种形态

![image-20220306184440715](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306184440715.png)

![image-20220306184459785](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220306184459785.png)

###### （3）向下转型(downcasting)

出现这玩意的原因是一个基类引用类型的引用指向一个方法，但是这个方法子类里面才有，所以我需要向下转型。而如果你调用的方法父类子类都有（扩展类继承父类，除了构造方法），这个时候你调用一个方法，它就会自动类型转换转换指向子类的方法

![image-20220307084654080](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220307084654080.png)

![image-20220307085124759](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220307085124759.png)

下图出现类型转换异常的原因是：把一个类转换类型给另一个类，但是这两个类没有继承关系（即不存在超类，派生类的关系），就不会使用向上或者向下转型。	

![image-20220307085548167](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220307085548167.png)

###### （4）instanceof

向上转型的会出现动态绑定，静态绑定暂时没想到

每次向下转型的时候都得说下

```java
if(a6 instanceof Cat){//如果a6“指向的堆内存的对象”是一个Cat类型
	Cat y = (Cat) a6;//那么就可以把Animal类型的引用a6转换为Cat类型（即向下转型）
    y.catchmouse();/*引用是父类的，指向的对象是Cat的，向下转型针对的是引用的引用数据类型，为什么指向的对象是子类，但是我却还要向下转型呢，那是因为编译器是这样操作的，根据你引用的类型是父类，然后去父类找调用的方法，看好了啊！首先，如果发现那种方法存在那么就没错，然后此时它就会跑到你指向的对象里面（即子类里面）去找那个方法，但如果我连第一步，即在父类连那个行为（方法）都没有，我怎么进行第二步呢？所以我此时需要向下转型，让引用直接指向子类的对象，跳过第一步*/
}


```

![image-20220307090229501](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220307090229501.png)

![image-20220307090518120](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220307090518120.png)

**为什么要用这玩意**
个人理解就是你写个什么方法参数是个Animal嘛 然后这个时候我就就给搞一个Cat或者Bird类型的对象传过来，这个时候，它作为参数必然发生了向上转型（自动类型转换），但是如果我又想向下转型呢？那我不得instanceof一下看下传来的参数指向那个类型再进行啥子操作哦（如下图）

![image-20220307212554292](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220307212554292.png)

![image-20220307212055491](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220307212055491.png)

###### （5）关于多态在开发中的作用

首先，强调一下软件开发原则

![image-20220308002413041](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220308002413041.png)

我这里就趁热打铁的记录一下我对多态的赞
首先是第一种不使用多态的情况，我先写一个类放主方法的，再写一个主人类，主人类放喂食动作的方法参数必须是(Dog dog)的，因为后面我要对狗对象进行访问啊，再写一个狗类放吃的动作的方法，然后我想让实现主人喂狗的操作，那么首先我先创造一个主人对象叫lin，和一个狗对象叫gou，我使用lin.feed(gou)，先进入主人类，然后发现feed的方法参数是(Dog dog)，也就是狗类型的引用，进入feed方法，然后再进入dog.eat()，这样就可以打印狗对象里面的eat方法了。此时主人想养猫，那么我又得创建一个猫对象，并且也在里面放一个eat方法，不仅如此，我还得在主人类多加一个方法，这个方法也是feed(Cat cat)，注意此时尽管方法名一样但是参数列表不同了，所以我还是得多写一个方法专门为猫服务（当然不用担心方法重名，因为会发生方法重载啊hh），然后我又得在主方法里new一个对象，然后把引用传给主人类里面的feed方法，经过方法重载然后再调用猫对象的eat动作。其实此时违背了咱们软件开发的一个原则OCP(开闭原则)，如果你是在程序中扩展，那么我是开放的，如果你是在程序中修改的，就像我在主人类加方法，这种修改直接触碰到核心代码了，(23-2-8: 此处存疑 似乎增添方法不违背OCP原则)谁知道会不会大问题，所以且看下文多态的妙用。

现在我告诉你多态的好，首先我们先创造一个Pet类，我们在这个类里面写一个实例方法public eat(){}，看到没有这个eat方法啥内容都没有，我们不需要给它new对象，我们先把主人类的喂食方法改为feed(Pet pet){ pet.eat(); }这一步很重要。现在我们需要喂食猫，那我们就写一个猫类，然后让这个类继承pet类（符合继承逻辑），我们还需要在主方法里面new一个猫对象，还需要new一个主人对象，然后我们调用主人类的喂食方法，注意你传的参数是猫引用类型的，master.feed(Cat cat);，但是在这家伙进入feed方法时遇到它爹了(Pet pet = Cat cat)，此时就会发生向上转换，尽管后面的操作室pet.eat();但是我们知道其实吧pet的eat方法里面啥都没有，但是记得多态吗，编译静态绑定，运行动态变量，两个运行状态，然后我们就会自动去找猫对象里面的eat();打印出猫的动作，这样就完美避免了修改主人类的内容啊，假设下次我想喂王八，那我先创建一个王八类，然后new一个对象，在调用feed();方法，传过去的时候向上转换，再由于继承发生方法覆盖找到我需要的子类的eat()；动作，十分方便，而且真的感觉耦合度小多了，像块内存条想拔就拔

![image-20220308003327671](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220308003327671.png)

![image-20220308003211130](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220308003211130.png)

![image-20220308010641535](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220308010641535.png)

#### 23、super关键字

###### （1）基础理解

①super();默认只存在于构造方法第一行，是调用了父类的构造方法，同样是无参，逻辑就是有子必先有父。
②super();如果你不写参数，那么它就会去父类构造方法找无参的，但是如果你写的是super(1);那么它就会去父类中通过方法重载去找对应参数类型的构造方法，如果找不到，那么对不起，我直接报错，因为我认为你可能没有爹。
③如果不写的话就会默认第一行，写了就根据写的来，而如果写了this();同样也不会出现super();
④但是不用担心this会影响super，知道为啥吗，你构造方法里面写了个this，那它同样会用方法重载this("ww");那么他就会去找构造方法参数类型是字符串的，而这个构造方法第一行默认super();，也就是说无论如何都可以检测你爹在不

![image-20220308032220625](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220308032220625.png)

![image-20220308032121648](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220308032121648.png)

###### （2）super(实参)实现对父类私有属性的访问

下图是一个super的妙用，怎么说呢就是我可以实现对私有属性的修改，我写一个类，类中有个方法针对私有属性进行修改，但很明显这个子类没有访问父类私有属性的权利，但是我可以在父类中写一个构造方法，这个构造方法有参数，然后我把这个参数赋值给这个私有属性（同类私有属性当然可以调用），此时牛逼的super就来了，我可以在子类修改私有属性的方法里面第一行写一个super(参数)，这个时候我把子类方法的参数放到super里面去，而super就会自动找父类的对应构造方法，而修改了私有属性的值，实现了值得传递。一波体现了封装，继承，多态，向上转型，super啊！！！

![image-20220309004106177](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309004106177.png)

![image-20220309004238554](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309004238554.png)

###### （3）通过内存图的理解

![image-20220309010502144](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309010502144.png)

我这里阐述一下我对super关键字的作用的理解，首先啊，只有子类出现super，父类的构造方法才会被调用，而此时调用构造方法就会初始化父类的特征（我估计SUN公司这里有个原则，只要是个属性不管私有，静态啥啥的，都得整个初始化），那么super就实现了属性的初始化，而且是仅限于父类特征的初始化，当然，只创造一个对象。抽象的来说，super关键字其实代表了父类的特征，你调用super，进入父类构造方法，实现属性初始化，此时我们就可以调用父类特征了，super有种唤醒的感觉，不点一下父亲其实有这个特征我们怎么继承呢。extends和super实现了我们继承父亲的特征

![image-20220309010627641](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309010627641.png)

###### （4）super.的妙用

（注意在子类中直接访问父类的私有数据，无论属性还是方法，直接用super.是不行的，我们都是没有权限的，只有利用构造方法然后super(参数)来进行间接访问）

super.name很有意思啊，它代表的是调用了父类的特征，也就是父类的name，而且你得知道，super是this指向的对象的一块空间

![image-20220309012303103](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309012303103.png)

this指向的是当前对象，this.name调用的其实是子类的name属性，而我的super.name，其实是代表父类的name，结合内存图理解，super其实就是代表this里面的一块父类的内存空间
还有个问题，父类和子类两个重名变量没问题吗？第一结合内存图来看，其实两者占得内存空间都不是一块，而且子类的name是省略的哦，原本应该叫this.name，而父类的name，原本应该叫super.name，所以两者不仅位置不同，名字其实也不同

this和super一般情况下是可以省略的？
this不能省略，public void(int x){this.x = x;}
super不能省略，父类子类都有的属性，我想访问父类的就得有super.
（补充一下：子有父有，想破开方法覆盖，那么也可用super.move()来调用父类方法）

![image-20220309013615065](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309013615065.png)

![image-20220309013453130](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309013453130.png)

![image-20220309014315945](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309014315945.png)

###### （5）关于super的易误区

感觉挺抽象的，不是引用，不保存地址，不指向对象，只是代表内存中那一块父类特征的玩意

tips.直接输出引用的时候，会自动在引用p1后面补上p1.toString()方法，然后转成字符串（哈希过的地址）

![image-20220309014819372](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220309014819372.png)
