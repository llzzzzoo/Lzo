[TOC]









# 一、基础操作

![image-20230426212830916](Matlab.assets/image-20230426212830916.png)



<img src="Matlab.assets/image-20230426213348457.png" alt="image-20230426213348457" style="zoom:67%;" /> 



> - 实时脚本文件

<img src="Matlab.assets/image-20230426215250437.png" alt="image-20230426215250437" style="zoom:67%;" /> 



## 1、变量

**String**

<img src="Matlab.assets/image-20230426215508839.png" alt="image-20230426215508839" style="zoom:67%;" /> 



**char**

<img src="Matlab.assets/image-20230426215854279.png" alt="image-20230426215854279" style="zoom:67%;" /> 





## 2、矩阵运算

> - 矩阵点乘
>
>   - $$
>     A_(ij) * B_(ij)
>     $$
>
>     

```matlab
1.创建一个1行列的矩阵
a = [1 2 3]

2.对矩阵的每个元素+3
b = a + 3

3.plot函数作图，以索引为横坐标，纵坐标为索引(矩阵元素的顺序位置)的值
plot(b)
grid on

4.多维矩阵：以空格和逗号分割同一行元素，分号分割各行
常见运算：转置、取逆、求特征值和特征向量
A = [3 2 1; 2 4 1; 4 5 6]
% 求转置
A = A'

% 求特征值和特征向量
[D, V] = eig(A)
% 求逆矩阵
E = inv(A)
F = A * E

5.矩阵乘法，矩阵点乘
C = A * B % 矩阵严格乘法
E = A.*B % 矩阵点乘，对应元素相乘

6.使用矩阵A对方程A*x=b求解，方法是
使用反斜杠\运算符
即，矩阵的逆矩阵*b = x
b = [1;3;5]
x = A\b
% s应该为0
s = A*x - b

7.如果一个操作数是标量而另一个操作数不是标量
MATLAB会把标量隐式扩展为与另一个操作数有同样大小
H = [1 2 3; 3 2 1; 4 5 6]
K = 4

% K变为一个3×3的对角单位矩阵
L = H * K
% K变为3×3的矩阵，元素全为4
F = H + K


8.不同维度的行向量和列向量相加
N = [1 2 3 4]
P = [5; 6; 7]
% N变为了3行，每一行都是[1 2 3 4]
% P变为了4列，每一列都是[5;6;7]
Q = N + P
建议别这样搞
```



<img src="Matlab.assets/image-20230427002918416.png" alt="image-20230427002918416" style="zoom:80%;" /> 

<img src="Matlab.assets/image-20230427003346771.png" alt="image-20230427003346771" style="zoom: 80%;" /> 

<img src="Matlab.assets/image-20230427005258925.png" alt="image-20230427005258925" style="zoom: 80%;" />  

<img src="Matlab.assets/image-20230427005723866.png" alt="image-20230427005723866" style="zoom: 80%;" /> 





## 3.做图





















`

`

`

`

`