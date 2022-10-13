// 缓慢动画原理
// 1.让盒子移动的距离依次减小，速度便慢慢落下来
// 2.核心算法：(目标值 - 现在的位置) / 10 作为每次移动的距离 步长
// 3.停止条件：当前盒子的距离等于目标的距离
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        obj.step = (target - obj.offsetLeft) / 10;
        // 注意取整，正数往大的取整，负数往小的取整
        obj.step = obj.step > 0 ? Math.ceil(obj.step) : Math.floor(obj.step);
        if (obj.offsetLeft == target) {
            // 停止动画，本质去除定时器
            clearInterval(obj.timer);
            //回调函数放到定时器结束里面
            if (callback) {
                callback();
            }
        }
        // 看到下面的left就明白 输入的元素需要带有绝对定位/相对定位啊
        obj.style.left = obj.offsetLeft + obj.step + 'px';
    }, 15); // 15是个好东西
}