

[TOC]



## 一、基本概述

历史啊啥的

https://www.bilibili.com/video/BV1YW411T7GX?p=1&t=5.2



## 二、JS基本语法

### 1、标识符

标识符可以是中文哦，var 牛逼 = 1;

![image-20220507203029897](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507203029897.png)

![image-20220507202508416](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507202508416.png)

![image-20220507202609184](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507202609184.png)





### 2、数据类型

![image-20220507210420850](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507210420850.png)



#### ①String字符串

![image-20220507210956124](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507210956124.png)



![image-20220507211222759](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507211222759.png)



#### ②Number

##### 基本概念

typeof：用于检查数据类型

![image-20220507211926154](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507211926154.png)

NUmber.MAX_VALUE

正无穷Infinity无敌好吧

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507214222740.png)



##### 精确度问题

![image-20220507214159998](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507214159998.png)



##### 其他进制的数字

![image-20220508113603738](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508113603738.png)

![image-20220508113615098](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508113615098.png)

当遇到下述进制问题的时候，转换的时候可以选择进制的

![image-20220508113830645](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508113830645.png)



#### ③布尔值

![image-20220507214544008](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507214544008.png)



#### ④Null和Undefined

undefined有两种情况，第一种就是声明变量但是没有赋值，还有一种就是直接赋值为undefined

null的typeof是object

![image-20220507214837965](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220507214837965.png)



#### ⑤强制类型转换

##### String

转换为String类型有三种方法

```javascript
a = a.toString();//返回值就是一个a的字符串
//但是上面的方法不能转换null和undefined为字符串，我感觉是因为那两者里面没有这个方法
a = String(a);//这个String函数就可以把任意值转换为字符串
```

![image-20220508111246387](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508111246387.png)

下面这种方法更牛逼，让一个任意数据类型与一个空串相加实现转换的操作

![image-20220508121057142](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508121057142.png)

##### Number

有三种

```javascript
a = Number(a);//第一种
```

 ![image-20220508112112500](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508112112500.png)

下面也是一种方式，但是处理不要+，只能处理-、*、/，因为你用这几个运算符处理非数字类型的时候，它会自动类型转换为Number

![image-20220508121844358](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508121844358.png)

![image-20220508112559496](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508112559496.png)

对parseInt和parseFloat的一些补充

```javascript
//首先
a = "123.1.1"
a = parseFloat(a);//这里当函数检测到第二个.后会认为这个是"NaN"，因为这玩意识别到一个.后，就发现这个是小数了，识别到第二点肯定发现不是小数了啊，两个点算什么鬼小数

//第二
a = parseInt(true);
//这两个函数是专门用于处理字符串的转化的，遇到字符串类型的话会先转换为字符串，然后转换为Number，但是它转换为字符串"true"后，发现这玩意根本就不是数字，所以会打印"NaN"

```

![image-20220508112616899](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508112616899.png)

![image-20220508112545811](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508112545811.png)



##### Boolean

真的c啊，啥玩意都能转换为Boolean类型

看下面鉴别转换哪个类型的

![image-20220508120006778](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508120006778.png)



### 3、运算符

#### ①数字运算符

##### typeof

![image-20220508120359007](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508120359007.png)



##### +.-.*./.%

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508122507789.png)

下面都能相加太离谱啦，反正先转换为Number类型再相加

![image-20220508120636707](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508120636707.png)

下面的运算符和+有一点去呗，就是面对字符串时，+号会实现拼接操作，但下面几者却会实现转换为Number数据类型的操作

![image-20220508122212462](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508122212462.png)



#### ②一元运算符

![image-20220508123042047](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508123042047.png)

笑死我了

下面的这种骚操作

a = 1 + +"2" + 3;//这骚操作在于，在字符串2的时候利用+把其转换为Number类型了，然后进行加减操作得到6

![image-20220508123026410](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508123026410.png)



#### ③自增和自减运算符

![image-20220508153612161](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508153612161.png)



#### ④逻辑运算符

![image-20220508153817891](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508153817891.png)

![image-20220508153804979](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508153804979.png)

非布尔值的与或运算

*只有遇到两个值都是true或者都是false的时候会出现返回值，如果一true一false的话就就返回false位的值*

其实这么理解吧，在必须有个返回值的前提下，它在哪里结束判断的就在哪里返回那个值

所以，当与运算第一个值true的时候，它就回去判断第二个的布尔值，不管真假，都会在第二个那里结束判断，而或运算时，如果第一个值为false，它就回去看第二个值，不管真假，都会在第二个位置结束判断

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508154931690.png)

![image-20220508154400924](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508154400924.png)

![image-20220508154531015](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508154531015.png)



#### ⑤赋值运算符

![image-20220508155659647](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508155659647.png)



#### ⑥关系运算法

![image-20220508162000116](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508162000116.png)

注意以下的地方

如果是非数值进行比较时，则会按照转化的关系将其转换为数字进行比较，而且NaN只要参与了比较，不管放左侧右侧，最后关系运算得到的结果都是false

但是当比较双方都是字符串的时候就是例外的情况了，会转换为Unicode编码来进行比较

很可能出现"11" < "5"为true的情况，具体见下

![image-20220508162009512](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508162009512.png)

![image-20220508162348585](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508162348585.png)

下面叙述一下字符串与字符串进行比较的规则

**一位一位进行比较**

"bb" > "b"为true，原理是b = b，但是左第二位的b应该比较右第二位，但是右第二位没有值，所以左大于右

所以纯数字字符串进行比较时，甚至会出现"11" < "5"的situation

![image-20220508163017239](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508163017239.png)

**面对纯数字字符串之间的相互比较时**

所以当你比较两个纯数字字符串大小时，可以先给一边写个+"a"，以此实现转型，而由于除开在字符串与字符串的比较之外，非数值的比较会自动转换为Number，就是左边的数值也自动转换为Number了。所以两者可以当做数字进行相互比较了

![image-20220508163251662](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508163251662.png)



#### ⑦相等运算符

== != ===(全等) !==(不全等)

这里的全等是指类型相等，数值相等，即你使用==比较时，不是Number数据类型的会自动转换，而全等和!==全不会发生类型转换，这个很现实嘛，毕竟你全等数据类型都不一样叫什么全等

也会进行自动的类型准换

![image-20220508181448813](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508181448813.png)

![image-20220508181650934](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508181650934.png)

注意两个点

undefined是衍生于null的，所以做相等判断的时候就会返回true

NaN不和任何值相等，包括其本身

![image-20220508181109842](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508181109842.png)

判断某个值是否为NaN

![image-20220508181259953](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508181259953.png)



#### ⑧三元运算符

注意一个点，如果第一元是非布尔值，则会转换为布尔值进行运算

![image-20220508182614316](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508182614316.png)



#### ⑨in运算符

![image-20220509003701754](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509003701754.png)



#### 运算级的优先级

![image-20220508183548510](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508183548510.png)



### 4、代码块

这个{}就是起个分组的作用，你把一堆代码写到里面，说明里面的代码是一组的，不存在代码块作用域这种说法的

![image-20220508183908989](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508183908989.png)

![image-20220508183921630](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220508183921630.png)



### 5、语句

##### if

一样的



##### switch

这个参数好像不能放字符串



##### while/do-while

一样的



##### break/continue

一样的





### 6、对象

#### ①基本概述

![image-20220509001344789](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509001344789.png)



#### ②基本操作

```javascript
//new对象
var obj = new Object();

//添加属性
obj.name = "1";

//修改属性
obj.name = "2";

//删除属性
delete obj.name;
```

![image-20220509002155883](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509002155883.png)

![image-20220509002215346](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509002215346.png)

![image-20220509002324227](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509002324227.png)



#### ③属性名和属性值

这里属性名不用遵守标识符规则

但是有时候有些特殊的属性名不给创建

那么就要如下书写，以及如下输出

```javascript
obj["123"] = 1;//创建

console.log(obj["123"]);//输出
```

![image-20220509002752929](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509002752929.png)

上面的[]方式其实更加灵活，因为你可以使用obj[变量名];

![image-20220509003240037](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509003240037.png)

obj的属性可以是对象哦

![image-20220509003540794](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509003540794.png)



#### ④引用数据类型

![image-20220509004803788](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509004803788.png)

![image-20220509004839761](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509004839761.png)



#### ⑤利用对象字面量创建对象

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509005235301.png)

创建对象时添加属性的操作，可以给属性名加""，也可以不加

```javascript
var obj = {
  name: "111",
  "名字可以加引号，也可以不加": "222",
  "$^#$&#": "333"//但是像这种奇奇怪怪的属性名还是加上保险，免得触犯了rule
  gender: "Male"//这里千万不要加逗号结尾啊，不然你后面dubug可能找到死
};
```

![image-20220509005507538](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509005507538.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509005451179.png)



### 7、函数

#### ①基础使用

函数也是一个对象

```javascript
var 函数名 = new Function("console.log('第一个函数');");//这种方法比较少用

function 函数名(形参){
    //相关代码
}

var 函数名 = function(形参){
    //相关代码
};//这玩意要加上分号哦。因为这是个函数表达式类似于int i = 0;

function(形参){//上面那一种，但是没有函数名，匿名函数，奇奇怪怪，不能单独创建，只可以嵌套使用，如下图
    //相关代码
}
```

![image-20220509211636139](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509211636139.png)

![image-20220509192729444](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509192729444.png)

![image-20220509192914237](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509192914237.png)

![image-20220509201630472](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509201630472.png)

![image-20220509201839970](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509201839970.png)



#### ②参数

![image-20220509202729124](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509202729124.png)

![image-20220509203017235](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509203017235.png)

**实参可以是任意的数据类型**

md实参居然能是函数，注意是函数对象，而不是函数的返回值啊，感觉跟那个函数指针一样，C是传过去一个指针，通过这个地址来调用函数，而这玩意是直接把函数传过去，毕竟函数是一个对象嘛，所以下面的fun(sayHello)，最后打印出来的结果，居然是特喵的sayHello函数的全部代码，见下图

![image-20220509204924732](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509204924732.png)

厉害了我的函数对象

![image-20220509205246931](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509205246931.png)

![image-20220509205223287](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509205223287.png)

#### ③返回值

但一个函数没有return的时候默认返回一个undefined，而当有return却不返回任意值的时候(return;)也会返回undefined

![image-20220509203352795](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509203352795.png)

![image-20220509203446587](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509203446587.png)

函数的返回值也很有文章，可以返回一个函数对象，也可以返回一个对象

![image-20220509205829885](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509205829885.png)



#### ④立即执行函数

怪哦，为了直接使用匿名函数，开创了下文写法，创建了可以直接执行，且只执行一次

![image-20220509211824916](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509211824916.png)

![image-20220509211934708](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509211934708.png)



#### ⑤方法

调用对象的属性，且该属性为函数时应该obj.sayName();//这个()就是调用函数的标志，记得别和Java一样搞忘了

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509212338129.png)

![image-20220509212606532](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509212606532.png)

当然也可以使用下面方法，将函数添加到属性中去

![image-20220509212648658](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509212648658.png)



#### ⑥遍历对象中属性的值

首先for-in语句可以实现遍历指定对象，写法：

```javascript
for(var n in obj){
    //写具体的操作，好比我需要遍历属性值
    console.log(n);//这一步发现会依次打印出属性的名称
    //那么我改怎么打印出属性的值呢
    console.log(obj.n);//这一步大错特错了，因为你这样使用时把n当做对象里面的一个存在的确定的属性名，然而对象里根本没这个属性啊，所以最后会迭代出来"undefined"
    console.log(obj[n]);//这一步就是神中神了，刚好利用n是变量的特点，用[]来存放变量，最后打印出来的也是属性名下的属性值了
    //但请千万注意，不要写成下面这种了
    console.log(obj.["n"]);//这一步仍是查找对象里一个名为"n"的属性，Be careful! Man.
}
```

![image-20220509213616479](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509213616479.png)





### 8、作用域

#### ①全局作用域

![image-20220509223458714](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509223458714.png)



#### ②声明提前

##### 变量的声明提前

其实也挺有意思的

```javascript
var a = 123;
a = 123;
//在script的全局作用域里面写第二种形式不会报错哦因为它是隐含的window.a = 123;所以其实也是默认添加了一个全局的属性
//话说回来，上面两种写法有什么区别呢，加上var的变量，其实会在所有代码执行之前进行声明，但是不会赋值，感觉可能预编译的时候就声明了
//而你打印一个属性的值的时候，照下面的奇葩写法，就会得到a = undefined（这是因为它只是声明了，但是没赋值），但是替换成a = 123;的却直接报错了，显示改变量a不存在
```

![image-20220509221859938](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509221859938.png)



##### 函数的声明提前

太奇葩了这玩意，下面的fun()不会报错的，因为函数的声明，感觉就是匿名函数的写法会被提前创建的，感觉就是把这一坨放到了代码前列先去创建了，而fun2如果放在前面不会报错，因为var fun2虽然是的确声明提前了，可以它并未被赋值，即没有吃下这一坨函数的代码，此时是一个未定义的变量调用函数，肯定不行啊

使用函数声明创建的函数会被提前，使用函数表达式创建的函数不会被提前

![image-20220509223354879](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509223354879.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509222927174.png)





#### ③函数作用域

![image-20220509225104471](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509225104471.png)

这个声明提前在函数作用域也是一样的

![image-20220509225247363](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509225247363.png)

补充个小东西

很有意思

下面的c输出为什么会不同呢？

首先，第一个函数里输出的c = 33，因为c = 10;在后面，没有var的提前声明，只有个window.c，但是这个c变量的声明赋值都在后面，所以函数会去上一级找，找到了c=33这个

而第二个输出10是因为，c = 10等于window.c = 10，即直接修改了一个全局变量的值，毕竟是通过window对象去调用的嘛，就直接修改了第一个全局变量c的值，所以打印出来10

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509225433333.png)



下面就是两个小点

![image-20220509225624819](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509225624819.png)

![image-20220509225633717](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220509225633717.png)



### 9、this

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510125145377.png)



### 10、用工厂模式创建对象

工厂模式，像个工厂一样，机械地创建对象

![image-20220510130128901](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510130128901.png)





### 11、构造函数

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510133003692.png)

利用构造方法初始化

![image-20220510131619925](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510131619925.png)

一个构造函数也是一个类

![image-20220510132720714](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510132720714.png)

instanceof，判断对象是否是某个类，跟爪哇一样的

![image-20220510133017197](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510133017197.png)





### 12、原型对象

prototype

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510170517746.png)

看下面的mc2.__proto__ == Myclass.prototype，两者执行同一事物，相当于类的实例化的默认属性等于类的静态变量的值

![image-20220510170741177](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510170741177.png)



下面这个就是原型对象的用处了

你可以使用

```javascript
//以下两种方法可以用于往原型对象中存储属性
Myclass.prototype.a = 123;
Myclass.prototype.sayHello = function(){
    //代码块
};
//厉害的来了，当你使用一个对象调用一个方法或者一个属性的的时候，如果它自身并不包含，它就会去原型对象里面protoype里面寻找，如果找到了，你就可以调用了
//这个有什么好处呢？你可以先把一些实例化类会用到的一些通用的方法，放到原型对象里面去，此时，你使用那个对象调用该方法，其实就是调用的原型对象里面的方法，相当于你只创建了一个方法，并且存到了类的原型对象里去，你每次new构造函数的时候，构造函数就不会重复地创建一个堆内存用来存放一些被反复使用的属性和方法了，你不管new多少个构造函数，只要是调用原型对象里面的方法或者属性，那么都是调用的一个唯一的，而不会重新创建
```

![image-20220510171443413](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510171443413.png)

![image-20220510171205553](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510171205553.png)

![image-20220510171144887](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220510171144887.png)

原型对象也有原型。。原型对象没有就去原型对象的原型中寻找，知道找到了Object对象的原型![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511111906035.png)



### 13、toString()

![image-20220511114016810](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511114016810.png)



### 14、GC垃圾回收机制

就是把断线了的风筝收了

自动回收啊，我还以为手动调用呢

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511114618620.png)



### 15、数组

#### ①基本概述

![image-20220511155801285](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511155801285.png)

![image-20220511155828080](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511155828080.png)

![image-20220511160126300](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511160126300.png)



#### ②数组字面量

##### 创建数组

![image-20220511160749306](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511160749306.png)

![image-20220511160852352](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511160852352.png)

##### 插入多数据类型

![image-20220511162332220](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511162332220.png)



##### ③数组的的四个方法

push()：往数组的末尾添加一个或多个元素，返回数组的新的长度

pop()：删除数组的最后一个元素，并把删除的元素当做返回值返回

unshift()：往数组头部添加一个或多个元素，并返回新数组的长度

shift()：删除数组的第一个元素，并当做返回值返回

![image-20220511162923644](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511162923644.png)

![image-20220511163126787](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511163126787.png)

![image-20220511163311902](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511163311902.png)

![image-20220511163427357](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220511163427357.png)



##### ④forEach

![image-20220512005944489](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512005944489.png)

![image-20220512010036092](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512010036092.png)

![image-20220512010011706](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512010011706.png)



##### ⑤slice和splice

slice：切，割

splice：粘接

**slice用于截取数组段并组成新数组返回**

slice的参数很牛逼，注意三个点

第一，索引是**左闭右开**

第二，可以不写结束索引，那么就会截取开始索引之后的所有元素

第三，可以是负值，-1表示倒数第一，-2表示倒数第二个

![image-20220512010447025](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512010447025.png)

![image-20220512010555790](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512010555790.png)



**splice：删除指定元素并且添加新元素**

```javascript
//第一个参数是开始位置的索引，第二个是删除的数量，第三个是添加的元素，可以添加多个，默认添加到开始位置索引的前边
arr.splice(1, 1, "x1", "x2");

//下面是一个在指定位置添加元素的操作
arr.splice(1, 0, "y1", "y2");
//这个很有意思啊，在开始索引为1的位置，删除数量为0，即不删除，然后在开始位置索引处的左边添加元素
```

![image-20220512011119279](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512011119279.png)



##### ⑥数组去重

```javascript
for(var i = 0; i < arr.length; i++){
    //下面的这个i+1是我最佩服的，因为上面的循环时从数组头开始往后遍历的，如果没有重复的什么都不发生，然后第二次是从数组的第二个元素开始的，此时完全不必要担心第一个元素会不会是重复的，因为第一次循环已经检测过了，太舒服了
    for(var j = i + 1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            arr.splice(j, 1);
            //这里的j--是必须的
            //因为删除了数组的某个元素，后面的元素会自动补齐，那么你想你拿着2去比较2,2，第一个2重复了，删除，然后第二个2补齐到删除的坑位(第一个位置)去，但是此时删除的下标移到第二个位置了，这样不就删漏了吗，那么此时你就要j--，然后for条件j++，对第一个位置再进行一次检测
            j--;
        }
    }
}
```



##### ⑦数组其他方法

contact()：连接两个或多个数组，并将新的数组返回，不会对原数组产生影响，头依旧是头，ps.这玩意还可以连接元素

join()：该方法将数组转化为一个字符串，并将转化后的String返回

reverse()：将原数组反转，且会对原数组产生影响

sort()：对数组的元素进行排序，也会影响原数组



contact()的写法如下

![image-20220512202053277](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512202053277.png)



join()使用如下

![image-20220512202457924](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512202457924.png)

其实还有个作用如下，给每个元素搞一个连接符号变成字符串，然后打印出来，具体如下，如果不设置连接符，默认“,”，如果不想要连接符就，arr.join("");//就是啥间隔也没有，直接把元素连在一起，打印出来

![image-20220512202614542](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512202614542.png)



reserve()使用如下

![image-20220512203002023](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512203002023.png)



sort使用如下

如果想倒序，直接再给数组翻转呗

而且注意，这个排序也是按照Unicode编码进行排序的，所以很可能你数字数组排序的时候11反而小于5

![image-20220512203133628](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512203133628.png)

自己来指定排序的规则，利用回调函数，在sort圆括号里面写一个，回调函数来控制规则

![image-20220512204044268](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512204044268.png)

不过这个回调函数的参数为什么是两个还是很懵的，估计数组会自己去挨着挨着比吧，我们只需要操作参数就行了

return a - b;//yyds，这么简便的写法

![image-20220512204147786](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512204147786.png)















### 16、函数的方法

#### ①call()、reply()

两者的作用就是你使用函数调用该方法，传入对象作为第一个参数，那么函数的this属性就会是你给的这个对象了

两者的区别：

call传递的实参，只需要第一个是对象，后面的参数根据函数参数依次输入就好

apply传递时的参数，就需要将参数放到数组里面统一传递，如下

![image-20220512021601357](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512021601357.png)

![image-20220512021932832](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512021932832.png) 区别

![image-20220512022140584](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512022140584.png) 这是函数



下面是一个很有意思的东西，可以解释apply或者call的妙用

你看第一张图注意此时的this.name应该打印obj的name属性值，但是第二张图，运用了apply，即调用obj类的sayName函数，但是因为是apply(obj2)，所以把这个对象的地址赋值给了this，this.name就应该是obj2的属性值

![image-20220512021638281](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512021638281.png) 

![image-20220512021654088](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512021654088.png) 



#### ②arguments

这玩意就是隐含的类数组对象，你传过来的参数都会从左到右依次放到该arguments数组去，所以你可能能实现一个很搞笑的操作

```javascript
function fun(){
    console.log(arguments[0]);
    console.log(arguments[1]);
}
fun(a, b);
//上面就巨离谱好吧，你传过去两个参数，但是你的fun甚至都没带参数，你甚至可以通过arguments[]数组来调用
```

![image-20220512023052570](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512023052570.png)

这个callee就比较奇葩了

这玩意就是当前调用改方法的函数对象，而且你直接log这个arguments.callee，它居然会把这个函数的代码打印出来，反编译了属于是

![image-20220512023104494](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512023104494.png) 





### 17、Date

var d = new Date("M/D/Y h: m:s");

getDate();//返回当前的号数

getDay();//返回当前星期几，0代表星期天，依次类推

getMonth();//返回今天的月份，0代表1月，依次类推

getTime();//返回的就是时间戳，记得是毫秒哦

Date.noe();//快速获取当前时间戳

上面这几个是常用，还有其他需求去爬文档

![image-20220512230703134](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512230703134.png)

![image-20220512230829469](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512230829469.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512231014758.png)

![image-20220512231154485](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512231154485.png)

![image-20220512233018550](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512233018550.png)



![image-20220512233336601](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220512233336601.png)





### 18、math

##### ①基本方法

工具类直接调用就行了，不用new对象

PI、绝对值

![image-20220513095427658](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513095427658.png)

![image-20220513095531346](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513095531346.png)

![image-20220513100035135](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513100035135.png)

![image-20220513100137907](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513100137907.png)



##### ②生成随机数

生成需要的随机数，这个生成指定范围的随机数是有技巧的，参考下面

注意生成0-10之间的随机数是不包括区间的

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513095932924.png)

下面的round就是生成包括区间随机数的操作

![image-20220513100308083](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513100308083.png)



### 19、包装类

![image-20220513130509960](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513130509960.png)

下面这个精巧啊，

```javascript
var s = 123;//首先s是一个基本数据类型

s.toString();//基本数据怎么会用String对象的方法呢，的确没有，但是浏览器自动使用包装类使其转换为对象，然后再调用对象的属性和方法，但是调用完之后，又转换为基本的数据类型，即s又变为Number数据类型了

s.hello = "您好";//此处怎么可以给基本数据类型存值呢，明明只有对象才行，所以此处包装类又临时将其转换为对象

console.log(s.hello);//那么此处s.hello应该有值了吧，错错错，上一行之后它又变回去基本数据类型了，所以此处你调用.hello其实又用包装类新转换了一个对象，此处的临时对象不是上一行的临时对象。所以会打印undefined
```

![image-20220513131153291](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513131153291.png)





### 20、字符串的方法

![image-20220513132901558](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513132901558.png)



![image-20220513132935372](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513132935372.png)



![image-20220513133041940](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513133041940.png)



里面可以放十进制的或者十六进制的编码

![image-20220513133231351](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513133231351.png)



![image-20220513133805464](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513133805464.png)



![image-20220513133920740](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513133920740.png)

![image-20220513134026012](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513134026012.png)



![image-20220513181604291](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513181604291.png)



参数也可以输入负数，-1表示倒数第一个，其他的你懂得

![image-20220513181746057](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513181746057.png)



这方法跟slice不一样，不能接受负值

![image-20220513182045086](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513182045086.png)



![image-20220513182200723](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513182200723.png)



根据你输入的指定值来拆分字符串，加入参数是","的话，那么"abc"就是数组的第一个元素，"bcd"就是数组的第二个元素，依次类推。如果输入的是"d"的话，那么"abc,bcd"就是数组的第一个元素",efg,hij"就是数组的第二个元素，看懂了吗

![image-20220513182355904](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513182355904.png)



![image-20220513182740481](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513182740481.png)





### 21、正则表达式

#### ①基本概述

![image-20220513183741908](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513183741908.png)

#### ②创建正则表达式

有两个方法创建

![image-20220513183703598](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513183703598.png)

![image-20220513184002044](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513184002044.png)



#### ③检查字符串

![image-20220513183639421](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513183639421.png)



 |和[]都是表示或者

![image-20220513184650963](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513184650963.png)

如下的检查一个字符串是否含有abc、adc、aec的值得注意，a[bde]c相当于/abc|adec|aec/

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513184442599.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513184604561.png) 



#### ④正则表达式结合字符串相关的方法

![image-20220513185213036](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513185213036.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513190427739.png)

下面是把一个字符串所有的字母提取出来，首先记得全局模式就行，/[a-z]g/，如果忽略大小写的话也可以这样写，/[a-z]ig/或/[a-z]gi/ <-既忽略大小写，又开启全局模式

![image-20220513185646335](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513185646335.png)

match会把匹配的内容封装到一个数组里面返回

![image-20220513185932315](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513185932315.png)

下面是拿指定字符串去替换指定字符串，注意正则表达式的写法即可，还有个有意思的，如果想把字母全部消去，可以拿空串""去替换字母

![image-20220513190234468](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513190234468.png)



#### ⑤正则表达式的语法

量词，/a{2}b/，左边的指的就是检测是否出现了"aab"

也可以打括号，(ab){2}，即检测是否出现了字符串"abab"

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513200950386.png)

![image-20220513201838851](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513201838851.png) 

![image-20220513201855138](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513201855138.png) 



![image-20220513202633077](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513202633077.png)

![image-20220513202748698](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513202748698.png)

 ![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513204152552.png) 

当使用下面这种构造函数传参时需要注意

传参的时候是字符串，在字符串中\也会产生转义的效果，所以如果想在字符串里面表示一个\需要写\\

如果想传进去"\ ."，的话就得在字符串里面写"\ \ ."，传入\ \的话参考下面吧

![image-20220513204743830](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513204743830.png)



这个单词边界有点意思，下下图会解释具体含义

\w，任意的字母数字..与\W相反

![image-20220513205350418](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513205350418.png)

下面的

```javascript
/\bchild\b/
//单词边界表示，child是一个独立的单词，不是"achildb"这种，而是"a child b"这种，你懂得，这个独立单词就是相当于两边设置了个单词边界。
```

![image-20220513205321044](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513205321044.png)



可以实现把空格替换掉

![image-20220513210129579](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513210129579.png)

![image-20220513210159082](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513210159082.png) 

唉这个语法实在是太精妙了

![image-20220513210308356](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513210308356.png) 









#### ⑥手机号

![image-20220513203406775](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513203406775.png)

#### ⑦电子邮件

![image-20220513212414628](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513212414628.png)





## 三、DOM

### 1、基本概述

![image-20220513212758238](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513212758238.png)

![image-20220513213148218](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513213148218.png)

![image-20220513213511949](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513213511949.png)

![image-20220513213959854](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513213959854.png)



### 2、事件

![image-20220513214021047](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513214021047.png)

下面有两种绑定方式，一种是在标签里通过属性进行绑定

第二种解耦合，获取对像，然后通过对象创建指定回调函数进行绑定

![image-20220513214513956](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513214513956.png)

![image-20220513214713412](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220513214713412.png)



浏览器在加载界面的时候，是根据code由上至下加载的，当你script标签在上面，但是却会用到body标签的代码时就会出现大问题，此时就需要onload，当整个页面加载完成后再触发

![image-20220514022728392](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514022728392.png)



### 3、查询

![image-20220514124801994](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514124801994.png)



![image-20220514130047090](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514130047090.png)

代码实现

![image-20220514125918070](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514125918070.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514125930467.png)

![image-20220514134116865](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514134116865.png)

![image-20220514134050700](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514134050700.png)





### 4、切换图片

这个是style标签的代码，具体怎么调整看你自己

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514134635784.png) 



下面是script标签里面的代码，实现对按钮的单击相应函数	

![image-20220514142535664](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514142535664.png)

![image-20220514142342125](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514142342125.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514141440295.png)

 ![image-20220514142246058](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514142246058.png)

![image-20220514142228315](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514142228315.png)

![image-20220514142208944](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514142208944.png)

 	

下面是body里面的代码

![image-20220514134704007](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514134704007.png)



### 5、DOM查询

#### ①获取元素节点的子节点

![image-20220514145546081](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514145546081.png)



childNodes

![image-20220514145351435](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514145351435.png)

![image-20220514145454160](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514145454160.png)



firstElementChild

![image-20220514145959491](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514145959491.png)



#### ②获取父节点和兄弟节点

![image-20220514150138457](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514150138457.png)

![image-20220514151755205](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514151755205.png)



这个就是对文本框的操作

当然文本框的id是username所以下面才这样操作

![image-20220514151958675](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514151958675.png)

![image-20220514151944443](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514151944443.png)



获取一个节点的文本值，这种方式也可以的

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514152548168.png)



#### ③定义函数

这个有意思的地方就在于，你是把一个函数作为参数来传递，即下面第二张图，在传参时，传的一个函数的代码块啊，太牛了

![image-20220514150906282](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514150906282.png)

![image-20220514151329857](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514151329857.png)





#### ④全选练习

![image-20220514152915107](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514152915107.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        window.onload=function(){
            //获取四个多选框items
            var items = document.getElementsByName("items");

            /*
             * 全选按钮
             * 点击按钮后，即把全部多选框选上
            */
            //为id为checkedAllBtn的按钮绑定一个单级响应函数
            var checkedAllBtn = document.getElementById("checkedAllBtn");
            checkedAllBtn.onclick = function(){
                //获取四个多选框items
                var items = document.getElementsByName("items");

                //遍历items
                for(var i=0; i<items.length; i++){
                    //设置四个多选框为选中状态
                    //设置多选框的checked属性可以来获取和设置多选框的选中状态
                    //alert(items[i].checked);

                    //设置四个多选框变为全选状态
                    items[i].checked = true;
                }
                checkedAllBox.checked = true;
            }

            /*
             * 全不选按钮
             * 点击按钮后，取消全部选中的多选框
            */
            //2、checkedNoBtn
            var checkedNoBtn = document.getElementById("checkedNoBtn");
            checkedNoBtn.onclick = function(){
                for(var i=0; i<items.length; i++){

                    //设置四个多选框变为未选状态
                    items[i].checked = false;
                }
                checkedAllBox.checked = false;
            }

            /*
             * 反选按钮
             * 点击反选按钮后，选中的变为选中，未选中的变为选中
            */
           //3、checkedRevBtn
            var checkedRevBtn = document.getElementById("checkedRevBtn");
            checkedRevBtn.onclick = function(){
                for(var i=0; i<items.length; i++){

                    /*
                    //实现反选操作
                    if(items[i].checked){
                        items[i].checked = false;//把选中了变为未选中
                    }else{
                        items[i].checked = true;//把未选中的变为选中了的
                    }*/

                    //下面这行更帅一点
                    items[i].checked = !items[i].checked;
                }
                
                //在反选时也需要判断全部多选框是否都被选中了
                //在checkedBox设置为选中状态
                checkedAllBox.checked = true;
                //判断四个多选框是否全选
                //只要有一个没选中就不是全选状态
                for(var j=0; j<items.length; j++){
                    if(!items[j].checked){
                        //一旦进入判断，则证明不是全选状态
                        //将checkedAllBox设置为没选中状态
                        checkedAllBox.checked = false;
                    }
               }

            }

            /*
             * 提交按钮：
             *  - 点击按钮以后，将所有多选框的value属性值弹出
            */
           //4、#sendBtn绑定单击响应函数
           var sendBtn = document.getElementById("sendBtn");
           sendBtn.onclick = function(){

                //遍历items
                for(var i=0; i<items.length; i++){
                    if(items[i].checked){
                        alert(items[i].value);
                    }
                }
           }

           //5、#checkedAllBox
           /*
            * 全选/全不选
            * 当其选中时，其余多选框全选中，其不选中是，其余多选框都不选中
           */
           //为checkedAllBox绑定单击响应函数
           var checkedAllBox = document.getElementById("checkedAllBox");
           checkedAllBox.onclick = function(){
            //设置多选框的状态
            for(var i=0; i<items.length; i++){
                items[i].checked = checkedAllBox.checked;
            }
           }

           //6、items
           /*
            * 用以保证四个多选框选中，此多选框选中
            * 四个多选框但凡有一个未选中，此多选框未选中
           */
           //为四个多选框分别绑定点击响应函数
           for(var i=0; i<items.length; i++){
               items[i].onclick = function(){

                checkedAllBox.checked = true;//这一行很关键，因为我默认这玩意为true
                //当我点击了一下多选框的时候，它默认为true，也就是我哪怕只点了一个还是默认为true
                //但是，下面的代码检查之后发现并不符合全选，所以最终就变为了false
                //而默认为true可以实现，假设三个多选框已经选中了，你选中最后一个，上面的全选变为选中状态
                //因为你一按，默认为true，遍历之后发现符合条件，那就仍然为true了

                //判断四个多选框是否全选
                //只要有一个没选中就不是全选状态
                for(var j=0; j<items.length; j++){
                    if(!items[j].checked){
                        //一旦进入判断，则证明不是全选状态
                        //将checkedAllBox设置为没选中状态
                        checkedAllBox.checked = false;
                    }
               }
             }
           }

        }
    </script>
</head>
<body>
    <form method="post" action="">
        请选择你的梦中情球<input type="checkbox" id="checkedAllBox"/>全选/全不选

        <br />
        <input type="checkbox" name="items" value="足球"/>足球
        <input type="checkbox" name="items" value="篮球"/>篮球
        <input type="checkbox" name="items" value="羽毛球"/>羽毛球
        <input type="checkbox" name="items" value="乒乓球"/>乒乓球
        <br />
        <input type="button" id="checkedAllBtn" value="全 选" />
        <input type="button" id="checkedNoBtn" value="全不选" />
        <input type="button" id="checkedRevBtn" value="反 选" />
        <input type="button" id="sendBtn" value="提 交" />
    </form>
</body>
</html>
```





#### ⑤其他方法

这个body的引用就是获取这个body标签

![image-20220514200344326](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514200344326.png)

![image-20220514200645676](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514200645676.png)

![image-20220514200932975](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514200932975.png)

![image-20220514201325248](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514201325248.png)

![image-20220514201612269](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514201612269.png)



### 6、DOM增删改

#### ①增删改节点

![image-20220514211056500](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514211056500.png)

创建节点

层层添加，要把子节点添加到父节点去

![image-20220514210025678](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514210025678.png)

![image-20220514210610477](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514210610477.png)

下面的操作也可以实现新增节点

![image-20220514213017547](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514213017547.png)

下面就是把两种不同方法结合使用的操作

新建，添加不会跟最开始那种有点麻烦

![image-20220514213119192](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514213119192.png)



将新建节点插入到指定节点之前

![image-20220514210937162](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514210937162.png)



指定节点替换指定节点

![image-20220514211118710](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514211118710.png)

![image-20220514211133748](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514211133748.png)



删除节点

![image-20220514212541085](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514212541085.png)



读取和设置HTML代码

![image-20220514212718305](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220514212718305.png)





#### ②增删改记录

![image-20220515190000190](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220515190000190.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>增删查改</title>
    <script type="text/javascript">

        /**
         * tr里面的删除的响应函数
        */
        function delA() {
                    //点击超链接以后需要删除超链接所在的那一行
                    //这里我们点击哪个超链接，this就是谁
                    //alert(this);
                    var tr = this.parentNode.parentNode;//去到tr，再利用父类删除自己

                    //获取想要删除的元素的名字
                    var name = tr.getElementsByTagName("td")[0].innerHTML;
                    //var name = tr.children[0].innerHTML;/这一种写法获取名字也可以

                    //删除之前弹出一个提示框
                    /**
                     * confirm()用于弹出一个带有确认和取消的提示框
                     * 需要一个字符串作为参数，该字符串将会作为提示文字显示出来
                    */
                    var flag = confirm("Really Delete \""+ name +"\"?");
                    if(flag){
                        //删除tr
                        tr.parentNode.removeChild(tr);//利用父类suicide，这种写法好一点
                    }
                        
                    /*
                    * 点击超链接以后，超链接会跳转页面，这个是超链接的默认行为
                    * 但是我们不希望出现默认行为，可以通过在响应函数的最后的return false来取消默认行为
                    */
                    return false;
        }

        window.onload = function(){
            /*
             * 点击超链接以后，删除一个员工的信息
             *
            */

            //获取所有的超链接
            var allA = document.getElementsByTagName("a");

            //为每个超链接都绑定一个单击响应函数
            for(var i=0; i<allA.length; i++){
                allA[i].onclick = delA;//直接调用函数对象，不是调用函数返回值哦
            }

            /**
             * 添加员工的功能
            */
           //为提交按钮添加绑定一个单击响应函数
           var addEmpButton = document.getElementById("addEmpButton");
           addEmpButton.onclick = function(){

            //获取用户添加的员工信息
            //获取员工的名字
            var name = document.getElementById("empName").value;
            //获取email和salary
            var email = document.getElementById("empEmail").value;
            var salary = document.getElementById("salary").value;
            alert("Name:" + name + "\nEmail:" + email + "\nSalary:" + salary);

            /**
             * 第
             * 一
             * 种
             * 写
             * 法
            */
            //将信息放到表格中去
            //创建一个tr
            var tr = document.createElement("tr");

            //创建四个td
            var nameTd = document.createElement("td");
            var emailTd = document.createElement("td");
            var salaryTd = document.createElement("td");
            var aTd = document.createElement("td");

            //创建一个a元素
            var a = document.createElement("a");

            //创建文本节点
            var nameText = document.createTextNode(name);
            var emailText = document.createTextNode(email);
            var salaryText = document.createTextNode(salary);
            var delText = document.createTextNode("Delete");

            //将文本添加到td中，此时的td是text的父节点
            nameTd.appendChild(nameText);
            emailTd.appendChild(emailText);
            salaryTd.appendChild(salaryText);

            //向a中添加文本
            a.appendChild(delText);
            //将a添加到atd中
            aTd.appendChild(a);

            //将td添加到tr中
            tr.appendChild(nameTd);
            tr.appendChild(emailTd);
            tr.appendChild(salaryTd);
            tr.appendChild(aTd);

            //向a中添加href属性
            a.href = "javascript:;";

            //为新添加的a再绑定一次单级响应函数
            a.onclick = delA;
            /**
             * 第一种写法的尾巴
             * 
            */


            
            /**
             * 第
             * 二
             * 种
             * 写
             * 法
             * 
             * 下面的方法是简便的写法，建议使用，但是要熟悉html语法
            */
            //创建一个tr
            var tr = document.createElement("tr");

            //设置tr中的内容
            tr.innerHTML = "<td>"+name+"</td>"+
                            "<td>"+email+"</td>"+
                            "<td>"+salary+"</td>"+
                            "<td><a href='javascript:;'>Delete</a></td>";
            //获取刚刚的添加的a元素，并为其绑定单级响应函数
            var a = tr.getElementsByTagName("a")[0];
            a.onclick = delA;
           /**
            * 第二种写法的尾巴
            * 
           */


            //获取table
            var employeeTable = document.getElementById("employeeTable");
            //获取employeeTable中的tbody
            //为什么要获取呢？因为你原先存在的几个tr是在隐藏的tbody标签里面的，而你后面添加其他tr的
            //是添加到tbody外的，万一你修改样式的时候，你只修改了tbody部分就麻烦了，所以统一加到tbody去
            var tbody = employeeTable.getElementsByTagName("tbody")[0];

            //将tr添加到table中
            employeeTable.appendChild(tr);
           };

        }



    </script>
</head>
<body>
    <table id="employeeTable">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>&nbsp;</th>
        </tr>
        <tr>
            <td>Tom</td>
            <td>tom@tom.com</td>
            <td>5000</td>
            <td><a href="deleteEmp?id=001">Delete</a></td>
        </tr>
        <tr>
            <td>Jerry</td>
            <td>Jerry@tom.com</td>
            <td>8000</td>
            <td><a href="deleteEmp?id=002">Delete</a></td>
        </tr>
        <tr>
            <td>Lucy</td>
            <td>Lucy@tom.com</td>
            <td>9000</td>
            <td><a href="deleteEmp?id=003">Delete</a></td>
        </tr>
        </table>
    <div id="formDiv">
        <h4>添加员工</h4>
        <table>
        <tr>
            <td class="word">Name:</td>
            <td class="inp">
                <input type="text" name="empName" id="empName" autocomplete="off" />
            </td>
        </tr>   
        <tr>
            <td class="word">Email:</td>
            <td class="inp">
                <input type="text" name="empEmail" id="empEmail" autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td class="word">Salary:</td>
            <td class="inp">
                <input type="text" name="salary" id="salary"  autocomplete="off" />
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                <button id="addEmpButton">
                    Submit
                </button>
            </td>
        </tr>
       </table>
    </div>
</body>
</html>
```



### 7、操作CSS内联样式

注意不论是currentStyle还是getComputedStyle(表格名,null)都是只读的不可修改样式，如果要修改必须通过style属性

下面的读取内联样式的属性值的方法只有IE支持

![image-20220516000303005](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516000303005.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>增删查改</title>
    <style type="text/css">

        #box1{
            width: 200px;
            height: 200px;
            background-color: red;
        }

    </style>
    <script type="text/javascript">
        
        window.onload = function(){

            /**
             * 点击按钮，修改box1的大小
            */
            //获取box1
            var box1 = document.getElementById("box1");
            //为点击按钮绑定单击响应函数
            var btn01 = document.getElementById("btn01");
            var btn02 = document.getElementById("btn02");
            
            btn01.onclick = function(){
                    
                //修改box1的宽度
                /**
                 * 通过JS修改元素的样式：
                 *  语法：元素.style.样式名 = 样式值
                 * 
                 * 注意：如果CSS中样式含有-。
                 *      这种名称在JS是不合法的比如background-color
                 *      需要将这种样式名修改为驼峰命名法
                 *      去掉-，然后将-后的字母大写
                 * 
                 * 我们修改style属性设置的样式都是内联样式，
                 *  而内联样式有最高的优先级，所以通过JS修改的样式往往会立即显示
                 * 
                 * 但是如果在样式中写了!important，则则此时的样式会具有最高的优先级
                 *  即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效
                 *  通俗的说就是你在一个属性旁边添加了!important后，这个属性就是最高优先级的了，即便你通过了JS修改它，但是它依旧保持!important的那个属性值
                 *  所以尽量不要为样式添加!important
                */
               box1.style.width = "1600px";//为什么是字符串呢？这个嘛，我也不知道。
               box1.style.height = "1600px";
               box1.style.backgroundColor = "yellow";

               
            };
            btn02.onclick = function(){
                
                	/*
                     * currentStyle只有IE浏览器支持，其他的浏览器都不支持
					 * 获取元素的当前显示的样式
					 * 	语法：元素.currentStyle.样式名
					 * 它可以用来读取当前元素正在显示的样式
					 * 	如果当前元素没有设置该样式，则获取它的默认值
					 * 
					 */
					
					//alert(box1.currentStyle.width);
					//box1.currentStyle.width = "200px";
					//alert(box1.currentStyle.backgroundColor);
                
                /**
                 * 在其他浏览器使用
                 *      getComputedStyle()这个方法来获取当前元素的样式
                 *      这个方法是window的方法，可以直接使用
                 * 需要两个参数
                 *      第一个，要获取样式的元素
                 *      第二个，可以传递一个伪元素，一般都传null
                 * 
                 * 该方法会返回一个对象，对象中封装了当前元素的样式
                 * 
                */
                //var obj = getComputedStyle(box1, null);
                //alert(obj.width);
                //alert(obj.backgroundColor);

                /**
                 * 依靠下面的自定义函数的对浏览器的通用方法
                 * 
                */
               var ownWrite = getStyle(box1, "width");
               alert(ownWrite);


            }

            /**
             * 定义一个函数，用来获取指定元素的当前的样式
             * 参数：
             *      obj 要获取的样式
             *      name 要获取的样式
            */

            function getStyle(obj, name){

                if(window.getComputedStyle){
                  //如果这里你直接写getComputedStyle的话，浏览器会把其当做变量然后去全局里面找结果没有，这个时候
                  //属于是你没有声明变量，那么IE肯定会报错啊，那么此时就不会执行了，如果你写成这样，它就会觉得你是在找
                  //window里面的一个属性getComputedStyle，既然这个属性不存在那么它就会返回undefined，然后转换为布尔值、false
                  //“这个方法是window的方法，可以直接使用”    
                    //正常浏览器具有该方法，所以布尔值为true
                    return getComputedStyle(box1, null)[name];
                }else{
                    //IE8
                    return obj.currentStyle[name];
                }

            }

        };

    </script>
</head>
<body>
    <button id="btn01">点我一下放大看黄色</button>
    <button id="btn02">点我一下读取样式</button>
    <br /><br />

    <div id="box1"></div>
</body>
</html>
```





### 8、事件



#### ②事件冒泡

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			#box1{
				width: 200px;
				height: 200px;
				background-color: yellowgreen;
			}
			
			#s1{
				background-color: yellow;
			}
			
			
		</style>
		<script type="text/javascript">
			
			window.onload = function(){
				
				/*
				 * 事件的冒泡（Bubble）
				 * 	- 所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发
				 * 	- 在开发中大部分情况冒泡都是有用的,如果不希望发生事件冒泡可以通过事件对象来取消冒泡
				 * 
				 */
				
				//为s1绑定一个单击响应函数
				var s1 = document.getElementById("s1");
				s1.onclick = function(event){
					event = event || window.event;
					alert("我是span的单击响应函数");
					
					//取消冒泡
					//可以将事件对象的cancelBubble设置为true，即可取消冒泡
					event.cancelBubble = true;
				};
				
				//为box1绑定一个单击响应函数
				var box1 = document.getElementById("box1");
				box1.onclick = function(event){
					event = event || window.event;
					alert("我是div的单击响应函数");
					
					event.cancelBubble = true;
				};
				
				//为body绑定一个单击响应函数
				document.body.onclick = function(){
					alert("我是body的单击响应函数");
				};
				
				
			};
			
			
		</script>
	</head>
	<body>
		
		<div id="box1">
			我是box1
			<span id="s1">我是span</span>
		</div>
		
	</body>
</html>
```



#### ③事件的委派

利用冒泡的操作

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<script type="text/javascript">
			
			window.onload = function(){
				
				var u1 = document.getElementById("u1");
				
				//点击按钮以后添加超链接
				var btn01 = document.getElementById("btn01");
				btn01.onclick = function(){
					//创建一个li
					var li = document.createElement("li");
					li.innerHTML = "<a href='javascript:;' class='link'>新建的超链接</a>";
					
					//将li添加到ul中
					u1.appendChild(li);
				};
				
				
				/*
				 * 为每一个超链接都绑定一个单击响应函数
				 * 这里我们为每一个超链接都绑定了一个单击响应函数，这种操作比较麻烦，
				 * 	而且这些操作只能为已有的超链接设置事件，而新添加的超链接必须重新绑定
				 */
				//获取所有的a
				var allA = document.getElementsByTagName("a");
				//遍历
				/*for(var i=0 ; i<allA.length ; i++){
					allA[i].onclick = function(){
						alert("我是a的单击响应函数！！！");
					};
				}*/
				
				/*
				 * 我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的
				 * 我们可以尝试将其绑定给元素的共同的祖先元素
				 * 
				 * 事件的委派
				 * 	- 指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素
				 * 		从而通过祖先元素的响应函数来处理事件。
				 *  - 事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
				 */
				
				//为ul绑定一个单击响应函数
				u1.onclick = function(event){
					event = event || window.event;
					
					/*
					 * target
					 * 	- event中的target表示的触发事件的对象
					 */
					//alert(event.target);
					
					
					//如果触发事件的对象是我们期望的元素，则执行否则不执行
					if(event.target.className == "link"){
						alert("我是ul的单击响应函数");
					}
					
				};
				
			};
			
		</script>
	</head>
	<body>
		<button id="btn01">添加超链接</button>
		
		<ul id="u1" style="background-color: #bfa;">
			<li>
				<p>我是p元素</p>
			</li>
			<li><a href="javascript:;" class="link">超链接一</a></li>
			<li><a href="javascript:;" class="link">超链接二</a></li>
			<li><a href="javascript:;" class="link">超链接三</a></li>
		</ul>
		
	</body>
</html>

```





#### ④事件的绑定

```javascript
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<script type="text/javascript">
			
			window.onload = function(){
				
				/*
				 * 点击按钮以后弹出一个内容
				 */
				//获取按钮对象
				var btn01 = document.getElementById("btn01");
				
				/*
				 * 使用 对象.事件 = 函数 的形式绑定响应函数，
				 * 	它只能同时为一个元素的一个事件绑定一个响应函数，
				 * 	不能绑定多个，如果绑定了多个，则后边会覆盖掉前边的
				 */
				
				//为btn01绑定一个单击响应函数
				/*btn01.onclick = function(){
					alert(1);
				};*/
				
				//为btn01绑定第二个响应函数
				/*btn01.onclick = function(){
					alert(2);
				};*/
				
				/*
				 * addEventListener()
				 * 	- 通过这个方法也可以为元素绑定响应函数
				 *  - 参数：
				 * 		1.事件的字符串，不要on
				 * 		2.回调函数，当事件触发时该函数会被调用
				 * 		3.是否在捕获阶段触发事件，需要一个布尔值，一般都传false
				 * 
				 * 使用addEventListener()可以同时为一个元素的相同事件同时绑定多个响应函数，
				 * 	这样当事件被触发时，响应函数将会按照函数的绑定顺序执行
				 * 
				 * 这个方法不支持IE8及以下的浏览器
				 */
				/*btn01.addEventListener("click",function(){
					alert(1);
				},false);
				
				btn01.addEventListener("click",function(){
					alert(2);
				},false);
				
				btn01.addEventListener("click",function(){
					alert(3);
				},false);*/
				
				/*
				 * attachEvent()
				 * 	- 在IE8中可以使用attachEvent()来绑定事件
				 *  - 参数：
				 * 		1.事件的字符串，要on
				 * 		2.回调函数
				 * 
				 *  - 这个方法也可以同时为一个事件绑定多个处理函数，
				 * 		不同的是它是后绑定先执行，执行顺序和addEventListener()相反
				 */
				/*btn01.attachEvent("onclick",function(){
					alert(1);
				});
				
				btn01.attachEvent("onclick",function(){
					alert(2);
				});
				
				btn01.attachEvent("onclick",function(){
					alert(3);
				});*/
				
				/*btn01.addEventListener("click",function(){
					alert(this);
				},false);*/
				
				/*btn01.attachEvent("onclick",function(){
					alert(this);
				});*/
				
				bind(btn01 , "click" , function(){
					alert(this);
				});
			
				
			};
			
			//定义一个函数，用来为指定元素绑定响应函数
			/*
			 * addEventListener()中的this，是绑定事件的对象
			 * attachEvent()中的this，是window
			 *  需要统一两个方法this
			 */
			/*
			 * 参数：
			 * 	obj 要绑定事件的对象
			 * 	eventStr 事件的字符串(不要on)
			 *  callback 回调函数
			 */
			function bind(obj , eventStr , callback){
				if(obj.addEventListener){
					//大部分浏览器兼容的方式
					obj.addEventListener(eventStr , callback , false);
				}else{
					/*
					 * this是谁由调用方式决定
					 * callback.call(obj)
					 */
					//IE8及以下
					obj.attachEvent("on"+eventStr , function(){
						//在匿名函数中调用回调函数
						callback.call(obj);
					});
				}
			}
			
		</script>
	</head>
	<body>
		
		<button id="btn01">点我一下</button>
	</body>
</html>

```









#### ⑧键盘的事件

























## 四、BOM

### 1、Navigator







### 4、二级菜单

没人能拒绝的帅气二级菜单

![image-20220516214719840](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516214719840.png)

```html
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>二级菜单</title>
		<style type="text/css">
			* {
				margin: 0;
				padding: 0;
				list-style-type: none;
			}
			
			a,img {
				border: 0;
				text-decoration: none;
			}
			
			body {
				font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
			}
		</style>

		<link rel="stylesheet" type="text/css" href="css/sdmenu.css" />
		
		<script type="text/javascript" src="js/tools.js"></script>
		<script type="text/javascript">
			window.onload = function(){
				
				/*
				 * 我们的每一个菜单都是一个div
				 * 	当div具有collapsed这个类时，div就是折叠的状态
				 * 	当div没有这个类是，div就是展开的状态
				 */
				
				/*
				 * 点击菜单，切换菜单的显示状态
				 */
				//获取所有的class为menuSpan的元素
				var menuSpan = document.querySelectorAll(".menuSpan");
				
				//定义一个变量，来保存当前打开的菜单
				var openDiv = menuSpan[0].parentNode;
				
				//为span绑定单击响应函数
				for(var i=0 ; i<menuSpan.length ; i++){
					menuSpan[i].onclick = function(){
						
						//this代表我当前点击的span
						//获取当前span的父元素
						var parentDiv = this.parentNode;
						
						//切换菜单的显示状态
						toggleMenu(parentDiv);
						
						
						//判断openDiv和parentDiv是否相同
						if(openDiv != parentDiv  && !hasClass(openDiv , "collapsed")){
							//打开菜单以后，应该关闭之前打开的菜单
							//为了可以统一处理动画过渡效果，我们希望在这将addClass改为toggleClass
							//addClass(openDiv , "collapsed");
							//此处toggleClass()不需要有移除的功能
							//toggleClass(openDiv , "collapsed");
							//切换菜单的显示状态
							toggleMenu(openDiv);
						}
						
						//修改openDiv为当前打开的菜单
						openDiv = parentDiv;
						
					};
				}
				
				/*
				 * 用来切换菜单折叠和显示状态
				 */
				function toggleMenu(obj){
					//在切换类之前，获取元素的高度
					var begin = obj.offsetHeight;
					
					//切换parentDiv的显示
					toggleClass(obj , "collapsed");
					
					//在切换类之后获取一个高度
					var end = obj.offsetHeight;
					
					//console.log("begin = "+begin +" , end = "+end);
					//动画效果就是将高度从begin向end过渡
					//将元素的高度重置为begin
					obj.style.height = begin + "px";
					
					//执行动画，从bengin向end过渡
					move(obj,"height",end,10,function(){
						//动画执行完毕，内联样式已经没有存在的意义了，删除之
						obj.style.height = "";
					});
						
				}
				
				
			};
			
			
		</script>
		
	</head>

	<body>

		<div id="my_menu" class="sdmenu">
		<!-- 一个div就是一个二级菜单 -->
			<div>
				<span class="menuSpan">在线工具</span>
				<a href="#">图像优化</a>
				<a href="#">收藏夹图标生成器</a>
				<a href="#">邮件</a>
				<a href="#">htaccess密码</a>
				<a href="#">梯度图像</a>
				<a href="#">按钮生成器</a>
			</div>
			<div class="collapsed">
				<span class="menuSpan">支持我们</span>
				<a href="#">推荐我们</a>
				<a href="#">链接我们</a>
				<a href="#">网络资源</a>
			</div>
			<div class="collapsed">
				<span class="menuSpan">合作伙伴</span>
				<a href="#">JavaScript工具包</a>
				<a href="#">CSS驱动</a>
				<a href="#">CodingForums</a>
				<a href="#">CSS例子</a>
			</div>
			<div class="collapsed">
				<span class="menuSpan">测试电流</span>
				<a href="#">Current or not</a>
				<a href="#">Current or not</a>
				<a href="#">Current or not</a>
				<a href="#">Current or not</a>
			</div>
			
		</div>
	</body>
</html>
```























## 五、JSON

![image-20220516230830935](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516230830935.png)

对象是普通对象，不包括函数这种特殊对象

![image-20220516231104657](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516231104657.png)

![image-20220516231438236](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516231438236.png)



![image-20220516231655020](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516231655020.png)

![image-20220516231839687](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516231839687.png)

![image-20220516232848385](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516232848385.png)



![image-20220516233800444](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220516233800444.png)



















