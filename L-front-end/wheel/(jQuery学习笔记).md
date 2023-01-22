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



### 4.2、链式编程

<img src="(jQuery学习笔记).assets/image-20221008174620553.png" alt="image-20221008174620553" style="zoom: 67%;" /> 







## 5、选择器

### 5.1、基础选择器——层级选择器——筛选选择器

<img src="(jQuery学习笔记).assets/image-20220929220107261.png" alt="image-20220929220107261" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20220929220051904.png" alt="image-20220929220051904" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20220929220405552.png" alt="image-20220929220405552" style="zoom:67%;" /> 



### 5.2、筛选方法

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











## 6、样式

### 6.1、操作CSS方法

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



### 6.2、设置类样式法

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

 







## 7、动画

animate都是小case了

<img src="(jQuery学习笔记).assets/image-20221008225220253.png" alt="image-20221008225220253" style="zoom:67%;" /> 

### 7.1、show/hide/toggle

> 几个家伙都差不多

<img src="(jQuery学习笔记).assets/image-20221008225427689.png" alt="image-20221008225427689" style="zoom:67%;" /> 



<img src="(jQuery学习笔记).assets/image-20221008225747342.png" alt="image-20221008225747342" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20221008225951842.png" alt="image-20221008225951842" style="zoom:67%;" /> 

> 示例：
>
> 感觉toggle就是显示就隐藏，隐藏就显示
>
> <img src="(jQuery学习笔记).assets/image-20221008230029869.png" alt="image-20221008230029869" style="zoom:67%;" /> 







### 7.2、slideDown/slideUp/slideToggle

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





### 7.3、stop

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







### 7.4、淡入淡出

fadeIn/fadeOut/fadeTo/fadeToggle

#### ①fadeIn/fadeOutfadeToggle

<img src="(jQuery学习笔记).assets/image-20221008232154467.png" alt="image-20221008232154467" style="zoom:67%;" /> 

> 效果：
>
> <img src="(jQuery学习笔记).assets/1-1665242482361-4.gif" alt="1" style="zoom:67%;" /> 



#### ②fadeTo(半透明)

<img src="(jQuery学习笔记).assets/image-20221008232330043.png" alt="image-20221008232330043" style="zoom:60%;" />  

> 示例：
>
> <img src="(jQuery学习笔记).assets/1-1665242655727-6.gif" alt="1" style="zoom:67%;" /> 
>
> <img src="(jQuery学习笔记).assets/image-20221008232528679.png" alt="image-20221008232528679" style="zoom:67%;" />  









### 7.5、自定义动画animate

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





## 8、属性操作

### 8.1、获取固有属性prop()

<img src="(jQuery学习笔记).assets/image-20221009215911122.png" alt="image-20221009215911122" style="zoom:67%;" /> 

> 示例：
>
> <img src="(jQuery学习笔记).assets/image-20221009215900909.png" alt="image-20221009215900909" style="zoom:67%;" /> 





### 8.2、获取自定义属性attr()

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







### 8.3、数据缓存data()

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







## 9、内容文本值	

> html()、text()、val()
>
> `后两者括号为空就是获取、括号有值就是修改`

<img src="(jQuery学习笔记).assets/image-20221013230442520.png" alt="image-20221013230442520" style="zoom:67%;" /> 











## 10、元素操作

### 10.1、遍历元素

> 1、**两种写法**
>
> (1) *常用于遍历DOM对象*
>
> $("div").each(funciton(index, domEle){...}); 
>
> (2) *常用于比遍历数据，类似于数组对象啊什么的，foreach*
>
> $.each(arr, function(index, ele){...}); 
>
> index 是索引号或者key
>
> domEle 是DOM对象
>
> ele 是元素或者value
>
> 
>
> (3)下面是遍历对象的示例
>
> <img src="(jQuery学习笔记).assets/image-20221014154017913.png" alt="image-20221014154017913" style="zoom:60%;" /> 

<img src="(jQuery学习笔记).assets/image-20221014153301568.png" alt="image-20221014153301568" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20221014153109908.png" alt="image-20221014153109908" style="zoom:67%;" /> 











### 10.2、CRUD

> `1、创建元素`
>
> $("<li>创建新结点</li>");

<img src="(jQuery学习笔记).assets/image-20221017232317590.png" alt="image-20221017232317590" style="zoom:67%;" /> 牛



> `2、添加元素`

**（1）内部添加**

添加儿子

$("ul").append(li);

$("ul").prepend(li);

![image-20221017232544841]((jQuery学习笔记).assets/image-20221017232544841.png) 



**（2）外部添加**

添加兄弟

$(".test").after(div);

$(".test").**before**(div);

<img src="(jQuery学习笔记).assets/image-20221017232652402.png" alt="image-20221017232652402" style="zoom:80%;" /> 



> `3、删除元素`

$("ul").remove();

$("ul").empty();

$("ul").html("");

<img src="(jQuery学习笔记).assets/image-20221017232901106.png" alt="image-20221017232901106" style="zoom: 67%;" />  









### 10.3、尺寸操作

> width()/height() // 只算width/height
>
> innerWidth/innerHeight() // 包含padding
>
> outerWidth()/outerHeight() // 包含padding、border
>
> outerWidth(true)/outerHeight() // 包含padding、border、margin

<img src="(jQuery学习笔记).assets/image-20221018120753692.png" alt="image-20221018120753692" style="zoom:67%;" /> 

> 示例：
>
> <img src="(jQuery学习笔记).assets/image-20221018121201545.png" alt="image-20221018121201545" style="zoom:60%;" /> 







### 10.4、位置操作

offset、position、Scroll

> 1、offset()
>
> **设置和获取**

<img src="(jQuery学习笔记).assets/image-20221018121623250.png" alt="image-20221018121623250" style="zoom:67%;" /> 

 <img src="(jQuery学习笔记).assets/image-20221018121919881.png" alt="image-20221018121919881" style="zoom:67%;" /> 



> 2、position()
>
> **只能获取不能设置**

<img src="(jQuery学习笔记).assets/image-20221018121824420.png" alt="image-20221018121824420" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20221018122101148.png" alt="image-20221018122101148" style="zoom:67%;" /> 



> 3、ScrollTop()/ScrollLeft()
>

<img src="(jQuery学习笔记).assets/image-20221018122650112.png" alt="image-20221018122650112" style="zoom:67%;" /> 

 <img src="(jQuery学习笔记).assets/image-20221018122559746.png" alt="image-20221018122559746" style="zoom:67%;" />





## 11、事件

### 11.1、单个事件注册

![image-20221025000011385]((jQuery学习笔记).assets/image-20221025000011385.png)



### 11.2、事件处理on()绑定事件

on()

> **有三个优势**
>
> 优势一，`可以一次绑定多个事件`

<img src="(jQuery学习笔记).assets/image-20221025000504699.png" alt="image-20221025000504699" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20221025000636757.png" alt="image-20221025000636757" style="zoom: 60%;" />  

<img src="(jQuery学习笔记).assets/image-20221025000229296.png" alt="image-20221025000229296" style="zoom:67%;" /> 两种写法

<img src="(jQuery学习笔记).assets/image-20221025000738102.png" alt="image-20221025000738102" style="zoom:67%;" /> 

 



> 优势二，`可以实现事件委托`
>

<img src="(jQuery学习笔记).assets/image-20221025001145680.png" alt="image-20221025001145680" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20221025001249878.png" alt="image-20221025001249878" style="zoom: 80%;" /> 



> 优势三，`动态创建的元素绑定事件`
>

<img src="(jQuery学习笔记).assets/image-20221025001832999.png" alt="image-20221025001832999" style="zoom:67%;" /> 







### 11.3、解绑off()

off()

<img src="(jQuery学习笔记).assets/image-20221025002835067.png" alt="image-20221025002835067" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20221025003005711.png" alt="image-20221025003005711" style="zoom:67%;" /> 







### 11.4、自动触发事件

trigger()

<img src="(jQuery学习笔记).assets/image-20221025003606414.png" alt="image-20221025003606414" style="zoom: 60%;" /> 

 <img src="(jQuery学习笔记).assets/image-20221025003543777.png" alt="image-20221025003543777" style="zoom: 60%;" /> 





### 11.5、事件对象

event

stopPropagation

<img src="(jQuery学习笔记).assets/image-20221025003940655.png" alt="image-20221025003940655" style="zoom:67%;" /> 

 <img src="(jQuery学习笔记).assets/image-20221025004303896.png" alt="image-20221025004303896" style="zoom:67%;" />





### 11.6、拷贝对象

<img src="(jQuery学习笔记).assets/image-20221026001553117.png" alt="image-20221026001553117" style="zoom:67%;" />   



> 1、**浅拷贝**
>
> 浅拷贝把原来对象里面的**复杂数据类型地址**拷贝给目标对象
>
> 复杂数据类型是指<img src="(jQuery学习笔记).assets/image-20221026002632227.png" alt="image-20221026002632227" style="zoom:80%;" /> 
>
> 所以`当修改了拷贝得到的数据的复杂类型的数据时，原来的本体的数据也会变`，毕竟拷贝的是地址嘛
>
> <img src="(jQuery学习笔记).assets/image-20221026002700251.png" alt="image-20221026002700251" style="zoom:67%;" /> 
>
> <img src="(jQuery学习笔记).assets/image-20221026000535783.png" alt="image-20221026000535783" style="zoom:67%;" /> 
>
> <img src="(jQuery学习笔记).assets/image-20221026000737263.png" alt="image-20221026000737263" style="zoom: 60%;" /> 这就是底层的结构
>
> 
>
> 
>
> 2、**深拷贝**
>
> 深拷贝把里面的**复杂数据类型**完全复制一份给目标对象 如果有不冲突的属性，就合并到一起
>
> `不会出现上面的修改副本，本体也改的情况`
>
> <img src="(jQuery学习笔记).assets/image-20221026000636435.png" alt="image-20221026000636435" style="zoom:67%;" /> 
>
> <img src="(jQuery学习笔记).assets/image-20221026000719888.png" alt="image-20221026000719888" style="zoom: 60%;" /> 底层的结构
>
> 







## 12、jQuery多库共存

<img src="(jQuery学习笔记).assets/image-20221026001313625.png" alt="image-20221026001313625" style="zoom:67%;" /> 

<img src="(jQuery学习笔记).assets/image-20221026001251977.png" alt="image-20221026001251977" style="zoom:67%;" /> 







## 13、jQuery妙用

### 13.1、jQuery插件

<img src="(jQuery学习笔记).assets/image-20230106211947575.png" alt="image-20230106211947575" style="zoom:67%;" />  





### 13.2、图片懒加载技术/全屏滚动插件

去插件库下载就好了

<img src="(jQuery学习笔记).assets/image-20230107003025368.png" alt="image-20230107003025368" style="zoom:67%;" />  









`

`

`

`

`

`

`

`









