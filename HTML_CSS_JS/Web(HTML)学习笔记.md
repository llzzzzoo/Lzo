

[TOC]



### 1.Web发展史

https://ilovefishc.com/html5/

HTML和CSS的都在这个链接的第一讲的案例里面

HTML：网页的骨骼，框架
CSS：给网页做美颜
JavaScript：提供了与客户交互的一系列操作，让网页不再是一个只能欣赏的花瓶 

![image-20220418173449477](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418173449477.png)

![image-20220418173536979](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418173536979.png)

![image-20220418173553259](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418173553259.png)

![image-20220418173651312](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418173651312.png)

![image-20220418173755620](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418173755620.png)

![image-20220418173717790](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418173717790.png)



### 2.Hello Web!

file:///C:/Users/Lzo/Desktop/Hello%20Web!.html

<!DOCTYPE html>//尖括号括起来的都是网页。这是一个声明，表明这是由html5编写
<html>//根标签(开始标签)，两个标签之间的所有代码称为html元素，标签<>中的关键字称为该元素的名称
	<head>//这里到结束被称为元素的内容
		<title>小林</title>//元素名称title，元素内容小林，嵌套理解嘛
	</head>
	<body>
		<h1>Hello Web!</h1>
		<p>I love you</p>
	</body>
</html>//结束标签

![image-20220418175104720](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418175104720.png)



### 3.插入图片

<!DOCTYPE html>
<html>
	<head>
		<title>小林</title>
		<meta charset="utf-8">//指定字符编码格式
		<meta name="viewport" content="width=device-width, initial-scale=1.0">//实现屏幕的自适应
	</head>
	<body>
		<h1>Hello Web!</h1>
		<img alt="测试" src="C:\Users\Lzo\Pictures\Saved Pictures\72欢度国庆.jpg" height="256px">//右边的alt是指图像不能使用的替代文本，src是指定文件位置，相对绝对路径都行，width和height是指定的宽度和长度
		<a href="https://www.youtube.com" target="_blank">点击就送</a>//右边的href是指定网址，右边的target是指定是否新建窗口，点击就送即为替换的文本
		<p>I love you</p>
	</body>
</html>

![image-20220418185519443](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418185519443.png)



### 4.meta

<title>小林</title>
```html
	//下面就是meta的一些操作
	<meta charset="utf-8">//指定字符编码格式
	<meta name="viewport" content="width=device-width, initial-scale=1.0">//实现屏幕的自适应
	<meta name="keywords" content="小林，小小林，小小小林">//关键词，方便爬虫搜索
	<meta name="description" content="快快来康康我">//对网页内容的描述，可以参考下面
	<meta name="author" content="小林">//网页的作者
	<meta http-equiv="refresh" content="5;http://www.youtube.com">//设置自动跳转到另一个网页，前面的5是指5秒后跳转
```

#### ①meta description

![image-20220418190934879](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220418190934879.png)



### 5.style

①media属性

```html
	<style type="text/css">
		body {
			background-image: url("2eae998275598b47befdd88b661591a8.jpg")//设置背景图片
		}
		h1 {
			text-align: center;//标题居中
			color: white;//设置标题颜色
		}
        h2 {
			margin-left: 60%;//左边距
			color: white;
		}
        p {
			text-indent: 32px;//设置缩进，这个设置缩进配合字体尺寸可以实现开头空两个字符
			font-size: 16px;//字体尺寸
			line-height: 32px;//行高
			color: white;
		}
        img	{//处理图片跟css相关，暂时看不太懂
			position: absoulute;
			left: 50%;
			margin-left: 50spx;
		}
        <style media="print">//这是给打印模式上规矩
		h1 {
			color: black;
		}
		h2 {
			color: black;
		}
		p {
			color: black;
		}
		</style>
		</style>
		
		<style media="screen and (min-width: 512px) and (max-width: 1024px)">//计算机界面当图片满足左边这个像素范围的时候就会打印下面的图片
			body {
				background-image: url("故宫1.jpg");
			}
		</style>
	</style>
```



### 6、link

### 7、base

```html
<link rel="stylesheet" type="text/css" href="猪兄.css">//链接外部的css文件
<link rel="stylesheet" type="txet/css" media="print" href="print.class">//链接media文件
<base href="http://www.youtube.com" target="_blank">//就是跟那个环境变量一样，其实不知道怎么说，给了你的操作一个基底，你的操作可以直接进入这个网页。。容我学到后面再进行补充
```



### 8、JavaScript

```html
	<script type="text/javascript"><!-- 这里是利用JavaScript进行的操作 -->
		document.write("I love you");
	</script>
	<noscript><!-- 这里是没有JavaScript是进行的操作 -->
		<p>宁在狗叫什么</p>
	</noscript>
```



### 9、块级元素和行内元素

概括一下：**块级元素讲究排场，行内元素讲究勤俭节约**

![image-20220419164850433](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419164850433.png)

![image-20220419164907809](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419164907809.png)

![image-20220419164951238](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419164951238.png)

![image-20220419165124478](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419165124478.png)

两者进行对比

![image-20220419165848554](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419165848554.png)

![image-20220419170215927](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419170215927.png)



### 10、字符实体

说白了就是有些符号是不能使用的，像> <这种，误认为标签就寄了，对于这些关键字，	得拿个字符实体(Character Entities)来替代，具体的去看下文档

![image-20220419170928717](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419170928717.png)

![image-20220419171000660](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419171000660.png)

等宽字体：字体宽度相同的计算机字体

比例字体：字符的宽度不相同，大的字体占得宽度理应大一点嘛，w和I两个字符如果宽度一样就太哈人了

![image-20220419171438733](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419171438733.png)



### 11、语义化

使用正确的元素去做正确的事情
其实后面吧，我们学习到很多元素，他们在浏览器的显示效果其实是一样的，但是语义化就要求你恰当地使用对应的元素实现对应的操作

![image-20220419190142267](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419190142267.png)

#### ①pre元素(定义预格式化文本)

pre元素用于定义预格式化文本
这玩意说白了就是：**保留文本在源代码的格式，使得页面显示的和源代码中的效果一致**

```html
<pre>//pre元素使用相关
	<!-- 里面的一些符号要考虑到字符实体化 -->
</pre>
```



#### ②code元素(定义计算机代码片段)

这玩意生来就是为了定义计算机代码片段的，好像markdown的代码片段一样

<pre>//code元素使用相关
<code>
	<!-- 可以嵌套写，这里面放计算机代码，也要考虑到字符实体 -->
</code>
</pre>



#### ③var、kbd、samp元素(定义变量、输入、输出)

var：定义程序的变量
kbd：定义用户的输入
samp：定义程序的输出



### 12、引用

#### ①q元素(文本打上引号)

下面就是实现了个一段文本打上引号的操作	

<p><q>嗨害<br><span>嗨</q></span></p><!-- 此处的span不会另起一行 -->



#### ②blockquote元素(定义引用文本)

quote：引用
site：引述

```html
	<blockquote><!-- 帮你自动缩进，并不会打引号哦 -->
	<p>你背单词时</p>
	<p>阿拉斯加的鳕鱼正跃出水面</p>
	<p>你算数学时</p>
	<p>太平洋彼岸的海鸥振翅掠过城市上空</p>
	<p>你晚自习时</p>
	<p>极圈中的夜空散漫了五彩斑斓</p>
	<p>但是少年你别着急</p>
	<p>在你为自己未来踏踏实实地努力时</p>
	<p>那些你感觉从来不会看到的景色</p>
	<p>那些你觉得终身不会遇到的人</p>
	<p>正一步步向你走来.</p>
	</blockquote>
```



#### ③cite元素(定义作品的标题)

主要用于定义作品的标题：书籍的标题，歌曲的标题，电影的名字，电视节目的名字，绘画，雕塑等的标题

<p><cite>送你一段话<cite></p><!-- 这里就是实现标题，但是只是换成斜体而已 -->



#### ④abbr元素(定义简称，缩写)

用于定义简称，缩写，和title结合简直juejue子
你把鼠标放上去就会发现牛逼之处了

<p>叫我<abbr title="靓仔">彭于晏</abbr></p>



#### ⑤dfn元素(表现定义中的术语)

用于表现定义中的术语(技术名词：指在特定专业领域中的一般概念的词语的一个指称)

装个p的逼，不就是给这个专业名词斜体一下嘛

<p><dfn>Java</dfn>是一门浪费咖啡的语言</p>



#### ⑥address元素(定义文档或者文章的作者)

定义文档或者文章的作者或者拥有者的联系信息

```html
	<address>
		<strong>地址在哪里</strong><br>
		地址：<a href=https://www.bilibili.com/">化腾生日啦！点击就送999！</a><br>
		电话：111<br>
	</address>
```



#### ⑦ruby、rt、rp元素(拼音)

这玩意好像就是添加了个在指定字体上显示其他标记如拼音的操作

```html
	<!-- 这个ruby就是输入字符，rt里面输入在字符头上显示的玩意 拼音字符都可 -->
	<!-- rp则是保个底的，当这玩意不支持头上显示的时候，就按照下面的备用操作实现在括号标记出来 -->
	<ruby>叔<rp>(</rp><rt>shū</rt><rp></rp></ruby>
	<ruby>叔<rp>(</rp><rt>shū</rt><rp></rp></ruby>	
	<ruby>我<rp>(</rp><rt>wǒ</rt><rp></rp></ruby>
	<ruby>啊<rp>(</rp><rt>à</rt><rp></rp></ruby>
```



#### ⑧bdo元素(倒着打印)

这玩意有点骚，在这个标签里面的元素，文本会倒着打印出来，而在其后面的所有标签下的元素，只要是有文本的都会自动向右靠齐

```html
	<bdo dir="rtl"><!-- 这个不指明的话是默认ltr的，如果说了是rtl的话，我估摸着算法应该是从最后往前面打印吧 -->
	<ruby>叔<rp>(</rp><rt>shū</rt><rp></rp></ruby>
	<ruby>叔<rp>(</rp><rt>shū</rt><rp></rp></ruby>	
	<ruby>我<rp>(</rp><rt>wǒ</rt><rp></rp></ruby>
	<ruby>啊<rp>(</rp><rt>à</rt><rp></rp></ruby>
	</bod>
```

![image-20220419202423332](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419202423332.png)



### 13、格式化

#### ①strong和b元素(加粗)

顾名思义，当你想突出某些文本的时候就会使用到它
就是实现了个**ctrl+B**的操作

```html
<!-- 下面的<b>和<strong>就是实现了强调的操作 -->	
<ruby><b>我</b><rp>(</rp><rt>wǒ</rt><rp></rp></ruby>
<ruby><strong>啊</strong><rp>(</rp><rt>à</rt><rp></rp></ruby>
```

#### ②em和i元素(斜体)

em和i元素：强调的语义，通常是以*斜体*的形式出现

```html
	<ruby><i>叔</i><rp>(</rp><rt>shū</rt><rp></rp></ruby>
	<ruby><em>叔</em><rp>(</rp><rt>shū</rt><rp></rp></ruby>	
```

<!-- 实现加粗和倾斜的操作需要在头标签里面搞一个下面的style -->

<style type="text/css">
	.bold {font-weight: bolder;}
	.italic {font-style: italic;}
</style>
<p class="bold">加粗</p>
<p class="italic">倾斜</p>



#### ③del元素和ins元素(旧的划去，指定新的元素)

这个专门处理**旧的划去，指定新的元素**

<p>今天起，我要自己去<del>上学</del>、<del>睡觉</del><ins></p>

<p><ins>呜呜┭┮﹏┭┮我要<abbr title="反正就是不学习略略略ψ(*｀ー´)ψ">回家</abbr>啦</ins></p>



#### ④s元素(表示不再正确的内容)

s元素定义那些**表示不再正确的内容**	

<p><s>我是老六</s>哈哈哈哈</p>



#### ⑤u元素(定义拼写错误的词汇)

定义的是拼写错误的单词或者汉语中的专有名词

<p><s>我是老六</s><u>拼写错误的单词或者汉语中的专有名词</u></p>



#### ⑥mark元素(标记文本)

用以标记文本

<p><mark>没做作业呜呜</mark></p>



#### ⑦sup元素和sub元素(上标文本和下标文本)

当我们在网页上使用上标文本和下标文本，最典型的就是定义数学公式或者说化学方程式，比如二次方的2，或者化学里面的O2

<p>2 * 2 = 2<sup>2</sup></p>

<p>客官，尝尝我自创的这瓶纯O<sub>2</sub></p>



#### ⑧small元素(指定的文本变小)

使得指定的文本变小

<p>我的很<small>大</small>你要忍一下<p>



### 14、列表

#### 一、无序列表(Unordered List)

```html
	<ul>
		<li>One</li>
		<li>By</li>
		<li>One</li>
	</ul>
<!--
打印就是下面的玩意，默认带个点点
   ·One
   ·By
   ·One
-->
```

#### 二、有序列表(Ordered List)

可设置降序升序还有字体啊什么的

![image-20220419212201570](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419212201570.png)

```html
	<ol>
		<li>HTML5 And CSS3</li>
		<li>Javascript</li>
		<li>JQuery</li>
		<li>BootStrapt</li>
		<li>Vue</li>
		<li>PHP</li>
	</ol>
	
<!--
1.HTML5 & CSS3
2.Javascript
3.JQuery
4.BootStrapt
5.Vue
6.PHP
-->
```

```html
<!-- type指定序号的类型，下面就是指代罗马数字，reversed就是指倒序的意思 -->	
<ol type="I" reversed>
		<li>HTML5 & CSS3</li>
		<li>Javascript</li>
		<li>JQuery</li>
		<li>BootStrapt</li>
		<li>Vue</li>
		<li>PHP</li>
	</ol>
```

![image-20220419212613961](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419212613961.png)



#### 三、传用于对列表操作的CSS属性

##### ①list-style-type(每列带着点点)

![image-20220419212817124](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419212817124.png)

效果如下

![image-20220419212827413](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419212827413.png)



##### ②list-style-image(每列带着数字编号)

可以实现外部的image来当列表的标志

![image-20220419213218283](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419213218283.png)



#### 四、列表嵌套

看下面的，套套套娃娃娃

![image-20220419213404727](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419213404727.png)



#### 五、定义列表

说白了就是使用tab键凸显出术语和对齐的描述

```html
	<!-- 单条术语与描述 -->
	<dl>
		<dt>hhh</dt>
		<dd>www</dd>
		<dd>www</dd>
		<dd>www</dd>
		<dt>hhh</dt>
	</dl>

<!-- 
hhh
	www
	www
	www
hhh
-->
```

![image-20220419213658409](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220419213658409.png)



### 15、表格

#### ①建表

```html
	<table><!-- table元素用于定义一个表格 -->
        <caption>一个标题，记得一定放在table的下面</caption>
		<tr><!-- table row 用于定义表格里面的行 -->
			<th>嘉心糖</th><!-- table header cell定义表头单元格 默认情况下浏览器会加粗居中-->
			<th>我一直都是嘉心糖啊</th>
		</tr>
		<tr>
			<td>一眼丁敦敦</td><!-- table data cell 定义数据单元格 内容可以是文本、图像、列表、甚至还可以是另外一个表格-->
			<td>啊对对对</td>
		</tr>
	</table>
```

#### ②框框

```html
<!-- 这个就是给表格画个框框 -->	
		<style>
			table {
				boeder: 1px solid black;
				border-collapse: collapse;<!-- 把表格的线条框框合并 -->
			}
			th {
				border: 1px solid red;
				padding: 5px;<!-- 调整单元格的内边距 -->
			}
			td {
				border: 1px solid blue;
				padding: 5px;
			}
			caption {<!-- 调整标题的内边距 -->
				padding: 10px;
			}
		</style>
```

#### ③标题

见上面的代码

#### ④表格的背景色

```html
		<!-- 设置表格的颜色 -->
		th {
			background: grey;
			color: white;
		}
```



调整不同的颜色

分为头和身体来分别调整颜色

```html
	thead th {
		background: gold;
		color: green;
	}
	tbody th {
		background: purple;
		color: pink;
	}
		<thead>
			<tr><!-- table row 用于定义表格里面的行 -->
				<th>嘉心糖</th><!-- table header cell定义表头单元格 默认情况下浏览器会加粗居中-->
				<th>我一直都是嘉心糖啊</th>
			</tr>
		</head>
		<tbody>
			<tr>
				<th>一眼</th>
				<td>一眼丁敦敦</td><!-- table data cell 定义数据单元格 内容可以是文本、图像、列表、甚至还可以是另外一个表格-->
				<td>啊对对对</td>
			</tr>
		</tbody>
```



#### ⑤tfoot元素(表的注脚)

表脚，可是实现放句万金油在表的一脚，解释权归我所有

```html
	<tbody>
		<tr>
			<!-- 这个colspan(column span)就是实现这个注脚跨了多少列的操作-->
			<td colspan="2">以上解释权反正不归你所有</td>
		</tr>
	</tbody>
```



#### ⑥rowspan元素(一个空占多行)

```html
<td rowspan="2">一整个大无语住</td>
```



#### ⑦colgroup和col元素(指定列的颜色)

```html
<colgroup>
	<col style="background: red">
	<col span="2" style="background: yellow">
</colgroup>
```



### 16、表单

#### ①form元素

#### ②input元素

#### ③button元素

```html
			<!-- action就是指定由什么玩意来处理用户提交的表单，忽略的话就是指定当前的页面来处理此表单 method就是传输的方式 -->
	<!-- get和post除了前者会在url整合你输入的内容，后者的提交是随http消息的主体发送到服务器的>
	<!-- 两者的区别除了这个还有很多 -->
	<form action="welcome.php" method="get">
		名字：<input type="password" name="name"><br><br>
		<!-- text明文，password是看不到的小点点 -->
		邮箱<input type="text" name="email"><br><br>
		<!-- button专门用于与鼠标操作 type是点击后发生的操作 -->
		<button type="submit">提交</button>
		<!-- 可以实现用户输入的全部重置了 -->
		<button type="reset">重置</button>
	</form>
```

#### ④autocomplete(自动填充)

这玩意说白了就是你带下那个框框，它把你以前输入过的东西记录在下面，相当于你平常网页点击一个账号，它帮你自动登录了

```html
		<!-- 上面这玩意就是开启或关闭全部表单自动填充的操作 -->
		<form action="welcome.php" method="post" autocomplete="off">
            <!-- 下面这玩意就是实现单独打开一个表单的自动填充操作 -->
			名字：<input type="password" name="name" autocomplete="on"><br><br>
```



#### ⑤target(指定目标显示位置)

```html
		<!-- 指定新标签页去打开 -->
		<form target="_blank" action="welcome.php" method="post" autocomplete="off">
```



#### ⑥value(指定默认值)

```html
<!-- value 这个时候输入框有默认值 可以改 -->
名字：<input type="text" name="name" value="桀桀" autocomplete="on"><br><br>
```



#### ⑦autofocus(自动聚焦)

说白了就是光标自动聚焦到你指定的框框，直接在你指定的框框闪烁，不需要你去点一下

```html
邮箱<input type="password" name="email" autofocus><br><br>
```



#### ⑧disabled(禁用元素)

具体表现为框框变得半透明，点击不会产生效果

```html
<button type="submit" disabled>提交</button>
```



**上面和下面两者的不同主要在于**：disabled是使得元素废掉了，不会提交上去；而readonly只是让元素只读，但是还是能提交上去

#### ⑨readonly(只读)

具体表现就是无法输入修改，但是不会变得半透明
我怀疑这玩意有两个作用，我以前核酸检测输入了身份证，那个姓名性别啥啥啥的就会自动填充，而且我也只能看，不能修改，还有一个就是报四级的时候，你要缴费了或者给协议打上勾，那个什么按钮才能操作

```html
名字：<input type="text" name="name" value="桀桀" autocomplete="on" readonly><br><br>
```



#### ⑩label元素(安全)

将文本包裹起来，不会带来形式上的变化

下面我用label包裹住input元素，这种关联叫做隐式关联，相关的叫做显式关联

```html
<!-- 这个好像就是我点下“名字”，这家伙会唤醒光标自动跳到输入框最左侧去 -->
<label>名字：<input type="text" name="name" value="桀桀" autocomplete="on"></label><br><br>
```

关于for属性

```html
<!-- 这个for对应后面的id，你想让光标跳到哪里，就控制for和id就好了，记住id是不能重复的 -->	
<label for="name">你是：</label><input type="text" name="name" id="name"><br><br>
<label for="myName">我是：</label><input type="text" name="myName" id="myName"><br><br>
```



#### ⑨fieldset元素(分组表单元素)

具体表现就是分了个框框

```html
<fieldset>
	<label>名字：<input type="text" name="name" value="桀桀" autocomplete="on"></label><br><br>
	<!-- text明文，password是看不到的小点点 -->
	邮箱<input type="password" name="email"><br><br>
</fieldset>
```

![image-20220421180732968](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421180732968.png)

#### ⑧legend元素(表格标题)

```html
<fieldset>
    <legend>用户信息</legend><!-- 这个必须放在首行才有如下效果，否则后果自负 -->
	<label>名字：<input type="text" name="name" value="桀桀" autocomplete="on"></label><br><br>
	<!-- text明文，password是看不到的小点点 -->
	邮箱<input type="password" name="email"><br><br>
</fieldset>
```

![image-20220421181001425](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421181001425.png)



#### ⑦select和option元素(下拉选项框)

```html
<label for="sex">性别：
	<select name="sex">
		<option>男</option>
		<option>女</option>
	</select>
</label><br><br>
```

![image-20220421181704798](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421181704798.png)



#### ⑥optgroup(对下拉选项进行分组)

```html
<select>
	<optgroup label="我是">
		<option value="h5017">第一个</option>
		<option value="h5018">第二个</option>
	</optgroup>
	<optgroup label="你是">
		<option value="sc008">①</option>
		<option value="sc009">②</option>
	</optgroup>
</select>
```

![image-20220421182741741](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421182741741.png)



### 17、input元素

#### 一、type属性

##### ①submit、button、reset(按钮)

type属性可以被设置为这三个值，就是说input元素可以通过修改type的值来实现替代button这三者的功能

```html
	<button type="submit">提交</button>
    <button type="reset">重写</button>
```

就是说上面的代码可以写成下面的这种，虽然感觉然并卵

```html
    <input type="submit" value="提交">
    <input type="reset" value="重写">
```



##### ②radio(单选框)

就是把这个下拉的选项框换个表现法

```html
	<select name="sex">
		<option value="male">男</option>
		<option value="female">女</option>
	</select>
```

换成下面这种

```html
   <!-- 记住这个name必须使用同一个才会发生互斥现象，即点了男不能点女 -->
	<label><input type="radio" name="sex" value="male">男</label>
    <label><input type="radio" name="sex" value="female">女</label>
```

就是从**左边换成右边**这种

![image-20220421224939995](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421224939995.png)





##### ③checkbox(复选框)

下面是一般的复选框界面，按住CTRL可以实现多选

```html
	<p>你最喜欢的是！</p>
	<select name="fruits" multiple>
		<option value="one">1号</option>
		<option value="two">2号</option>
		<option value="three">3号</option>
		<option value="four">4号</option>
		<option value="five">5号</option>
		<option value="six">6号</option>
		<option value="seven">7号</option>
		<option value="eight">8号</option>
	</select>
```

![image-20220421225601156](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421225601156.png)

**下面就是使用checkbox的复选框**

```html
    <p>你最喜欢的漫威英雄是？</p>
    <input type="checkbox" name="heros[]" value="Deadpool">死侍
    <input type="checkbox" name="heros[]" value="Venom">毒液
    <input type="checkbox" name="heros[]" value="BlackWidow">黑寡妇
    <input type="checkbox" name="heros[]" value="Hulk">绿巨人
    <input type="checkbox" name="heros[]" value="GreenTurtle">小甲鱼
    <input type="checkbox" name="heros[]" value="IronMan">钢铁侠
    <input type="checkbox" name="heros[]" value="Wolverine">金刚狼
    <input type="checkbox" name="heros[]" value="CaptainAmerica">美国队长
    <br><br>
```

![image-20220421225710828](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421225710828.png)



##### ④time、date、month、week、datetime-local

前四个都见名知意，最后一个是获取本地的日期和时间，最为详细

太酷了可以自己选择日期，甚至还会防止夏吉尔输入

```html
    <!-- 演示时间和日期 -->
    <label>时间：<input type="time" name="time"></label>
    <br><br>
    <label>日期：<input type="date" name="date"></label>
    <br><br>
    <label>年月：<input type="month" name="month"></label>
    <br><br>
    <label>星期：<input type="week" name="week"></label>
    <br><br>
    <label>本地日期和时间：<input type="datetime-local" name="datetime-local"></label>
    <br><br>
```

![image-20220421230207438](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421230207438.png)



#### ⑤百分号编码(Personal-encoding)

这个是当url中出现%啊&的解释

![image-20220421230409912](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421230409912.png)

因为url中有些字符会引起歧义，所以需要定义一个规范来约束它，这些会导致冲突的字符叫做**保留字符**

RFC3986标准为其定义了相应的百分号编码

![image-20220421230608556](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220421230608556.png)



#### 二、搜索

##### ①search(搜索框)

```html
<form action="welcome.php" method="get">
	<label>自裁，请：<input type="search" name="search"></label>
    <br><br>
	<input type="submit" value="提交">
</form>
```

![image-20220422005752807](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422005752807.png)



##### ②color(颜色)

```html
	<label>集美选个色：<input type="color" name="color"></label>
    <br><br>
	<input type="submit" value="提交">
```

![image-20220422010504707](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422010504707.png)



##### ③image(按钮)

```html
	<label>按我鸭：<input type="image" src="show.ico" alt="damie	"></label>
    <br><br>
```

![image-20220422011027040](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422011027040.png)



##### ④hidden(隐藏)

```html
	<label>猜猜爸爸在哪 -> <input type="hidden" value="在这呢" disabled></label>
    <br><br>
```

上面的操作就是隐藏了一个元素，而且这个元素还是已经废弃了的，具体表现就是屏幕上屁都没有，但是你检查的时候是能看到的



##### ⑤file(文件)

```html
    <form action="welcome.php" method="get" enctype="multipart/form-data"><!-- 要设置enctype一下 -->
    <br><br>
```

​	![image-20220422100104273](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422100104273.png)

但是请千万注意，上传文件可没这么简单
首先，你必须使用post
第二，必须指定表单的Entype属性
Entype属性：规定了在发送到服务器之前，应该如何对表单的数据进行编码，只有正确编码的数据，才能完整地传递给服务器

默认情况下被设置为如下
这玩意会对所有的字符进行编码，所以并不适用于文件的传输

![image-20220422132611211](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422132611211.png)

文件传输应该设置为如下属性

![image-20220422132700213](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422132700213.png)



##### ⑥accept(限制上传文件的类型)

这个可以指定上传的文件，如下图，但是用户还是可以选择全部文件，所以说好像妹儿啥用

```html
	<label>请选择你要上传的文件：<input type="file" name="file" accept="image/*"></label>
    <br><br>
```

![image-20220422133251022](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422133251022.png)



##### ⑦value(限制上传文件的大小)

```html
<input type="hidden" name="MAX_FILE_SIZE" value="1024">
```



##### ⑧multiple(上传多个文件)

```html
		<label>请选择你要上传的文件：<input type="file" name="file" accept="image/*" multiple></label>
```



#### 三、输入

##### ⑨number(限制数字输入)

这个限制只能输入数字，你输入字母，它不吊你的

```html
		<label>康康你的：<input type="number" name="age"></label>
```

![image-20220422211203880](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422211203880.png) 



##### ⑩min、max、step(限定数字输入范围)

这个就是限制输入的为，当你按那个按键时，当到了极值的时候，它不会让你按了，而这个跨度就是输入的数字必须满足这个跨度，个人感觉这个必须配合min，不然它怎么知道，从哪里开始跨度

```html
	<label>康康你的：<input type="number" name="age" min="10" max="20" step="1"></label>
    <br><br>
```

![image-20220422211632320](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422211632320.png) 



##### ⑨range(数值滚动条)

**注意一个点**，当你有了step和max后，你会发现一个大问题，你有没有想过本来的倒数第二个值加上step大于max了，那这个最后一个值肯定不是max啊，这点要注意啊

```html
	<label>康康你的拉一哈：<input type="range" name="age" value="1" min="10" max="20" step="1"></label>
    <br><br>
```

![image-20220422212517156](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422212517156.png) 



##### ⑧email、tel、url(邮箱，电话，网址)

这玩意需要一个php文件才能实现检查操作，但是你只要知道指定了type属性为对应的功能的话，它那边就是可以检查

```html
	<label>邮箱：<input type="email" name="email"></label>
    <br><br>
	<label>电话：<input type="tel" name="tel"></label>
    <br><br>
	<label>网址：<input type="url" name="url"></label>
    <br><br>
```

![image-20220422213110435](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422213110435.png) 



##### ⑦pattern(指定匹配模式)

这玩意跟正则表达式有关

![image-20220422213336566](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422213336566.png)

![image-20220422213411356](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422213411356.png)

下面就是相关代码，你可以翻一下具体怎么操作

![image-20220422213639785](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422213639785.png)

![image-20220422213610366](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422213610366.png) 



##### ⑥placeholder(提醒信息)

```html
	<label>邮箱：<input type="email" name="email" placeholder="仅限人类邮箱"></label>
    <br><br>
```

![image-20220422214446905](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422214446905.png)



##### ⑤required(排除不输入)

```html
	<label>网址：<input type="url" name="url" required></label>
    <br><br>
```

![image-20220422220444997](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422220444997.png) 



##### ④size(控制输入框的显示长度)

```html
	<label>电话：<input type="tel" name="tel" size="100"></label>
    <br><br>
```

![image-20220422220629246](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422220629246.png)



##### ③maxlength(控制输入字符的数量)

```html
	<label>电话：<input type="tel" name="tel" size="100" maxlength="22"></label>
    <br><br> 
```



##### ②list属性和datalist元素(实现备选项)

下面这个datalist元素要记得起个名字，这样list属性才能实现关联到这玩意

![image-20220422221259053](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422221259053.png)

![image-20220422221242265](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422221242265.png) 



### 18、output元素

说白了就是打印出你指定的数值

```html
	0<input type="range" id="a" value="50" min="0" max="100">100 + 
	<input type="number" id="b" value="50">=
	<output name="x" for="a b">100</output>	
```

![image-20220422223555162](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422223555162.png) 



### 19、textarea(显示多行文本)

##### ①基础操作

```html
	<textarea name="say">
	我去去去去去去去去我去去去我去去去去去去去去去去去去去去</textarea>
	<br>
```

![image-20220422224030295](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422224030295.png)

##### ②rows和cols属性

可用**rows**和**cols**属性指定文本的行数和列数(以字符形式指定)

```html
	<textarea name="say" rows="5" cols="10">
	我去去去去去去去去我去去去我去去去去去去去去去去去去去去</textarea>
	<br>
```

![image-20220422224341404](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422224341404.png) 注意**一个中文字符等于两个英文字符**



##### ③wrap属性

这玩意控制换行
**soft**就是在你渲染界面的时候会进行换行，但是提交的时候不会提交换行符
**hard**就是渲染的时候会换行，但是提交的时候也会把换行符提交上去
**off**在渲染的时候不会对文本进行自动换行

![image-20220422224627032](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220422224627032.png)



### 20、网页的架构

#### 一、div元素

div给个class名字。通过这个名字，css就可以操作

![image-20220423110957497](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423110957497.png)

![image-20220423111012364](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423111012364.png)



#### 二、语义化布局

##### ①section元素(段落)

section使用的基本操作就是如下，注意嵌套使用的话，可能会出现h1大小递减的操作，请看第二张图

![image-20220423111606902](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423111606902.png)

![image-20220423111540022](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423111540022.png) 



##### ②article元素(包含网页的内容)

表示的是网页中独立的结构，如一片博文，帖子的内容和帖子的回复，因为这玩意是独立的内容，跟网页的机构没什么关系

```html
<artcle>
	<h1>标题</h1>
	<p>红红火火恍恍惚惚或</p>
</artcle>
```

![image-20220423112443986](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423112443986.png) 



##### ③details元素(用于包含一个详情区域)

##### ④summary元素(用于对详情区域进行总结)

<details><!--<details open>就是默认展开的状态 -->
	<summary>不要点我</summary>
	<p>会变得不幸<p>
</details>

![image-20220423112713647](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423112713647.png) 



#### 三、图片相关



##### ①map和area元素

 map：映射，在图片上建立映射的意思

其实吧这玩意有点复杂，具体表现就是一张图片你可以设置几个特殊的位置，你只要点击了这个位置就会跳转到某个界面去

![image-20220423113502638](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423113502638.png)

![image-20220423113635341](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423113635341.png)



##### ②picture和source元素

此元素的作用就是提高指定图片资源的灵活度

picture元素包含了一系列的source子元素，每个source对应一个不同的图片资源和匹配条件，浏览器就会根据不同的条件来进行选择最合适的图片进行显示

这玩意跟前面那个media一样的，你调节浏览器边框，图片样式会跟着改变

![image-20220423121342508](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423121342508.png)

##### ③figure和figcaption元素

效果也没啥，就是插入图片，顺便可以用figcaption起个名字的感觉

![image-20220423121717378](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423121717378.png)

![image-20220423121644339](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423121644339.png)



#### 四、视频

##### ①video元素(嵌入视频)

##### ②controls属性和autoplay属性(播发控件和自动播放)

##### ③muted属性(默认哑剧模式)

<video src="111.mp4" width="1400" height="600" controls autoplay muted>叔叔我啊可是缺钱了哦</video>

![image-20220423221203733](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423221203733.png)



##### ④preload属性(视频预加载)

写法示例：preload=“metadata”

![image-20220423221413377](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423221413377.png)



##### ⑤poster属性(视频封面)

写法示例：poster="show.ico"

![image-20220423221739019](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220423221739019.png)

##### ⑥loop属性(循环播发)

跟control一样写法

##### ⑦提供备胎

![image-20220424002048818](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424002048818.png) 

#### 五、音频

##### ①audio元素(嵌入音频)

##### ②track元素(根据音频添加文本)

track译作轨道，可以用作字幕制作

<audio src="E:\z95\Tomcat\apache-tomcat-8.5.45\webapps\testEspecial\lesson18\test5\music.mp3"></audio>

这个字幕功能需要结合下面的WebVTT元素来实现

![image-20220424001602983](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424001602983.png)

![image-20220424001726995](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424001726995.png) 

 

#### 六、WebVTT

Web Video Text Tracks Format(互联网视频文本轨道格式)
作用：根据不同的需求显示不同样式的字幕

![image-20220424001443865](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424001443865.png)  



#### 七、嵌入网页

##### ①iframe元素

用于创建另一个网页的内联框架，就是在一个网页里面嵌套另一个网页

<p>http://www.pornhub.com</p>
<iframe src="https://www.bilibili.com/video/BV1Eb411u7Fw?p=125" width="1024px" height="800px">你干嘛~</iframe>

![image-20220424003052911](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424003052911.png)



![image-20220424003301099](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424003301099.png)

![image-20220424003240977](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424003240977.png)



##### ②sandbox(沙盒)

作用就是保护网页

这玩意遵循一个Secure By Default原则，如果你跟下面一样写的话，就会默认给你最高等级的控制，而此时这个内嵌网页只能是read only，但是你想进行其他操作的话，就需要看下下面的图片了

![image-20220424003508360](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424003508360.png)

![image-20220424003446460](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424003446460.png)



#### 八、范围

##### ①meter

```html
<p>你今天的能量还剩余多少呢？</p>
<meter id="enegry" high="0.8" low="0.2" optimum="0.6" value="0.2" min="0" max="1"></meter>
<p>
	<button type="button" value="0.1">10%</button>
	<button type="button" value="0.6">60%</button>
	<button type="button" value="0.9">90%</button>
</p>
<script>
	var buttons = document.getElementsByTagName("BUTTON");
	var meter = document.getElementById("enegry");
	for (var i = 0; i < buttons.length; i++){
		buttons[i].onclick = function(e){
			meter.value = e.target.value;
		};
	}
</script>
```

![image-20220424005730221](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424005730221.png) 

![image-20220424004015029](C:\Users\Lzo\AppData\Roaming\Typora\typora-user-images\image-20220424004015029.png)



#### 九、进度条

##### ①progress

<p>进度完成</p>
<progress max="1" value="0.4"></progress>













