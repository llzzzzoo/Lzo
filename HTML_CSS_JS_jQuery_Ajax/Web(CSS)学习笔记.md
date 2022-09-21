[TOC]



### 一、基本概述

![image-20220425001403352](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220425001403352.png)

![image-20220425002052659](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220425002052659.png)

![image-20220425002223766](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220425002223766.png)

三者优先级如下图

![image-20220425005944451](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220425005944451.png)

层叠样式表如下，优先级最高的是内嵌CSS样式表，然后依次类推

![image-20220502002223726](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502002223726.png)

### 二、内联样式(Inline Style)

<!-- 这个span就是内部样式表 这玩意的优点就是定制性强 我想设置那里是什么就在哪里修改style的属性就行了 -->

<p style="color: aqua; font-size: 18px;"><span style="border: 2px wheat dashed; padding: 5px;">一个人</span>的失眠</p>



### 三、内部样式表(Internal  Style Sheet)

跟上面的玩意相反，上面是一个人一个元素定制，这个可以实现统一定制，一个style元素在文档头部进行统一定义

其实不难发现，就是在head里面搞个style

```css
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>叫我靓仔仔仔仔仔仔仔仔仔仔仔仔仔仔仔仔仔</title>
    <style type="text/css">
    body{
      background-image: url(background.jpg);
   }

  </style>
    <style>
    h1 {color: red;}
    p {color: green; font-size: 14px;}
    a {color: #ee82ee; border: 2px black dashed; padding: 5px;}
  </style>
</head>
```



### 四、外联样式表(External Style Sheet)

上面的内部样式表只能用于一个网页，但是这个外联样式表可以作用于多个网页
将CSS的内容保存为单独的文件，搞一个CSS的扩展名，需要用到的时候，使用link元素把这个链接起来就完事了

```html
	<link rel="icon" type="image/x-icon" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="zhuzhu.css">
	<link rel="stylesheet" type="text/css" media="print" href="print.css">
```



### 五、选择器

#### 1、分类

![image-20220426200939787](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426200939787.png)

#### 2、基本选择器

##### ①通用选择器(Universal Selector)

就是这个点点*
“通用选择器是功能最强大的选择器,它使用一个(*)号指定,它的作用是匹配html中所有标签元素,如下使用下面代码使用html中任意标签元素字体颜色全部设置为红色”

```css
    <style type="text/css">
        * {
            background-image: url(background.jpg);
            padding: 10px;
        }
    </style>
```



##### ②元素选择器(Element Selector)

选择你指定的元素名然后对齐操作

```css
<style>
 h1 {color: red;}
 p {color: green; font-size: 14px;}
 a {color: #ee82ee; border: 2px black dashed; padding: 5px;}
  </style>
```



##### ③类选择器(Class Selector)

利用class属性通过起类名来实现对类的操作

但是要记得   .类名

![image-20220426202557753](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426202557753.png) 



##### ④id选择器(Id Selector)

利用id属性跟那个class一样操作

但是要记得  #id

![image-20220426202824781](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426202824781.png)



#### 3、复合选择器

![image-20220426203210942](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426203210942.png)

##### ①交集选择器(Intersection Selector)

写法如下，说白了就是找出一个元素中和一个类属性相交的那个

![image-20220426203523715](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426203523715.png)

![image-20220426203656901](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426203656901.png) 

![image-20220426203714523](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426203714523.png) 



##### ②并集选择器(Union Selector)

![image-20220426203735230](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426203735230.png)

![image-20220426203830397](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426203830397.png) 



##### ③后代选择器(Descendant Selector)

说白了就是从第一个选择器1挑选出来的元素，再经过选择器2，然后再经过选择器3，说白了就是层层筛选嘛

注意你可以给贼多个元素都起名叫"ww"，那么叫这个的玩意都会随之改变

```css
<p class="ww">xxx<span id="kk">X</span>X</p>
//当你使用类选择器筛选"ww"并且同时加上框框的时候，其实是不会影响到X的，即不会给X单独加框，为什么呢，因为这个X不叫"ww"啊，它叫"kk"啊，肯定不会单独筛选出来它，然后给它加框
```

![image-20220426204247713](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426204247713.png)

![image-20220426204520648](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426204520648.png)



##### ④子元素选择器(Child Selector )

这玩意说白了就是它只会找到，从上外下推，筛选出来第一个子元素

![image-20220426205346015](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426205346015.png) 

拿下面举个例子，这个是给元素加框框，我先找到body里面第一个叫做content的类，一眼<p class="content">，但是请注意，<p>有个儿子叫<span class="content">，按照上面的后代选择器，是不是应该筛选出所有的类名为content的元素呢，然而并不是，这个子元素选择器，最多往下筛选一级，即筛选到<p class="content">就不筛选了

![image-20220426211055422](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426211055422.png) 



##### ⑤相邻兄弟	选择器(Adjacent Sibling Selector)

选择一个元素，该元素紧挨在某个元素之后，并且这两个元素拥有同一个父元素，那么就可以使用相邻兄弟选择器

![image-20220426210338246](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426210338246.png)

俺怀疑这玩意的作用也就这样，你看下面，这个slogan后面接的是元素选择器p，而它的后面有贼多个p，但是它筛选出来的只有与之紧挨着的那个元素，所以我疑心，这玩意可以拿来操作，我有个玩意1，只要这个玩意1出现，它后面挨着的玩意2就得变化，传染病了属于是

![image-20220426211128500](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426211128500.png)



##### ⑥通用兄弟选择器(General Sibling Selector)

这玩意跟上面的不同就是，它匹配到的元素无需紧挨着，只需要同一个层级就可以了，像刚才的<p>就全部会被影响到
即，在指定元素之后。同一层级。

![image-20220426211506237](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426211506237.png)



#### 4、伪元素选择器(Pseudo-elements)

![image-20220427193146058](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427193146058.png) 

![image-20220427193810633](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427193810633.png) 

##### ①::first-line选择器(针对第一行)

这玩意牛逼地就是始终保持第一行为一个状态，哪怕你把网页缩小了也是如此

下面就是保证每一个块级元素的第一行为红色

![image-20220426214031212](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426214031212.png)

![image-20220426213922588](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426213922588.png)

当然你也可以选择单独对某个块级元素操作，如下在最开始加一个元素名就好了

![image-20220426214146792](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426214146792.png)

![image-20220426214259357](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426214259357.png)



##### ②::first-letter选择器(针对第一个字母)

这玩意就是操作第一个字母的变色，如果你想指定的话，请如上操作

![image-20220426214621326](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426214621326.png)

![image-20220426214609144](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426214609144.png)



##### ③::before和::after选择器(插入内容)

实现在指定位置前或者后插入，但是记得插入内容的时候，需要用到content，顺带一提，这玩意可以插入图片，视频，音频啥的，给个地址就好

```css
content: url(xxx.jpg)
```

![image-20220426214847557](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426214847557.png)

![image-20220426214914956](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426214914956.png)



##### ④::selection选择器

这玩意就是处理用户选中之后的出现的样式，就是你拿鼠标去拖动几个字母的那种

![image-20220426215512560](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426215512560.png) 

![image-20220426215417745](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220426215417745.png)



#### 5、伪类选择器

其实伪类就是假装你有个类，请看下图，你如果想对第一行的<p>元素操作，通常做法就是给它搞个class属性，然后针对类名操作嘛，但是下面的玩意可是连类名都没有，但是你还是操作了它，因为你使用伪类选择器，伪装了一个类来操作

刚好符合“如无必要勿增实体”，毕竟我没创建实体类啊

![image-20220427192551537](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427192551537.png)

 ![image-20220427192842288](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427192842288.png) 

##### ①动态伪类选择器(Dynamic Pseudo-class Selectors)-->用于链接地址上

看下面的注释来理解几个操作，注意，下面的操作大部分是用在元素a上面的，除了hover

而且下面几个选择器是有先后顺序的，按照Link-visted-hover-active，是不是跟下面的love-hate一样了哈哈

![image-20220427001351241](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427001351241.png)

这是把鼠标停在一张图片上的操作

![image-20220427001600434](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427001600434.png)

这玩意有点骚，就是只要你鼠标摁住任意界面它就会变色

![image-20220427001757356](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427001757356.png)

 下面这个就是搞个变色搜索框

```css
 input#he:focus {

     background-color: aqua;

   }

  input#she:focus {

     background-color: pink;

   }

  <label for="she">还记得他的名字吗：</label>
  <input type="text" name="name" id="he">
  <br><br>
  <label for="he">还记得她的名字吗：</label>
  <input type="text" name="name" id="she">
```

![image-20220427005008991](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427005008991.png) 



##### ②UI伪类选择器(User Interface Pesudo-class Selectors)-->输入相关

![image-20220427105902166](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427105902166.png)



###### |:enabled和:disabled伪类选择器

用在密码框、输入框

![image-20220427110340964](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427110340964.png)

![image-20220427110504015](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427110504015.png) 

###### |:checked伪类选择器

![image-20220427110849530](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427110849530.png)

![image-20220427110819937](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427110819937.png) 



###### |:required和:optional伪类选择器

说白了就是设置一些选项为必填和可选的 

![image-20220427111257113](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427111257113.png)

![image-20220427111313387](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427111313387.png) 



###### |:default伪类选择器

这玩意选选中默认的那个元素，像下面的默认元素就是按钮元素

![image-20220427111504028](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427111504028.png)



###### |:valid和:invalid伪类选择器

![image-20220427113248235](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427113248235.png)

![image-20220427113307148](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427113307148.png) 输入不合法即为红色

![image-20220427113340989](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427113340989.png) 输入合法即为绿色



###### |:in-range和:out-range伪类选择器

![image-20220427113635411](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427113635411.png)

![image-20220427113712547](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427113712547.png)

![image-20220427113800029](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427113800029.png) 

![image-20220427113737959](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427113737959.png) 



###### |:read-only和:read-write伪类选择器

这个就是设置输入框只读或者可读可写，而下面的moz就很奇葩了，这个是为了处理火狐浏览器不兼容的问题，具体的请自行百度

![image-20220427123123452](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427123123452.png)



##### ③结构伪类选择器(Structural Pesudo-class Selectors)-->对元素操作

啥不是对元素操作，这话说了没说

###### |:root伪类选择器

如下设置的是整个html元素的背景，即全部网页的背景

![image-20220427123650609](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427123650609.png) 

###### |:empty伪类选择器

这玩意可以对元素内容为空的元素操作，如下图，<p>就是空的，那么我们就可以在其填充内容

![image-20220427124116549](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427124116549.png) 

![image-20220427124104215](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427124104215.png) 

###### |匹配子元素的选择器

first-child选择器用于选取属于其父元素的首个子元素的指定选择器
就是说选择你指定元素的父类，那一个大框框里面的第一个元素
其他的以此类推

这个child和type的区别就是前者是数量，后者是类型
比如，only-child是父元素下面**只有一个**子元素
而这个only-type则是父元素下面**只有这一个类型**的子元素

![image-20220427124312886](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427124312886.png)

only-child这个玩意就是如果它是父类的子元素中唯一一个元素，那么它就会被选中

![image-20220427125735069](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427125735069.png) ![image-20220427125837640](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427125837640.png) 

###### |指定元素的选择器

这玩意厉害的一点就是可以指定元素，使用见如下

![image-20220427141130195](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427141130195.png)

下面的"p:nth-of-type(3)"是body父类元素的子元素的类型是p元素的第三个

![image-20220427141456417](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427141456417.png) 

​	

##### ④其他伪类选择器(Other Pesudo-class Selectors)

###### |:traget伪类选择器

针对页面内锚点的操作，页面内锚点主要是为了实现在页面内部的跳转

![image-20220427141837404](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427141837404.png)

![image-20220427141952868](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427141952868.png)

**下面这个就是锚点的使用**

说白了就是按一下这玩意就跳转到另一个指定的位置，看下面咯

    <p id="start">start</p>
    
    <p><a href="#end">Jump to the end.</a></p>
    
    <p id="end">end</p>
    
    <p><a href="#start">Jump to the start.</a></p>

**下面这个就是伪类选择器的使用**

这玩意就是专门处理锚点的，也就是说你如下加个红框，你的锚点处也会出现一个红框，如上面的start和end就会出现红框

![image-20220427143039735](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427143039735.png) 



###### |:lang伪类选择器

主要是用于匹配设置为全局属性lang的元素

下面就是分别对不同的lang属性操作

![image-20220427191528732](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427191528732.png) 



###### |:not(selectors)伪类选择器

这玩意就是对你指定的元素之外的所有元素操作，如下面，只有span元素不变红

![image-20220427191726242](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427191726242.png) 



#### 6、区分伪元素选择器和伪类选择器

![image-20220427192005346](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427192005346.png)

![image-20220427192018535](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427192018535.png)



#### 7、属性选择器

具体使用见下表

注意那个*=和~=的区别，前者是属性值字符串包含了这个指定的字符串，而后者是属性值就叫做这个指定的字符串

![image-20220427200815278](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427200815278.png)

![image-20220427201257530](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427201257530.png)



### 四、背景、图像、字体

#### 1.指定颜色

```css
h1:hover {
  color: rgba(49, 143, 237, 0.5);/*最后的参数指的是透明度*/
}
```

![image-20220427204946211](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427204946211.png) 有点酷，把鼠标靠近之后就会变成指定的颜色



#### 2.背景颜色

使用style对每一个元素进行单独设置颜色

![image-20220427205331422](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427205331422.png) 

为body元素指定背景图

![image-20220427205549739](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427205549739.png) 

也可以插入多图，但是要记得不同路径用“,”隔开，并且**左边会覆盖右边**的哦

而且俺发现一个作用，就是你搞张图片当备用的那种可以啊

![image-20220427205708029](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427205708029.png) 

下面补充一个知识点

![image-20220427205908677](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427205908677.png)

![image-20220427205858890](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427205858890.png)



#### 3.避免图像重复

因为当你图像不够大的时候，图像会重复来撑起整个图片嘛

这个时候，就要用到

```css
background-repeat: no-repeat;/*这个就是不然图像重复的代码*/
```

下面就是处理重复的图片的操作，记得带上background-position，具体自行百度(bushi

![image-20220427211731143](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427211731143.png)

![image-20220427211620165](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427211620165.png)

![image-20220427211706531](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427211706531.png)



#### 4.背景相关设置

##### ①位置尺寸调整

```css
background-size: 10%;/*这个就是调整背景的尺寸缩小百分之十，具体使用见百度(bushi*/
```

这里单独提一下那个占父元素的百分比的意思，也就是说你父元素的背景贼大，那么它也贼大，父元素的背景贼小，那么它也贼小，反正是它死占父元素的十分之一那么大就是了

![image-20220427212113356](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427212113356.png) 



##### ②附着方式调整

```css
background-attachment: local;/*这玩意就是背景图像会随着元素移动而移动，即下图你拉大边框，图像也会变大，往下滑，图像也会下移你可以这么理解，这张图片附着在了背景上，你往下滑，自然能看到图像下面的样子啊，就跟普通网页的图片一样*/
background-attachment: scroll;/*这玩意就是一张图片死在那里，如下图，你往上拖动，只能看到文字上移，图片不动，但这玩意会随着网页移动而移动，如下下图，你把网页上移下移，banana此时和文字组成了一个整体，上移下移在一起*/
background-attachment: fixed;/*这玩意就是让图片固定不动，如下面，你把边框拖这么大，才能看见这玩意，这玩意大小这些都是固定了的*/
```

![image-20220427212849657](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427212849657.png) 

![image-20220427213258799](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427213258799.png)

![image-20220427213427794](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427213427794.png)



#### 5、边距

![image-20220427224553897](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427224553897.png)



##### ①background-origin和background-clip属性

background-origin设置图像的起始绘制位置

```css
background-origin: padding-box;
```

background-clip设置图像的显示区域，它的属性跟下面这个属性一样

```css
background-clip: content-box;
```

origin直接理解为缩放，而clip理解为裁剪，一张完整的背景图，你设置了显示区域为content-box，那么它就会对完整的背景图进行裁剪，只保留那个content的部分

![image-20220427224658243](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427224658243.png)

补充个知识点，其实background是可以如下面简写的

![image-20220427225928821](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427225928821.png)

#### 6、边框(border)

##### ①border-style

![image-20220427230029683](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427230029683.png)

```css
<style>
p.none {border-style: none;}
p.solid {border-style: solid;}
p.dashed {border-style: dashed;}
p.dotted {border-style: dotted;}
p.double {border-style: double;}
p.groove {border-style: groove;}
p.ridge {border-style: ridge;}
p.inset {border-style: inset;}
p.outset {border-style: outset;}
p.hidden {border-style: hidden;}
</style>

<body>
<p class="none">没有边框</p>
<p class="solid">实线边框</p>
<p class="dashed">虚线边框</p>
<p class="dottted">圆点边框</p>
<p class="double">双线边边框</p>
<p class="groove">3D槽线边框</p>
<p class="ridge">3D脊线边框</p>
<p class="inset">3D内凹边框</p>
<p class="outset">3D外凸边框</p>
<p class="hidden">隐藏边框</p>
</body>
```

![image-20220427231543616](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427231543616.png)



##### ②为每一条边框设置

![image-20220427235444759](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427235444759.png)

记住顺序是**上下左右**

![image-20220427235520416](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427235520416.png)



##### ③圆角边框

![image-20220427235809633](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220427235809633.png)

**第一个px是指定水平的曲线的半径，第二个指定垂直曲线的半径**

![image-20220428000037873](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428000037873.png)

![image-20220428000019089](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428000019089.png)

下面这个不指定位置的操作比较骚，你虽然给了两个值，按理说应该全部角的水平半径是30px，垂直半径15px，但实际上，左上和右下才是一对角，而且这个30px直接使得它们的圆角值为30px，30px了。你设置了大小之后，第一个30px 30px对应的左上右下这对兄弟，第二个15px 15px对应的左下右上这对兄弟，可以见下下图

![image-20220428000242290](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428000242290.png)

![image-20220428000225764](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428000225764.png)

那么问题来了，怎么设置全部边框角水平曲线长30px，垂直曲线长15px	

![image-20220428000803062](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428000803062.png) 一个“/”就解决了

![image-20220428000726749](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428000726749.png)

**这里补充一个点**

关于如何单独设置每个角的操作，如下面咯

一个30px对应/号右边的第一个15px，依次类推，而且这个影响的顺序是上右下左，即顺时针的

![image-20220428001053634](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428001053634.png)

##### ④给边框设置图片

outset是指定图像边框绘制的起始偏移位置

repeat是处理重复的图像，见下下图自行选择

slice就是表示所有的边的长度是30px

![image-20220428002656697](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428002656697.png) 

![image-20220428002723486](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428002723486.png)



#### 7、内外边距

##### ①内边距(padding)

padding可以设置1到4个值

四个值：上右下左（顺时针）

三个值：上 左右 下

两个值：上下 左右

一个值：上下左右

![image-20220428100743646](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428100743646.png)

![image-20220428100729957](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428100729957.png)



##### ②外边距(margin)

下面是基础用法

![image-20220428132334236](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428132334236.png) 

将margin属性的值设置为auto，就可以实现在其父元素内水平居中的效果了

当然使用条件有两点
第一，对象是块级元素
第二，必须指定元素的宽度

因为你如果一个元素直接就占据一行了，你居中个屁啊

![image-20220428132450575](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428132450575.png) 

###### **margin塌陷**(margin collapse)

这是第一种会导致塌陷的行为

两张上下挨着的图片

我设置上面那张的下外边距为100px，下面那张的上外边距为100px

理论上来说两者的间距应该是200px，但实际上这里会发生玄学——margin塌陷，即只留有一个间距，而且还是最大的那个间距

![image-20220428132720693](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428132720693.png)

![image-20220428132750788](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428132750788.png)

下面是第二种会导致塌陷的行为	

按照下面的写法，我们应该是想要蓝色方框显示在粉色方框的内部，并且离粉色方框的距离为50px，但是由于塌陷不会这样

![image-20220428133110602](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428133110602.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428133253774.png) 反而会出现两者变为一个整体，对网页的外边距为50px



#### 8、设置元素尺寸和溢出

##### ①body-sizing

![image-20220428225528645](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220428225528645.png)



设置为border-box时，width和height就会变成border的长宽，而里面的content的长宽会根据系统调整

![image-20220429000543587](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429000543587.png)

更具体的见下

https://www.php.cn/css-tutorial-413645.html



##### ②设置最小最大尺寸

min-width max-width

具体解释见下

![image-20220429011958641](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429011958641.png) 

按理说这玩意应该占body尺寸的百分之五十，反正很大嘛，但由于设置了最大尺寸，下面这玩意所以显示的最大只有这么大

![image-20220429012034081](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429012034081.png)

这里补充一个知识点

width的含义是固定了长度是600px
而max-width的含义是最大长度是600px，而随着网页大小变化，它的大小也是可变的，如下下图

![image-20220429012451882](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429012451882.png)

![image-20220429012806101](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429012806101.png) 



##### ③溢出(overflow)

这个设置为scroll就是设置为滚动条，但我建议你去设置一个"auto"，这玩意你溢出了才会设置滚动条，还可以设置为hidden，如下下图

![image-20220429012941135](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429012941135.png) 

![image-20220429013202604](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429013202604.png) scroll的效果

![image-20220429013017246](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429013017246.png) auto的效果

![image-20220429013257550](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429013257550.png) 这就是hidden效果，我感觉这玩意可以用在，你充钱了我就给你看下面的



##### ④resize

**这个属性只有在overflow不为默认的visible的时候，才能起作用**

![image-20220429013429720](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429013429720.png)

下面就是让用户拖拽边框的操作，参考上图和下面自己根据需求修改即可

![image-20220429013536410](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429013536410.png) 

![image-20220429013526635](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220429013526635.png) 



#### 9、轮廓(outline)

![image-20220501122046705](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220501122046705.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220501234248230.png)

轮廓就是粉色的那个部分

outline-offset就是那个蓝色和粉色之间的白色部分

作用可以用于交互，因为轮廓不属于元素尺寸的一部分，它不会影响到原有的页面布局，这玩意就是附在边框的一条线

举个例子，用户填写某些表单，有些空没填，你就可以用轮廓变个红色提醒一下

![image-20220501233707026](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220501233707026.png) 



#### 10、阴影

![image-20220502000236713](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502000236713.png)

![image-20220502000248141](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502000248141.png) 效果如左图，杠杠滴

![image-20220502000103117](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502000103117.png)

![image-20220502000647240](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502000647240.png) 照上面来顺时针

 ![image-20220502000701152](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502000701152.png) 如上，的确由内至外叠了四层



#### 11、display(显示属性)

##### ①基本概述

![image-20220502002337600](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502002337600.png)

这玩意决定一个元素的显示角色，说白了就是可以根据你的操作来相应改该元素在页面的布局方式



![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502003051181.png) 这玩意就是指定了拥有块级元素的显示特征

![image-20220502002625366](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502002625366.png) 效果图

将一个无序列表横向显示

![image-20220502003211760](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502003211760.png)

![image-20220502003234183](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502003234183.png) 这个爱了啊



##### ②行内块

inline-block

这玩意的优点之一就是行内元素可以设置宽度高度，如下

![image-20220502004938186](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502004938186.png)

效果神中神

![image-20220502005044260](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502005044260.png) 



#### 12、浮动float属性

##### ①基本概述

float会修改元素的显示样式，例如让行内元素变得可以有width和padding属性了

先搞一个普通的实现一行两个元素的操作

```css
 div.left {

    background-color: lightblue;

    width: 50%;

    height: 200px;

    box-shadow: 0 4px 8px #bcbcbc;

    display: inline-block;

  }

  div.right {

    background-color: pink;

    width: 50%;

    height: 200px;

    box-shadow: 0 4px 8px #bcbcbc;

    display: inline-block;

  }
/*如果用display使用行内块的，一定要照下面这么写，div的尾巴接上下一个div的头*/
    <div class="left">左边</div><div class="right">右边</div> 

```



![image-20220502011408442](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502011408442.png) 写成左边的代码也可以实现功能

![image-20220502011353621](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502011353621.png)



##### ②多列布局

下面就是实现了三列布局

但是要注意一个点，那个div的middle必须是left

代码由上至下执行，先left再第二个left补充在后面，如果你写right，那么第三个div点的right就会补充到你写的第二个div的right了

![image-20220502020629584](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502020629584.png)

![image-20220502020559161](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502020559161.png)



**清除浮动**

![image-20220502021124316](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502021124316.png)



#### 13、position(定位)

##### ①基本概述

用于给每个元素定位使用的

![image-20220502021623177](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502021623177.png)

具体叙述参考下面

https://www.bilibili.com/video/BV1QW411N762?p=54&t=398.4

##### ②粘滞定位

这玩意还是有意思的，可以实现下图 那个绿色的一行始终存在顶部，哪怕你往下拉动

![image-20220502025922824](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502025922824.png)

![image-20220502025936147](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502025936147.png) 



##### ③z-index

z-index属性是层叠中的整数值，允许负数，值越小在层叠中的位置越低，默认值为0



#### 14、BFC

##### ①基本概述

块级格式化上下文(Block Formatting Contexts)

![image-20220502174601135](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502174601135.png)



BFC没什么特别的，感觉就是你通过一个手段开启了一个新的线程一样吧，但是你得通过如上的手段开启

下面就是解决了margin塌陷的问题，第一个p它是位于class=.container的BFC里面，而第二个p位于第二个class的BFC里面，而塌陷发生的原因正是同一个BFC的限制所导致，所以此处我设置了两个BFC，便不会出现这个问题。

![image-20220502175426064](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502175426064.png)

下面有一个值得思考的phenomenon

![image-20220502180016178](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502180016178.png) 

![image-20220502180003485](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502180003485.png) 为什么上面我明明通过overflow生成了BFC，却还是会塌陷呢

上面的代码是在box2开启的BFC，想象成开启一个新的世界嘛，但此时这个box2仍然在第一个BFC里面哦，所以说，这个box1和box2还是在一个BFC里面，那么，你若想两者不在一个BFC里面，就在第一个box1里开启一个BFC



##### ②容纳浮动元素

下面就是在父元素body下面创建了一个新的BFC，用以容纳浮动元素，就是拿个啥玩意把带有浮动属性的元素包裹起来的样式

![image-20220502181037120](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502181037120.png)

##### ③阻止文本环绕

![image-20220502181438698](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502181438698.png)

![image-20220502181448030](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502181448030.png) 创建了一个新的BFC，文本就不会环绕图片了



#### 15、多列布局

##### ①基本概述

![image-20220502181641260](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502181641260.png)

下面代码就是实现了一段文本分成五列，并且最小宽度为200pixel

注意它会把你div里面的所有元素内容拆分成五段，甚至其他的h1元素啊什么的也会拆分

![image-20220502183148602](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502183148602.png)

![image-20220502183242996](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502183242996.png) 也可以如下缩写



下面就是设置一个元素横跨多列

![image-20220502183417491](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502183417491.png)

![image-20220502183424982](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502183424982.png)



还有个column-fill设置每列如何填充

![image-20220502183514431](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502183514431.png)

![image-20220502183542574](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502183542574.png) 



##### ②居中

**针对行内元素**，如span来说，水平居中，主要是在其父元素里面设置text-align属性为center

![image-20220502183902344](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502183902344.png)

![image-20220502183941690](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502183941690.png) 水平居中



这个垂直布局就是，设置子元素的line-height和父元素的height一样搞就会居中

![image-20220502185310409](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502185310409.png)

![image-20220502185358742](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502185358742.png) 垂直居中



设置**块级元素居中**的操作就是

设置跨级元素的margin属性为0 auto;

原理就是设置上下的外边距为0，而左右为auto，因为你设置了width嘛，那么浏览器就会对你那一行剩余空间进行平分，那你肯定就在中间啦

![image-20220502185538173](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502185538173.png)



块级元素在这个浏览器布局中垂直居中

逻辑上可需要好好捋一捋了

首先如下图，你设置了position为absolute，即脱离了文档流，此时你再设置top-right-buttom-left都为0，那么实际上这个div元素可是撑满了全部界面哦，然后你再用margin为auto，即四个方向上浏览器给你的剩余空间自动平分了，此时你就会垂直居中

![image-20220502190024132](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502190024132.png)

![image-20220502190152489](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502190152489.png)



跨级元素在父元素里面居中

下面就是第二个div嵌套在第一个用position属性的父类div中

![image-20220502190452471](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502190452471.png) 

![image-20220502190504315](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502190504315.png) 在父元素里面垂直居中了哦



##### ③单列布局

标准布局header-main-footer

下面就是使用示例

![image-20220502191935113](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502191935113.png)

为了实现下面这个头尾撑满页面的操作，我上面用.content类选择器把文本和背景隔离开，文本为max-width，而背景没有设置宽度，则会自动填充背景，但是你问我内容为什么不填充，我只能说无可奉告，说着玩的，其实我估计这就是规则吧

![image-20220502192009386](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502192009386.png) 



##### ④两列布局

下面就是实现拉动浏览器边框，但是里面左右列布局依然会自适应

主要是那个container要搞个max-width来自适应

而left和right类的width要改成50%，这样当你的container变化的时候，能保证对应元素也是占对半的50%的

![image-20220502192505473](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502192505473.png)

![image-20220502192517697](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502192517697.png)



**侧边栏固定宽度 主内容自适应**

下面两种方式都行

aside设置一个具体的宽度，而main我不提出宽度，浏览器会自动判断

而巧妙的地方就在float和margin-left的联动，为什么这么说呢？

你的float浮动会脱离文档流，可能会覆盖一部分本行的元素，而你下面又写了个margin-left的左外边距为200pixel，刚好躲过一劫

![image-20220502193021110](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502193021110.png) 

下面就是实现了不使用float浮动元素，而使用position定位来实现，但是你会发现粉色和蓝色部分会有空隙，所以你得先搞一个父元素，这个父元素，不需要干嘛，只需要它的position为relative就行，具体原理后面来不咯

![image-20220502193619757](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502193619757.png)



下面的图你拖动边框，只有蓝色的部分会变化，而粉色部分的宽度一定

![image-20220502193232455](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502193232455.png)



##### ⑤三列布局

**第一种方法，利用浮动**

注意两个点

第一个点，center里面是不能指定宽度的，让其自适应即可

第二点，下面body的书写顺序是左-右-中

![image-20220502194106566](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502194106566.png)

**第二种方法，利用绝对定位**

![image-20220502194401021](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502194401021.png)

![image-20220502194323776](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502194323776.png)



**第三个，margin负值法**

这个.left的margin-left的-100%和margin-right的-200px挺有意思的，请看下面的讲解

![image-20220502212153167](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502212153167.png)

![image-20220502194323776](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502194323776.png)

这个往左移动就是从下面的起始点往左移动出现出界，然后跟那个游戏一样，它反而从右边的上面出来了，然后你移动的越多越它在上一行越往左移，因为百分百嘛就移动到了上面的位置，而蓝色部分就比较玄学了，这个还是得看一下资料，但是你先记住是往左边用-200px，就往上平移了，不知道为啥

![image-20220502212453056](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502212453056.png)



##### ⑥双飞翼布局和圣杯布局

下面就是双飞翼布局的代码

![image-20220502213350406](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502213350406.png)

![image-20220502213338789](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502213338789.png)

圣杯布局的代码，自己查阅原理吧

![image-20220502213210777](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502213210777.png)

![image-20220502213239468](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502213239468.png) 

效果图如下，感觉不如效果。。乱画

![image-20220502213422340](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502213422340.png)



##### ⑦瀑布流布局

示例图如下，详细信息请查阅视频

https://www.bilibili.com/video/BV1QW411N762?p=61&t=78.9

![image-20220502213626698](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502213626698.png)



##### ⑧弹性盒布局

想实现如下效果请参照下个视频的链接

https://www.bilibili.com/video/BV1QW411N762?p=62&t=254.8

![image-20220502214329183](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502214329183.png)

**弹性盒布局的对齐**

上一个视频链接的下一个视频

![image-20220502214546778](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220502214546778.png)



##### ⑨弹性盒的一堆知识







##### ⑩栅格布局(网格布局)

栅格容器的元素称之为子元素

![image-20220503141832286](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503141832286.png)

使用就是使得元素的display属性为grid和inline-grid

###### 基础写法

下面的

grid-template-columns你写几个分成几列

写法有如下方式

第一个，200px 50% 1fr(这个意思就是第一列为200个像素，第二列占据栅格容器的宽度百分比，1fr就是指的剩下的部分)

第二个，1fr 2fr 3fr(三列在栅格容器占据的比例是1比2比3)

![image-20220503142043285](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503142043285.png)

按照纵向栅格轨道也是如此，fr即按照栅格容器的高来分配

![image-20220503154203973](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503154203973.png)



###### 栅格布局的区域

下面的写法

第一步，最上面的类选择器，给他们的栅格化area起一个名字

第二步，就是下面的grid-template-areas内容的填充了：注意两个点每一行都必须带上''每一行都是字符串，而且想填空的地方填...，然后布局的话自己好好想想就没事了

![image-20220503154912063](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503154912063.png)

![image-20220503154928776](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503154928776.png)



###### 栅格区域的行列和间距

先说一下行列怎么操作的，看到了下面的在每个字符串后面的px了吗，你只写一个px大小设置的是行多宽，而你要设置列的话就先打个/好，然后再写上列的具体数值

然后是间距，第一个是行的间距，第二个值是列的间距，你只写一个的话，就是行列的间距

上面的都有很多种写法，我这里只介绍一种

![image-20220503155910758](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503155910758.png)



###### 关键字和函数

**fr**

全称fraction，片段的含义

下面是一个骚的写法，怎么说呢，100px是固定的是吧，就是那种你拖动边框都不会变小的，而auto是浏览器会去计算所写的内容所需要的最小的空间，然后其余的就会分配给中间那一列的1fr

![image-20220503160607969](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503160607969.png)



**min-content & max-content**

min-content：尽量少占用空间，足够显示内容即可

max-content：尽可能的占据内容所需的最大空间

下面的min-content就是尽可能的压榨空间，最多确保让最长的一个单词在一行完整显示的长度

![image-20220503160914359](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503160914359.png)



**repeat()**

repeat(重复次数, 重复内容)

骚操作，嵌套写，repeat里面的内容项也写一个repeat，烧啊

![image-20220503161210503](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503161210503.png)



**auto-fill**

repeat(auto-fill, 内容)

这个auto-fill就是使得内容会自动调整来达到尽可能的显示到屏幕上

本来如下的，但是你往左边拉，就会变得下下张图这种

![image-20220503161600746](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503161600746.png)

![image-20220503161611618](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503161611618.png)



**minmax()**

设置轨道的尺寸为弹性值

就是给你的列设置一个变化的范围，到底多大让浏览器决定

![image-20220503161854248](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503161854248.png)



**auto-fit**

repeat(auto-fit, 内容)

这个需要结合auto-fill来理解

第一个就是auto-fill效果，通过添加无内容列来填充

第二个就是auto-fit的效果，改变每列的宽度来填充

![image-20220503162441918](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503162441918.png)

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503162452209.png)





**fit-content()**

说白了就是在你给定的值里面找一个合适的值

![img](https://img-blog.csdnimg.cn/20200814181647631.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIxNTIyMzMx,size_16,color_FFFFFF,t_70#pic_center)

示例如下

![image-20220503163230709](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503163230709.png)



###### 栅格布局的对齐方式

![image-20220503163453972](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503163453972.png)



**justify-content**

指定的是栅格布局在水平方向上的对齐方式

justify-content: start(默认，靠左对齐)

center;栅格容器的中间

end;靠栅格容器的终边对齐，靠右边

space-around;每列都有空隙，而不会挨在一起，如下

![image-20220503164347195](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503164347195.png) 



**align-content**

指定的是栅格布局在垂直方向上的对齐方式

写法如上，只是在竖直方向上而已，自己想象



**justify-items和align-items**

这个的意思是在自己网格里面的位置

![在这里插入图片描述](https://img-blog.csdnimg.cn/feda9cabe5f24d299eb860669aee4f44.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5aW257u_6LWw57OW,size_20,color_FFFFFF,t_70,g_se,x_16)



**justify-self和align-self**

设置单个元素的操作，如下

![image-20220503174732236](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503174732236.png) 



**place相关**

相当于一个属性同时设置了行列属性

![image-20220503174907036](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503174907036.png)

![image-20220503175023707](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503175023707.png) 写法，先align再justify属性



###### 栅格线

[]的内容是给栅格线起的名称 也可以不写从左至右默认的名称是one two three...

如果存在多个名称，那么使用空格隔开即可，如下面的first apple

![image-20220503175641235](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503175641235.png)

![image-20220503175716265](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503175716265.png)

也可以简写成下面的属性，grid-column: start / end;

![image-20220503180918863](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503180918863.png)

甚至还可以如下，但要注意书写的顺序

![](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503181130600.png)

![image-20220503181252297](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503181252297.png) 顺序顺序顺序！

下面就是操作栅格线的位置的操作，通过.栅格线的名称，实现特殊处理，但是要指明行列分别在哪两条栅格线的范围

![image-20220503180008350](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503180008350.png)

三个点

第一个，栅格元素不必填满整个栅格容器，下图的2仔细看就没有填满

第二个，栅格元素是可以相互覆盖的，下面的3覆盖了1

第三个，如果省略了结束栅格线，那么结束栅格线使用下一条栅格线来代替

![image-20220503180705120](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503180705120.png)



###### 修改重叠的顺序

两种方法，修改z-index和order属性的值

z-index大伙一般默认0，你修改一下值就会调整顺序了

order是设置高度

具体操作看下图

![image-20220503181441863](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503181441863.png)



###### 栅格元素放置规则

girt-auto-flow设置栅格元素的放置规则

![image-20220503181724408](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503181724408.png)

写法如下，就是把每个元素尽可能地凑在一起的操作

![image-20220503182417588](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503182417588.png) 

​	

这个**grid-auto-rows**就是设置超出了容器范围的元素的行的大小

![image-20220503182803678](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503182803678.png) 



grid属性

![image-20220503183400304](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503183400304.png)

![image-20220503183345567](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503183345567.png)

![image-20220503183448937](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503183448937.png)





#### 16、文本样式

##### ①文本对齐

text-align(文本对齐)

具体实现和效果如下

补充一下，最后一个是两端对齐

![image-20220503183820229](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503183820229.png)



##### ②保留空白字符

white-space

![image-20220503183951484](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503183951484.png)

![image-20220503184126077](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503184126077.png) 



##### ③设置文本方向

定义文本开始的方向从左至右，还是从右至左

direction(设置文本方向)

默认值为“ltr”，可以修改为“rtl如下

![image-20220503184253851](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503184253851.png)

如果想把文本翻转过来应该怎么办呢

unicode-bidi

如下

![image-20220503184405953](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503184405953.png)

如果我想从上往下书写该怎么办呢

writing-mode

默认是让文本从左往右水平流动，从上往左换行

![image-20220503184516642](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503184516642.png)

如下，先右-左，float浮动到右边去

![image-20220503184624600](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503184624600.png)



##### ④设置缩进

text-indent

![image-20220503184827926](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503184827926.png)



##### ⑤设置间距

字母之间的间距：letter-spacing
单词之间的间距：word-spacing
行高：line-height

*这里建议line-height不要写单位，这里的2表示的是你设置的这个元素尺寸的2倍*

![image-20220503185228325](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503185228325.png)



##### ⑥纵向对齐文本

vertical-align

![image-20220503204859934](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503204859934.png)

示例如下

![image-20220503204952464](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503204952464.png)



##### ⑦创建文本阴影

text-shadow

![image-20220503205030992](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503205030992.png)

示例如下

![image-20220503205154100](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503205154100.png)



##### ⑧控制断词

word-break

设置这个属性为break-all就可以实现处理溢出的操作了

![image-20220503205357601](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503205357601.png) 

![image-20220503205308272](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503205308272.png)



##### ⑨控制文本溢出

下面的玩意就是控制溢出的文本表现为...的操作

首先white-space控制nowrap

然后overflow设置溢出的为隐藏

然后**必须满足前两个条件**下，才能使用text-overflow为ellipsis [ɪˈlɪpsɪss]省略号

![image-20220503205929521](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503205929521.png) 

![image-20220503205850618](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503205850618.png)



##### ⑩装饰文本

text-decoration

所谓的装饰其实也就是为文本添加上划线、下划线和中划线

四个属性

text-decoration-line指定你想要什么线
*none(没有)*
*overline(上划线)*
*line-through(中划线)*
*underline(下划线)*

thickness指定线条的厚	度

style指定你需要的实线、双实线、点线、虚线或者是波浪线

color指定线条的颜色

![image-20220503210302025](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503210302025.png)

下面“别人的梦”是因为超链接，所以其本身就带一条蓝色的线

而这里可以实现取消超链接的下划线

```css
a {
	text-decoration: none;
}
```

![image-20220503210830899](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503210830899.png)



##### ⑨转换大小写

text-transform

![image-20220503211042297](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503211042297.png)

示例如下

![image-20220503211144042](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503211144042.png)



#### 17、字体

font属性

![image-20220503211319827](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503211319827.png)



##### ①font-family(字体类型)

代码有两个需要注意的点，这个font-family这么多值是因为它是第一个值浏览器不支持就往后看，选用浏览器支持的那个字体

而有限玩意要用''括起来也是因为字体类型的名称带空格，防止出错才圈起来

![image-20220503211758003](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503211758003.png)





##### ②font-size(字体大小)

```css
font-size: xx;/*写法如右*/
```

![image-20220503212030301](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503212030301.png)



##### ③font-weight(字体粗细)

指的是字体的粗细

![image-20220503212853921](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503212853921.png)

##### ④font-style

设置字体是否倾斜

##### ⑤font-variant

设置文本以小型大写字体显示

三者的使用如下图

bold加粗

italic斜体的

small-caps小型大写字体，请看第一个行和第四行的变化，说白了就是让字体大写，但是型号没有多大的变化

![image-20220503213236967](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503213236967.png)



##### ⑥使用Web字体

@font-face

当我们想在网页上放一些不太常见的字体时，得先让用户在下载网页的时候自动下载你指定的字体
先将字体文件放到服务器上，然后通过src属性来告诉浏览器字体文件的位置，当用户在访问的时候，用户就会自动下载该字体了

请看
font-family设置字体的名称
src指定文件的位置
然后你就可以通过指定的名称去调用字体了

![image-20220503213853088](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220503213853088.png)





#### 18、尺寸(em/rem/%/vw)

em：表示其父元素字号的倍数

rem：表示其根元素字号的倍数

%：表示其父元素字号的百分比

vw(viewport width)：视口宽度，1vw相当于1%的视口宽度，而视口宽度在Web中通常是浏览器的窗口宽度，而浏览器放大缩小，视口宽度放大缩小



