[TOC]





# 一、简介

> 一切皆对象

<img src="Python基础学习笔记.assets/image-20230323161842391.png" alt="image-20230323161842391" style="zoom:80%;" /> 





# 二、语法

## 1、print

> Python解释器，我滴超人
>
> - 就注意以下`字符串带引号`就完事了

<img src="Python基础学习笔记.assets/image-20230323171049482.png" alt="image-20230323171049482" style="zoom:67%;" /> 



### 1.1、输出到文件

```python
if __name__ == '__main__':
    print(11)
    print("11")
    # 左边参数文件路径不存在则创建文件	右边是覆盖方式
    fp=open('C:/Users/Lzo/Desktop/aa.txt', 'a')
    # 要有个file=fp
    print('niubi', file=fp)
    fp.close()
```







## 2、转义字符

> - \b：退格，33\b44 ——> 344
> - `不希望转移字符起作用`
>   - 在字符串的引号前加上r或者R，print(r"11\t22\n33\b44)

```python
print("11\t22\n33\b44")
print(r"11\t22\n33\b44")
print(R"11\t22\n33\b44")

# 输出:
11	22
344
11\t22\n33\b44
11\t22\n33\b44
```







## 3、保留字和标识符

> - 以下为保留字，我import keyword，然后打印keyword.kwlist找到的，蛮骚的
>   - ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']



### 3.1、变量

> - 变量 = 对象的地址 = 引用
> - 变量三个组成部分：标识(内存地址，盲猜逻辑地址(bushi...))、类型、值
> - 变量名赋值其实是`地址赋值`

<img src="Python基础学习笔记.assets/image-20230323174946681.png" alt="image-20230323174946681" style="zoom:80%;" /> 

<img src="Python基础学习笔记.assets/image-20230323175055738.png" alt="image-20230323175055738" style="zoom:80%;" /> 

> 下图，方便理解
>
> <img src="Python基础学习笔记.assets/image-20230323175454469.png" alt="image-20230323175454469" style="zoom:67%;" /> 









## 4、数据类型

![image-20230327235552195](Python基础学习笔记.assets/image-20230327235552195.png) 







### 4.1、整数类型

![image-20230328100215869](Python基础学习笔记.assets/image-20230328100215869.png) 

```python
    print(type(-1))
    print('十进制', 118)
    print('二进制', 0b1010111)
    print('八进制', 0o176)
    print('十六进制', 0x1EAF)
    
# 输出
<class 'int'>
十进制 118
二进制 87
八进制 126
十六进制 7855
```













### 4.2、浮点类型

> - 使用`浮点数进行计算`的时候，可能会出现`小数位数不确定`的情况
>   - 解决办法：`导入模块decimal`

![image-20230328100729393](Python基础学习笔记.assets/image-20230328100729393.png) 



```python
    from decimal import Decimal
	print(type(3.14159))
    print('普通加法：1,1+' + '2.2=')
    print(1.1+2.2)
    print('导入模块Decimal后：1,1+' + '2.2=')
    print(Decimal('1.1') + Decimal('2.2'))
    
# 输出
<class 'float'>
普通加法：1,1+2.2=
3.3000000000000003
导入模块Decimal后：1,1+2.2=
3.3
```





### 4.3、布尔类型

> - 数据类型为`bool`
> - TRUE可以当成整形1用；FALSE可以当成0用

![image-20230328101333740](Python基础学习笔记.assets/image-20230328101333740.png) 

> **对象的布尔值**

<img src="Python基础学习笔记.assets/image-20230330005233746.png" alt="image-20230330005233746" style="zoom:80%;" />  





### 4.4、字符串类型

> - 三引号定义的字符串可以分布在连续的多行

![image-20230328151431182](Python基础学习笔记.assets/image-20230328151431182.png) 





### 4.5、类型转换

> - str()
> - int()
>   - 小数字符串无法转换为int
> - float()

![image-20230328151703948](Python基础学习笔记.assets/image-20230328151703948.png) 







## 5、注释

```python
    # 注释可以这样写
    '''也可以
        这样写'''
```

<img src="Python基础学习笔记.assets/image-20230328225848566.png" alt="image-20230328225848566" style="zoom:80%;" /> 





## 6、输入函数input()

```python
abc = input('你想要什么礼物呢？')
print(abc)
ccc = int(input('输入一个整数: '))
print(ccc)
    
# 输出
你想要什么礼物呢？你
你
1
1
```

<img src="Python基础学习笔记.assets/image-20230328230309845.png" alt="image-20230328230309845" style="zoom:80%;" /> 





## 7、运算符

### 7.1、算术运算符

> //（整除运算）:
>  10 // 3 = 3
>
> 
>
> **（幂运算）：
>
> 2**3 = 2^3 = 8
>
> 
>
> - 注意正负数运算的特别之处
>   - 取整运算时，一正一负向下取整
>   - 求余时，余数 = 被除数 - 除数*商（商为整除的值）

<img src="Python基础学习笔记.assets/image-20230329011836338.png" alt="image-20230329011836338" style="zoom:80%;" /> 







### 7.2、赋值运算符

> - 注意//= 和 **=
> - 链式赋值：a=b=c=20时，abc的id都是一样的（同一个对象）
> - 系列解包赋值：对应位置赋值和赋引用
>   - 因此交换值就有个骚操作，a,b=b,a（交换ab的值）

<img src="Python基础学习笔记.assets/image-20230329012605878.png" alt="image-20230329012605878" style="zoom:80%;" /> 





### 7.3、比较运算符

> - ==：对象的value的比较
> - is，is not：变量id的比较，是否指向同一对象

<img src="Python基础学习笔记.assets/image-20230329013418710.png" alt="image-20230329013418710" style="zoom:80%;" />  





### 7.4、布尔运算符

> - in和not in
>   - <img src="Python基础学习笔记.assets/image-20230329020544392.png" alt="image-20230329020544392" style="zoom:80%;" /> 

<img src="Python基础学习笔记.assets/image-20230329014219779.png" alt="image-20230329014219779" style="zoom:80%;" /> 



### 7.5、位运算符

> - 移位相当于乘除2
> - 注意&只有两元都是1(不能是其他数)，最终结果才为1

```python
    print(1&2)
    print(0|2)
    print(4>>1)
    print(4<<1)
    
# output
0
2
2
8
```

<img src="Python基础学习笔记.assets/image-20230330004025199.png" alt="image-20230330004025199" style="zoom: 80%;" />  



###  运算符优先级

<img src="Python基础学习笔记.assets/image-20230330004900960.png" alt="image-20230330004900960" style="zoom:80%;" />  







## 8、分支结构

```python
    if 1<=1:
        print(1)
    elif 2>=2:
        print(2)
    else:
        print(3)
```

<img src="Python基础学习笔记.assets/image-20230330010004618.png" alt="image-20230330010004618" style="zoom:80%;" /> 





## 9、条件表达式的语法糖

```python
    num_a = input("输入第一个整数")
    num_b = input("输入第二个整数")
	# 贼骚的语法糖
    print('num_a > numb' if num_a > num_b else 'num_a <= num_b')

# output
输入第一个整数20
输入第二个整数10
num_a > numb

输入第一个整数10
输入第二个整数10
num_a <= num_b
```



**pass语句**

> - 整不会了什么玩意

![image-20230330011359317](Python基础学习笔记.assets/image-20230330011359317.png) 这玩意写在这里跟个空气一样，语法不会报错



## 10、循环分支

### 10.1、range函数

> - 注意`右开`
> - application
>   - 用这个作为for循环遍历对象

```python
r=range(10)
# 用以check range对象的整数sequence
print(list(r))

print(10 in r)
print(10 not in r)

print(range(1,20,2))

# output
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
False
True
range(1, 20, 2)
```

<img src="Python基础学习笔记.assets/image-20230405005139579.png" alt="image-20230405005139579" style="zoom:80%;" /> 





### 10.2、while

```python
a=1
while a<1:
	print(a)
	a+=1
```

<img src="Python基础学习笔记.assets/image-20230405010638379.png" alt="image-20230405010638379" style="zoom:80%;" /> 





### 10.3、for-in循环

> - 如果我只是用循环，不需要迭代内容呢
>   - <img src="Python基础学习笔记.assets/image-20230405011311755.png" alt="image-20230405011311755" style="zoom:80%;" />  

```python
# 将i作为可迭代对象
for item in 'Python':
	print(item)

# 输出
python
```

<img src="Python基础学习笔记.assets/image-20230405010804591.png" alt="image-20230405010804591" style="zoom:80%;" /> 





### 10.4、break/continue

没啥区别





### 10.5、while/for else搭配

> - 循环正常执行完就会执行else
>
>   也就是遇到了break就不执行了
>
> - application
>
>   - <img src="Python基础学习笔记.assets/image-20230405013401407.png" alt="image-20230405013401407" style="zoom: 80%;" /> 

<img src="Python基础学习笔记.assets/image-20230405012907943.png" alt="image-20230405012907943" style="zoom: 80%;" />  





## 总结

<img src="Python基础学习笔记.assets/image-20230405014441595.png" alt="image-20230405014441595" style="zoom:80%;" /> 







# 三、container

## 1、列表

```py
    lst = ['1', 21, '3']
    print(id(lst))
    print(type(lst))
    print(lst)
    
# output
2803259905792
<class 'list'>
['1', 21, '3']
```

<img src="Python基础学习笔记.assets/image-20230411003801203.png" alt="image-20230411003801203" style="zoom:67%;" /> 



### 1.1、创建

```python
    # 创建列表的第一种方式，直接使用[]
    lst1 = ['1', 21, '3']
    # 第二种方式，使用内置函数list()
    lst2 = list(['1', 21, '3'])
```



### 1.2、访问元素

> - 可以访问负的索引
> - 动态分配和回收内存的，不必在意底层的列表结构、扩容等

```python
    lst1 = ['1', 21, '3']
    print(lst1[1])
    print(lst1[-1])
    
# output
21
3
```

![image-20230411004921429](Python基础学习笔记.assets/image-20230411004921429.png) 具体**负数坐标如左图**





### 1.3、索引相关

```python
    lst1 = ['1', 21, '3', '1']
    # 若有重复的元素，获取最近的元素的下标
    print(lst1.index('1'))
    # 在指定区间查找元素
    # note that 左闭右开
    print(lst1.index('1', 1, 4))
    
# output
0
3
```

<img src="Python基础学习笔记.assets/image-20230411005130776.png" alt="image-20230411005130776" style="zoom: 80%;" /> 





### 1.4、对列表进行切片

> - 切出来的列表对象，是新的拷贝的对象，即id变了
>
> - 有个可以实现逆序输出的骚操作
>
>   ```python
>   print(lst[::-1])
>   ```
>
>   

```python
    lst1 = ['1', 21, '3', '1']
    print('former: ', lst1)
    # 同样左闭右开
    # 三种写法都是默认step为1
    lst11 = lst1[1:3:1]
    lst11 = lst1[1:3]
    lst11 = lst1[1:3:]
    print('later: ', lst11)
    lst11 = lst1[4::-1]
    print('later(minus step): ', lst11)
    # 左闭右开，死性不改
    lst11 = lst1[4:0:-1]
    print('later(minus step): ', lst11)
    
# output
former:  ['1', 21, '3', '1']
later:  [21, '3']
later(minus step):  ['1', '3', 21, '1']
later(minus step):  ['1', '3', 21]
```

<img src="Python基础学习笔记.assets/image-20230411005731883.png" alt="image-20230411005731883" style="zoom: 85%;" /> 





### 1.5、判断元素存在否/遍历列表

<img src="Python基础学习笔记.assets/image-20230411011112487.png" alt="image-20230411011112487" style="zoom:80%;" /> 





### 1.6、列表添加元素

```python
    lst1 = ['1', 21, '3', '1']
    lst2 = list(['1', 21, '3'])
    # 添加元素
    print('追加到列表的末尾')
    lst1.append(123)
    print('add one element', lst1)
    lst1.append(lst2)
    print('add one list(as an element)', lst1)
    print()

    print('一次在末尾追加多个元素')
    lst1.extend(lst2)
    print('add many elements', lst1)
    print()

    print('在指定位置插入元素')
    lst1.insert(2, '新插入的元素')
    print(lst1)
    print()

    print('切片添加元素')
    # 此处相当于把下标>1的元素全部切走了
    lst1[1:] = lst2
    print(lst1)
    
# output
追加到列表的末尾
add one element ['1', 21, '3', '1', 123]
add one list(as an element) ['1', 21, '3', '1', 123, ['1', 21, '3']]

一次在末尾追加多个元素
add many elements ['1', 21, '3', '1', 123, ['1', 21, '3'], '1', 21, '3']

在指定位置插入元素
['1', 21, '新插入的元素', '3', '1', 123, ['1', 21, '3'], '1', 21, '3']

切片添加元素
['1', '1', 21, '3']
```

<img src="Python基础学习笔记.assets/image-20230411011809610.png" alt="image-20230411011809610" style="zoom:80%;" /> 







### 1.7、删除元素

```python
    print('原列表: ', lstdel)
    print('----remove方法----')
    # 移除第一个找到的元素
    lstdel.remove(10)
    print('移除了10: ', lstdel)
    print('----pop方法----')
    # pop根据索引移除元素
    lstdel.pop(1)
    print('移除了下标为1的元素: ', lstdel)
    # 不指定下标，将会删除最后一个元素
    lstdel.pop()
    print('默认移除最后一个下标的元素: ', lstdel)
    print('----补充元素50,60,70----')
    lstdel.extend([50, 60, 70])
    print(lstdel)
    print('----切片删除----')
    # 其实就是用空列表替代某个区间的元素
    lstdel[1:3] = []
    print('对[1,3)切片后: ', lstdel)

    print('----clear和del----')
    lstdel.clear()
    print('经过clear元素后的列表: ', lstdel)

    del lstdel
    print('当列表被del删除了对象，再进行访问时')
    print(lstdel)


# output
原列表:  [10, 20, 10, 30]
----remove方法----
移除了10:  [20, 10, 30]
----pop方法----
移除了下标为1的元素:  [20, 30]
默认移除最后一个下标的元素:  [20]
----补充元素50,60,70----
[20, 50, 60, 70]
----切片删除----
对[1,3)切片后:  [20, 70]
----clear和del----
经过clear元素后的列表:  []
当列表被del删除了对象，再进行访问时
Traceback (most recent call last):
  File "C:\xxxx", line 112, in <module>
    print(lstdel)
          ^^^^^^
NameError: name 'lstdel' is not defined
```

![image-20230411012628475](Python基础学习笔记.assets/image-20230411012628475.png) 





### 1.8、修改

> - 切片这个挺骚的

```python
	lst = [10, 20, 30]
	lst[1:2] = [40, 50, 60]
	print(lst)

#output
[10, 40, 50, 60]
```

<img src="Python基础学习笔记.assets/image-20230411012713968.png" alt="image-20230411012713968" style="zoom:80%;" />  





### 1.9、排序

> - sort是在原列表基础上排序的，sorted是在拷贝的列表上排序的

```python
    lstint = [1, 4, 2, 3]
    print('---使用sort排序，不会产生新对象---')
    # 默认reverse=FALSE
    lstint.sort()
    # lstint.sort(reverse=True)
    print('顺序', lstint)
    lstint.sort(reverse=True)
    print('逆序', lstint)
	
    print('---使用内置函数sorted()排序，会产生一个新的列表对象---')
    new_list = sorted(lstint)
    print('listint: ', lstint)
    print('new_list(顺序): ', new_list)

    new_list = sorted(lstint, reverse=True)
    print('listint: ', lstint)
    print('new_list(逆序): ', new_list)
    
# output
---使用sort排序，不会产生新对象---
顺序 [1, 2, 3, 4]
逆序 [4, 3, 2, 1]

---使用内置函数sorted()排序，会产生一个新的列表对象---
listint:  [4, 3, 2, 1]
new_list(顺序):  [1, 2, 3, 4]
listint:  [4, 3, 2, 1]
new_list(逆序):  [4, 3, 2, 1]
```

<img src="Python基础学习笔记.assets/image-20230411013019192.png" alt="image-20230411013019192" style="zoom:80%;" /> 







### 1.10、列表生成式

> - 说白了就是把每个列表元素 用表达式变化后 放入列表

```python
    lst = [i*i for i in range(1, 10)]
    print(lst)

    lst2 = [i*2 for i in range(1, 10)]
    print(lst2)

# output
[1, 4, 9, 16, 25, 36, 49, 64, 81]
[2, 4, 6, 8, 10, 12, 14, 16, 18]
```

<img src="Python基础学习笔记.assets/image-20230412003051445.png" alt="image-20230412003051445" style="zoom:80%;" /> 









## 2、字典

### 2.1、什么是字典

> - 说白了就是键值对

<img src="Python基础学习笔记.assets/image-20230412004535222.png" alt="image-20230412004535222" style="zoom:67%;" />  

<img src="Python基础学习笔记.assets/image-20230412005316413.png" alt="image-20230412005316413" style="zoom: 67%;" />  





### 2.2、字典创建

```python
    # 1.使用{}创建字典
    score = {'啊': 1, '这': '666'}
    print(score)

    # 2.使用dict()创建
    student = dict(name='ak', no=11)
    print(student)

    # 3.创建空字典
    d = {}
    print(d)
    
# output
{'啊': 1, '这': '666'}
{'name': 'ak', 'no': 11}
{}
```

<img src="Python基础学习笔记.assets/image-20230413005734244.png" alt="image-20230413005734244" style="zoom: 80%;" /> 





### 2.3、元素获取

> - 两者区别
>   - 如果[]查找失败，就会抛出error
>   - 如果.get查找失败，就会返回一个None
> - .get可以设置不存在时默认返回的值

```python
    score = {'啊': 1, '这': '666'}
    print(score['啊'])
    print(score.get('这'))
    # 查找不存在时则会返回默认值
    print(score.get('不存在的值', '默认值'))
    
# output
1
666
默认值
```

<img src="Python基础学习笔记.assets/image-20230413010333699.png" alt="image-20230413010333699" style="zoom:80%;" /> 



### 2.4、增删改

```python
    score = {'啊': 1, '这': '666'}
    print('啊' in score)
    print('啊' not in score)
    del score['啊']
    print('删除\'啊\'后的字典: ', score)
    score.clear()
    print('clear后的字典: ', score)
    score['newKey'] = 'value'
    print('新增key-value之后的dictionary: ', score)
    
# output
True
False
删除'啊'后的字典:  {'这': '666'}
clear后的字典:  {}
新增key-value之后的dictionary:  {'newKey': 'value'}
```

<img src="Python基础学习笔记.assets/image-20230413010814464.png" alt="image-20230413010814464" style="zoom:67%;" /> 



### 2.5、视图

```python
    score = {'啊': 1, '这': '666'}
    # 获取所有的key
    keys = score.keys()
    print('类型为', type(keys), ': ', keys)
    print('转型为列表输出: ', list(keys), '\n')

    # 获取所有的value
    values = score.values()
    print('类型为', type(values), ': ', values)
    print('转型为列表输出: ', list(values), '\n')

    # 获取所有的键值对
    items = score.items()
    print('类型为', type(items), ': ', items)
    print('转型为列表输出: ', list(items), '\n')
    
# output
类型为 <class 'dict_keys'> :  dict_keys(['啊', '这'])
转型为列表输出:  ['啊', '这'] 

类型为 <class 'dict_values'> :  dict_values([1, '666'])
转型为列表输出:  [1, '666'] 

类型为 <class 'dict_items'> :  dict_items([('啊', 1), ('这', '666')])
转型为列表输出:  [('啊', 1), ('这', '666')] 
```

<img src="Python基础学习笔记.assets/image-20230413011256713.png" alt="image-20230413011256713" style="zoom:67%;" /> 



### 2.6、遍历

```python
    score = {'啊': 1, '这': '666'}
    # 字典元素的遍历
    for item in score:
        print(item, ': ', score.get(item))
        
# output
啊 :  1
这 :  666
```

<img src="Python基础学习笔记.assets/image-20230413011818150.png" alt="image-20230413011818150" style="zoom:80%;" /> 



### 2.7、特点

> - key只能是不可变对象(指的是地址值不变)
>   - 如lst这种就是可变对象，不能经过哈希函数后放入hash表中

<img src="Python基础学习笔记.assets/image-20230413012143550.png" alt="image-20230413012143550" style="zoom: 67%;" /> 





### 2.8、字典生成式

> - 长度不一样，以最短为准

```python
    items = ['Moeny', 'People']
    data1 = [111, 'none']
    data2 = [111, 'none', 'More']
    # upper是指大写的意思
    d = {item.upper(): data for item, data in zip(items, data1)}
    print(d)
    # 对于不等长的列表，以最短的为准
    d = {item: data for item, data in zip(items, data2)}
    print(d)
    
# output
{'MOENY': 111, 'PEOPLE': 'none'}
{'Moeny': 111, 'People': 'none'}
```

<img src="Python基础学习笔记.assets/image-20230413013648683.png" alt="image-20230413013648683" style="zoom: 67%;" /> 

<img src="Python基础学习笔记.assets/image-20230413013714332.png" alt="image-20230413013714332" style="zoom:67%;" /> 







## 总结

<img src="Python基础学习笔记.assets/image-20230413014233253.png" alt="image-20230413014233253" style="zoom:67%;" /> 







## 3、元组

<img src="Python基础学习笔记.assets/image-20230418093201494.png" alt="image-20230418093201494" style="zoom:67%;" />  





### 3.1、创建

> - 只创建一个元素时。需要加上逗号

```python
    # 第一种，创建元组的方式
    t = ('python', 'world', 98)
    t = 'python', 'world', 98  # 省略括号
    print(t)
    print(type(t))
    print()

    # 第二种，使用内置函数tuple()
    t1 = tuple(('python', 'world', 98))
    print(t1)
    print(type(t1))
    print()

    # 只用一个元素，必须加上逗号
    t2 = ('matlab', )
    print(t2)

    # 空元组
    t3 = ()
    t3 = tuple()
    print(t3)
    
# output
('python', 'world', 98)
<class 'tuple'>

('python', 'world', 98)
<class 'tuple'>

('matlab',)
()
```

<img src="Python基础学习笔记.assets/image-20230418094101810.png" alt="image-20230418094101810" style="zoom:67%;" /> 



### 3.2、为什么要为不可变序列

> - 其实所谓“不可变”。可以理解为`引用不可变`
>
>   因为你给元组元素赋值
>
>   t = (1, '12', '3')
>
>   t[0] = 2 # 其实是把‘2’的引用放到t[0]去

<img src="Python基础学习笔记.assets/image-20230418094547345.png" alt="image-20230418094547345" style="zoom:67%;" /> 





### 3.3、遍历

```python
   t = 'python', 'world', 98  # 省略括号
   for item in t:
        print(item)
        
# output
python
world
98
```





## 4、集合

> - 没有value的字典

<img src="Python基础学习笔记.assets/image-20230418095421332.png" alt="image-20230418095421332" style="zoom:67%;" /> 





### 4.1、创建

```python
    # 第一种创建方式，会自动把重复的删除
    s = {1, 2, '3', '3'}
    print(s, type(s))

    # 第二种方式使用set()
    s1 = set([1, '2', 3, 1])
    print(s1, type(s1))

    s2 = set('12345')
    print('输出为乱序: ', s2)

    # 空集合
    s3 = {} # 此种创建方法为字典，故只能使用set()
    s3 = set()
    print(s3)
    
# output
{1, 2, '3'} <class 'set'>
{1, '2', 3} <class 'set'>
输出为乱序:  {'2', '1', '3', '4', '5'}
set()
```

<img src="Python基础学习笔记.assets/image-20230418095850465.png" alt="image-20230418095850465" style="zoom:67%;" /> 





### 4.2、判/增/删

```python
    ss = {1, 2, 3, '11'}
    # 集合元素的判断操作
    print(1 in ss)
    print(1 not in ss)

    # 集合元素的新增操作
    ss.add('new')
    print(ss)
    ss.update({100, 200})  # 插入元组
    ss.update([300, 400])  # 插入列表
    print(ss)

    # 集合元素的删除操作

    # 删除失败抛异常
    ss.remove(100)
    # 删除失败不抛异常
    ss.discard(1)
    # pop随机元素，不能指定参数
    ss.pop()
    print(ss)

    # clear清空集合的元素
    ss.clear()
    print(ss)
    
# output
True
False
{1, 2, 3, 'new', '11'}
{1, 2, 3, 100, 'new', 200, 300, 400, '11'}
{3, 'new', 200, 300, 400, '11'}
set()
```

<img src="Python基础学习笔记.assets/image-20230418100429908.png" alt="image-20230418100429908" style="zoom:67%;" /> 







### 4.3、集合间的关系

```python
    s = {10, 20}
    s1 = {20, 10}
    # 尽管顺序不一，但是仍然是一个集合
    print(s == s1)

    s2 = {10, 20, 30, 40}
    s3 = {30, 40}
    # s3是否是s2的子集
    print(s3.issubset(s2))
    # s2是否是s3的超集
    print(s2.issuperset(s3))
    # s3和s是否不具有有交集
    print(s.isdisjoint(s3))
    
# output
True
True
True
True
```

<img src="Python基础学习笔记.assets/image-20230418173435615.png" alt="image-20230418173435615" style="zoom:67%;" /> 



### 4.4、集合的数学操作

> - 注意使用符号操作的时候`注意先后顺序`

```python
    t1 = {10, 20, 30, 40}
    t2 = {20, 30, 40, 50, 60}
    # （1） 取交集
    print(t1.intersection(s2))
    # 等同于取交集操作
    print(t1 & t2)

    # （2） 取并集
    print(t1.union(t2))
    # 等同于取并集
    print(t1 | t2)

    # （3）差集操作
    print(t1.difference(t2))
    # 等同于取对称差集
    print(t1 - t2)

    # （4）对称差集
    print(t1.symmetric_difference(t2))
    # 等同于取对称差集
    print(t1 ^ t2)
    
# output
{40, 10, 20, 30}
{40, 20, 30}
{40, 10, 50, 20, 60, 30}
{40, 10, 50, 20, 60, 30}
{10}
{10}
```

<img src="Python基础学习笔记.assets/image-20230418180844558.png" alt="image-20230418180844558" style="zoom:67%;" /> 







### 4.5、列表生成式

```python
    # 集合生成式
    s = {i*i for i in range(1, 5)}
    print(s)
    
# output
{16, 1, 4, 9}
```

<img src="Python基础学习笔记.assets/image-20230419003132727.png" alt="image-20230419003132727" style="zoom:75%;" /> 









# 总结

<img src="Python基础学习笔记.assets/image-20230419003353552.png" alt="image-20230419003353552" style="zoom:67%;" /> 

<img src="Python基础学习笔记.assets/image-20230419003441902.png" alt="image-20230419003441902" style="zoom:67%;" /> 







# 四、字符串

<img src="Python基础学习笔记.assets/image-20230419003511591.png" alt="image-20230419003511591" style="zoom:67%;" /> 





## 1、字符串的创建与驻留机制

> - 字符串常量池

<img src="Python基础学习笔记.assets/image-20230419003725161.png" alt="image-20230419003725161" style="zoom:67%;" /> 



> - **什么叫符号标识符的字符串**？
>
>   数字、字母、下划线
>
>   - a = 'abc%'
>
>     b = 'abc%'
>
>     a is not b
>
>     但是如果a='abc' b='abc' a is b
>
>     区别在于这个%
>
> - `但是pycharm优化了上面的驻留机制`
>
> - **什么叫做只在编译时进行驻留，而非运行时**？
>
>   - ```python
>         a = 'abc'
>         # 加号在编译时就默认进行了，相当于编译后b = 'abc'
>         b = 'ab' + 'c'
>         # 在运行时，才会执行内置函数join，故编译后c=''
>         c = ''.join('abc')
>         print(a is b)
>         print(a is c)
>     
>     # output
>     True
>     False
>     ```
>
>     

<img src="Python基础学习笔记.assets/image-20230419004128168.png" alt="image-20230419004128168" style="zoom:67%;" /> 



> - 建议在字符串拼接的时候使用：join方法

<img src="Python基础学习笔记.assets/image-20230419005040541.png" alt="image-20230419005040541" style="zoom:67%;" /> 





## 2、常用操作

### 2.1、查找

<img src="Python基础学习笔记.assets/image-20230419005255733.png" alt="image-20230419005255733" style="zoom:80%;" /> 

```python
    s = 'hello,hello'
    print('子串第一次出现的位置(异常版):', s.index('lo'))
    print('子串最后一次出现的位置(异常版):', s.rindex('lo'))
    print('子串第一次出现的位置(无异常版):', s.find('lo'))
    print('子串最后一次出现的位置(无异常版):', s.rfind('lo'))
    
# output
子串第一次出现的位置(异常版): 3
子串最后一次出现的位置(异常版): 9
子串第一次出现的位置(无异常版): 3
子串最后一次出现的位置(无异常版): 9
```





### 2.2、大小写转换

> - 大小写转换后的字符串`会创建新的对象(id)`

<img src="Python基础学习笔记.assets/image-20230419010503304.png" alt="image-20230419010503304" style="zoom:80%;" /> 

```python
    s = 'love you'
    a = s.upper()
    print(a)
    print(id(s))
    print(id(a))
    
    s1 = a.lower()
    print(s1)
    print(id(s1))

# output
LOVE YOU
1921951173552
1921951173360
love you
1921951173488
```





### 2.3、对齐

<img src="Python基础学习笔记.assets/image-20230419011438388.png" alt="image-20230419011438388" style="zoom: 80%;" /> 



```python
    # 居中对齐
    s = 'halo ll'
    print(s.center(11, '*'))

    # 左对齐
    # 用*号填充
    print(s.ljust(10, '*'))
    # 默认空格填充
    print(s.ljust(10))
    # 返回原字符串
    print(s.ljust(5))

    # 右对齐
    # 用*号填充
    print(s.rjust(10, '*'))
    # 默认空格填充
    print(s.rjust(10))
    # 返回原字符串
    print(s.rjust(5))

    # 右对齐，使用0进行填充
    print(s.zfill(10))
    # 返回原字符串
    print(s.zfill(5))
    # 给带有符号的数填充 会填充在符号的后面
    print('+1'.zfill(5))
    
# output
**halo ll**
halo ll***
halo ll   
halo ll
***halo ll
   halo ll
halo ll
000halo ll
halo ll
+0001
```







### 2.4、分割

> - 返回值是`一个列表`
> - `默认按照空格分割`

<img src="Python基础学习笔记.assets/image-20230419012405200.png" alt="image-20230419012405200" style="zoom:67%;" /> 

```python
    s = 'hello world Python'
    lst = s.split()
    print(lst)

    s1 = 'hello|world|python'
    lst = s1.split(sep='|')
    print(lst)
    lst = s1.split(sep='|', maxsplit=1)
    print(lst)
    
    # 从右侧开始切分
    lst = s1.rsplit(sep='|', maxsplit=1)
    print(lst)
    
# output
['hello', 'world', 'Python']
['hello', 'world', 'python']
['hello', 'world|python']
['hello|world', 'python']
```





### 2.5、判断

<img src="Python基础学习笔记.assets/image-20230419012930351.png" alt="image-20230419012930351" style="zoom: 67%;" /> 

```python
    # 是否是合法标识符
    print('$'.isidentifier())
    # 判断是否全为空格组成
    print('\t'.isspace())
    # 判断字符串是否全有字母组成
    print('ab1'.isalpha())
    # 判断是否全由十进制的阿拉伯数字组成
    print('111'.isdecimal())
    # 判断是否由数字组成，包括：汉字的数字、罗马数字
    print('1四Ⅱ'.isnumeric())
    # 是否全由字母和数字组成
    print('1a!'.isalnum())
    
# output
False
True
False
True
True
False
```





### 2.6、替换

<img src="Python基础学习笔记.assets/image-20230419013720449.png" alt="image-20230419013720449" style="zoom:67%;" />  

```python
    s = 'hello python python'
    print(s.replace('python', 'java'))
    # 只替换一次
    print(s.replace('python', 'java', 1))

    # 列表
    lst = ['1', '2']
    print('|'.join(lst))
    print(''.join(lst))

    # 元组
    t = ('111', '222')
    print(''.join(t))

    # 字符串
    print(' '.join('666'))
    
# output
hello java java
hello java python
1|2
12
111222
6 6 6
```



















# trail



`

`

`

`

`

`
