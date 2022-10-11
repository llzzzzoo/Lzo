[TOC]







# 一、基础概述

## 1、JavaScript库

<img src="(jQuery学习笔记).assets/image-20220925225514573.png" alt="image-20220925225514573" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20220925225546280.png" alt="image-20220925225546280" style="zoom:67%;" /> 







## 2、jQuery

<img src="(jQuery学习笔记).assets/image-20220925225804089.png" alt="image-20220925225804089" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20220925225910385.png" alt="image-20220925225910385" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20220929211641346.png" alt="image-20220929211641346" style="zoom:50%;" /> 





# 二、基础使用

## 1、入口函数

<img src="(jQuery学习笔记).assets/image-20220929212703184.png" alt="image-20220929212703184" style="zoom:67%;" /> 

> 示例：
>
> <img src="(jQuery学习笔记).assets/image-20220929212717571.png" alt="image-20220929212717571" style="zoom:67%;" /> 











## 2、顶级对象——$

<img src="(jQuery学习笔记).assets/image-20220929212947077.png" alt="image-20220929212947077" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20220929213021151.png" alt="image-20220929213021151" style="zoom:67%;" /> 



> **重要**
>
> `使用querySelector获取的是DOM对象`
>
> 而使用`$('div')，获取的是jQuery对象`，它`把DOM对象进行了包装`
>
> 所以可以写<u>$('div').hide() 因为这是jQuery的方法</u>
>
> 而如果是<u>DOM原生对象就得写，div.style.display = 'none'</u>; // 当然jQuery也无法使用原生DOM的方法
>
> <img src="(jQuery学习笔记).assets/image-20220929213453752.png" alt="image-20220929213453752" style="zoom:67%;" /> 





## 3、jQuery对象和DOM对象的相互转换

<img src="(jQuery学习笔记).assets/image-20220929214735318.png" alt="image-20220929214735318" style="zoom:67%;" /> 





## 4、常用API



### 4.1、隐式迭代

#### 4.1.1、概述

> 注意`隐式迭代`

<img src="(jQuery学习笔记).assets/image-20220929215946322.png" alt="image-20220929215946322" style="zoom:67%;" /> 

![image-20220929220154076]((jQuery学习笔记).assets/image-20220929220154076.png)

 

#### 4.1.2、排他思想

> 利用隐式迭代的*排他思想*

<img src="(jQuery学习笔记).assets/image-20220930135519908.png" alt="image-20220930135519908" style="zoom:67%;" /> 



#### 4.1.3、链式编程

<img src="(jQuery学习笔记).assets/image-20221008174620553.png" alt="image-20221008174620553" style="zoom: 67%;" /> 







### 4.2、选择器

#### 4.2.1、基础选择器——层级选择器——筛选选择器

<img src="(jQuery学习笔记).assets/image-20220929220107261.png" alt="image-20220929220107261" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20220929220051904.png" alt="image-20220929220051904" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20220929220405552.png" alt="image-20220929220405552" style="zoom:67%;" /> 



#### 4.2.2、筛选方法

> 注意两点
>
> 第一，这些都是方法函数，`别忘了加小括号`
>
> 第二，查找的角度是`往父子兄的角度查找的`

<img src="(jQuery学习笔记).assets/image-20220929220652896.png" alt="image-20220929220652896" style="zoom:67%;" /> 

> parent()/children()/find()

<img src="(jQuery学习笔记).assets/image-20220929221328918.png" alt="image-20220929221328918" style="zoom:67%;" /> 

> siblings/eq/hasClass

<img src="(jQuery学习笔记).assets/image-20220929230544925.png" alt="image-20220929230544925" style="zoom:67%;" /> 











### 4.3、样式

#### 4.3.1、操作CSS方法

```javascript
三种写法
$(this).css("color");
$(this).css("color", "red");
$(this).css({
	width: 400,
	hieght: 400,
	backgroundColor: "red"
});
```

<img src="(jQuery学习笔记).assets/image-20220930140246284.png" alt="image-20220930140246284" style="zoom:67%;" /> 

> 示例
>
> <img src="(jQuery学习笔记).assets/image-20220930140557420.png" alt="image-20220930140557420" style="zoom:67%;" /> 



#### 4.3.2、设置类样式法

> 1、添加类
>
> addClass("current");
>
> 2、移除类
>
> removeClass("current");
>
> 3、切换类
>
> toggleClass("current");
>
> *toggleClass*()用来判断元素是否拥有此类名,有的话就删除,无的话就添加,可以达到切换的效果

<img src="(jQuery学习笔记).assets/image-20220930140848375.png" alt="image-20220930140848375" style="zoom:67%;" /> 

> **下面是原生JS的className和jQuery对类操作的区别**
>
> className只能是覆盖
>
> jQuery 添加、移除、切换都可以
>
> <img src="(jQuery学习笔记).assets/image-20220930172835011.png" alt="image-20220930172835011" style="zoom:67%;" /> 
>
> <img src="(jQuery学习笔记).assets/image-20220930172941820.png" alt="image-20220930172941820" style="zoom:67%;" /> 

 







### 4.4、动画

animate都是小case了

<img src="(jQuery学习笔记).assets/image-20221008225220253.png" alt="image-20221008225220253" style="zoom:67%;" /> 

#### 4.4.1、show/hide/toggle

> 几个家伙都差不多

<img src="(jQuery学习笔记).assets/image-20221008225427689.png" alt="image-20221008225427689" style="zoom:67%;" /> 



<img src="(jQuery学习笔记).assets/image-20221008225747342.png" alt="image-20221008225747342" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20221008225951842.png" alt="image-20221008225951842" style="zoom:67%;" /> 

> 示例：
>
> 感觉toggle就是显示就隐藏，隐藏就显示
>
> <img src="(jQuery学习笔记).assets/image-20221008230029869.png" alt="image-20221008230029869" style="zoom:67%;" /> 







#### 4.4.2、slideDown/slideUp/slideToggle

> 示例：
>
> <img src="(jQuery学习笔记).assets/1.gif" alt="1" style="zoom:67%;" /> 
>
> 
>
> <img src="(jQuery学习笔记).assets/image-20221008231025207.png" alt="image-20221008231025207" style="zoom:67%;" /> 
>
> 
>
> 但是有更好的写法，**运用事件切换**
>
> 先on后out
>
> <img src="(jQuery学习笔记).assets/image-20221008231154992.png" alt="image-20221008231154992" style="zoom:67%;" /> 
>
> 
>
> 还可以更简单
>
> 利用hover只写一个函数，鼠标经过和离开都会触发的特性，结合slideToggle
>
> <img src="(jQuery学习笔记).assets/image-20221008231303821.png" alt="image-20221008231303821" style="zoom:67%;" /> 





#### 4.4.3、stop

> 由于动画一旦开始就只会执行到结束
>
> 所以可能会出现
>
> <img src="(jQuery学习笔记).assets/1-1665242290793-2.gif" alt="1" style="zoom:50%;" /> 
>
> 
>
> 这里利用**stop**，每次触发当前动画都会停止上一次动画，每次只保存当前的动画

<img src="(jQuery学习笔记).assets/image-20221008231835608.png" alt="image-20221008231835608" style="zoom:60%;" /> 

> 示例：

<img src="(jQuery学习笔记).assets/image-20221008231642052.png" alt="image-20221008231642052" style="zoom:67%;" /> 







#### 4.4.4、淡入淡出

fadeIn/fadeOut/fadeTo/fadeToggle

##### ①fadeIn/fadeOutfadeToggle

<img src="(jQuery学习笔记).assets/image-20221008232154467.png" alt="image-20221008232154467" style="zoom:67%;" /> 

> 效果：
>
> <img src="(jQuery学习笔记).assets/1-1665242482361-4.gif" alt="1" style="zoom:67%;" /> 



##### ②fadeTo(半透明)

<img src="(jQuery学习笔记).assets/image-20221008232330043.png" alt="image-20221008232330043" style="zoom:60%;" />  

> 示例：
>
> <img src="(jQuery学习笔记).assets/1-1665242655727-6.gif" alt="1" style="zoom:67%;" /> 
>
> <img src="(jQuery学习笔记).assets/image-20221008232528679.png" alt="image-20221008232528679" style="zoom:67%;" />  









#### 4.4.5、自定义动画animate

<img src="(jQuery学习笔记).assets/image-20221009152427982.png" alt="image-20221009152427982" style="zoom:67%;" /> 

> 示例：
>
> <img src="(jQuery学习笔记).assets/1-1665300787741-1.gif" alt="1" style="zoom:50%;" /> 
>
> ```html
> <body>
>     <button>点击</button>
>     <div>1</div>
>     <script>
>         $(function(){
>             $("button").click(function(){ 
>                 $("div").animate({
>                     left: 500,
>                     top: 100,
>                     opacity: .4,
>                     width: 300
>                 }, 500);
>             })
> 
>         })
> 
>     </script>
> </body>
> ```
>
> 





### 4.5、属性操作

#### 4.5.1、获取固有属性prop()

<img src="(jQuery学习笔记).assets/image-20221009215911122.png" alt="image-20221009215911122" style="zoom:67%;" /> 

> 示例：
>
> <img src="(jQuery学习笔记).assets/image-20221009215900909.png" alt="image-20221009215900909" style="zoom:67%;" /> 





#### 4.5.2、获取自定义属性attr()

<img src="(jQuery学习笔记).assets/image-20221009220106815.png" alt="image-20221009220106815" style="zoom:67%;" /> 



> 示例：
>
> <img src="(jQuery学习笔记).assets/image-20221009221242520.png" alt="image-20221009221242520" style="zoom:80%;" /> 
>
> <img src="(jQuery学习笔记).assets/image-20221009220223535.png" alt="image-20221009220223535" style="zoom: 80%;" /> 
>
> <img src="(jQuery学习笔记).assets/image-20221009221044355.png" alt="image-20221009221044355" style="zoom:80%;" /> 这个data-index是H5自定义属性
>
> 







#### 4.5.3、数据缓存data()

> 什么意思呢？
>
> 这玩意其实是把元素当做一个变量，或者说容器，`把一些字面量存在元素的身上`，`放到元素的缓存里面`
>
> 因此就可以访问放到它缓存中的值
>
> 但是**一刷新就移除**是不是多少有点

<img src="(jQuery学习笔记).assets/image-20221009221334319.png" alt="image-20221009221334319" style="zoom:67%;" /> 



> 示例：
>
> <img src="(jQuery学习笔记).assets/image-20221009221147040.png" alt="image-20221009221147040" style="zoom:80%;" /> 











`

`

`

`

`

`

`

`









