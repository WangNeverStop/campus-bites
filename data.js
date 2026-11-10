export const canteens = [
  { id: 'c1', name: '第一食堂', short: '一食堂' },
  { id: 'c2', name: '第二食堂', short: '二食堂' },
  { id: 'c3', name: '湖畔食堂', short: '湖畔' },
];
export const stalls = [
  { id:'s1', canteenId:'c1', name:'川味小炒', floor:'二楼', location:'二楼 08 号 · 扶梯右侧第二家' },
  { id:'s2', canteenId:'c1', name:'一碗面', floor:'一楼', location:'一楼 03 号 · 东门直行' },
  { id:'s3', canteenId:'c1', name:'元气蒸菜', floor:'一楼', location:'一楼 06 号 · 靠窗一侧' },
  { id:'s4', canteenId:'c2', name:'日常小锅', floor:'二楼', location:'二楼 12 号 · 西侧走廊尽头' },
  { id:'s5', canteenId:'c2', name:'南洋饭铺', floor:'一楼', location:'一楼 05 号 · 中庭左侧' },
  { id:'s6', canteenId:'c3', name:'湖边轻食', floor:'一楼', location:'一楼 02 号 · 湖景窗旁' },
  { id:'s7', canteenId:'c3', name:'暖暖小馆', floor:'一楼', location:'一楼 07 号 · 南门入口旁' },
];
// All entries are fictional fixtures. launchDaysAgo is explicitly a simulated launch date.
export const dishes = [
  {id:'d1',stallId:'s1',name:'宫保鸡丁饭',sub:'酸甜微辣，午饭就要有滋有味',price:13,category:'米饭',taste:'微辣',art:'rice',color:'#e8d5b8',tags:['微辣','鸡肉','下饭'],base:4.5},
  {id:'d2',stallId:'s2',name:'番茄牛腩面',sub:'热汤配软烂牛腩，暖胃的一碗',price:16,category:'面食',taste:'不辣',art:'noodle',color:'#eac5ac',tags:['不辣','汤面','牛肉'],base:4.5},
  {id:'d3',stallId:'s6',name:'香煎鸡腿谷物碗',sub:'蔬菜、谷物与鸡腿，一碗都齐了',price:18,category:'轻食',taste:'不辣',art:'salad',color:'#d5dfbb',tags:['不辣','蔬菜多','鸡肉'],base:4.5,launchDaysAgo:2},
  {id:'d4',stallId:'s1',name:'麻婆豆腐饭',sub:'豆腐裹满酱汁，拌饭刚刚好',price:10,category:'米饭',taste:'中辣',art:'tofu',color:'#e5bb9d',tags:['中辣','豆腐','下饭'],base:4.0},
  {id:'d5',stallId:'s3',name:'香菇滑鸡饭',sub:'一份蒸出来的家常滋味',price:12,category:'米饭',taste:'不辣',art:'rice',color:'#dfd0a8',tags:['不辣','鸡肉','蒸菜'],base:4.5},
  {id:'d6',stallId:'s4',name:'韩式肥牛拌饭',sub:'拌开酱汁，口感更有层次',price:17,category:'米饭',taste:'微辣',art:'rice',color:'#d6bba1',tags:['微辣','牛肉','拌饭'],base:3.5},
  {id:'d7',stallId:'s5',name:'海南鸡饭',sub:'清香鸡油饭，配嫩滑鸡肉',price:15,category:'米饭',taste:'不辣',art:'rice',color:'#e5d9af',tags:['不辣','鸡肉','清淡'],base:4.5},
  {id:'d8',stallId:'s7',name:'鲜肉小馄饨',sub:'一勺鲜汤，简单又满足',price:9,category:'面食',taste:'不辣',art:'dumpling',color:'#d6ddcb',tags:['不辣','猪肉','汤食'],base:4.0},
  {id:'d9',stallId:'s2',name:'重庆小面',sub:'麻辣鲜香，记得按口味点单',price:11,category:'面食',taste:'中辣',art:'noodle',color:'#d6b399',tags:['中辣','面食','浓郁'],base:4.0},
  {id:'d10',stallId:'s4',name:'番茄土豆炖牛肉',sub:'酸甜番茄与软糯土豆的搭配',price:19,category:'米饭',taste:'不辣',art:'tofu',color:'#e5b99c',tags:['不辣','牛肉','炖菜'],base:4.5,launchDaysAgo:4},
  {id:'d11',stallId:'s6',name:'南瓜鹰嘴豆沙拉',sub:'烤南瓜的甜，搭配爽口蔬菜',price:14,category:'轻食',taste:'不辣',art:'salad',color:'#cfddba',tags:['不辣','蔬菜多','谷物'],base:null,launchDaysAgo:1},
  {id:'d12',stallId:'s7',name:'葱油拌面',sub:'浓浓葱香，简单也能很好吃',price:8,category:'面食',taste:'不辣',art:'noodle',color:'#d9c79f',tags:['不辣','面食','葱香'],base:4.0},
  {id:'d13',stallId:'s3',name:'豉汁蒸排骨饭',sub:'软糯排骨，配一口热米饭',price:16,category:'米饭',taste:'不辣',art:'rice',color:'#d9c5a6',tags:['不辣','猪肉','蒸菜'],base:4.0},
  {id:'d14',stallId:'s5',name:'泰式罗勒鸡肉饭',sub:'罗勒的清香，配一点微辣',price:14,category:'米饭',taste:'微辣',art:'rice',color:'#cbd1ae',tags:['微辣','鸡肉','罗勒'],base:4.5,launchDaysAgo:5},
  {id:'d15',stallId:'s7',name:'香煎韭菜饺子',sub:'焦香的底，饱满的馅',price:12,category:'小吃',taste:'不辣',art:'dumpling',color:'#e6d3b1',tags:['不辣','猪肉','煎饺'],base:4.0},
  {id:'d16',stallId:'s4',name:'香辣鸡丝凉面',sub:'清爽面条，搭配香辣鸡丝',price:12,category:'面食',taste:'微辣',art:'noodle',color:'#d8c8b4',tags:['微辣','鸡肉','凉面'],base:4.0},
  {id:'d17',stallId:'s6',name:'酸奶水果燕麦杯',sub:'酸甜水果，配脆脆燕麦',price:10,category:'小吃',taste:'不辣',art:'salad',color:'#e6c9bc',tags:['不辣','水果','奶制品'],base:4.0},
  {id:'d18',stallId:'s1',name:'青椒肉丝饭',sub:'青椒脆爽，酱汁很下饭',price:13,category:'米饭',taste:'微辣',art:'rice',color:'#cfd2ad',tags:['微辣','猪肉','家常'],base:4.0},
];
export const reviewTags = ['口味合适','分量足','价格合适','口味偏咸','分量偏少','出餐较慢'];
export function makeDemoReviews(epoch) {
  return dishes.flatMap((d,i) => d.base === null ? [] : Array.from({length:i === 9 ? 2 : 8},(_,j)=>{
    const negative = (d.id === 'd6' || d.id === 'd9') && j < 4;
    const tag = negative ? (d.id==='d6' ? '分量偏少' : '口味偏咸') : ['口味合适','分量足','价格合适'][j%3];
    const overall = negative ? 2 : Math.floor(d.base)+((j*37+i*17)%100<(d.base%1)*100?1:0);
    return {id:'demo-'+d.id+'-'+j,dishId:d.id,overallRating:overall,ratings:{taste:overall,portion:negative?2:4,value:4},tags:[tag],text:negative ? (d.id==='d6'?'味道可以，但这次分量对我来说有点少。':'这次感觉偏咸，喜欢清淡口味的话可以留意。') : ['口味比较合适，搭配也不错。','分量够吃，窗口位置很好找。','这个价格可以接受，下次还会考虑。'][j%3],createdAt:new Date(epoch-(j%5)*86400000-(i+1)*60000).toISOString(),sourceType:'demo'};
  }));
}

// Expanded fictional catalogue; meal slots are demo availability, not live opening hours.
for(const d of dishes)d.meals=['午餐','晚餐'];
const extraNames=["小米南瓜粥","皮蛋瘦肉粥","红豆薏米粥","香菇鸡肉粥","豆浆油条套餐","鸡蛋三明治","玉米鸡蛋早餐","香菇青菜包","鲜肉包子","红糖馒头","紫薯燕麦粥","鸡蛋灌饼","手抓饼","蔬菜鸡蛋饼","鲜肉烧麦","豆沙包","黑芝麻糊","红薯豆浆套餐","蒸饺套餐","葱花鸡蛋卷","黑椒牛柳饭","照烧鸡腿饭","咖喱鸡肉饭","土豆烧牛肉饭","鱼香肉丝饭","西红柿炒蛋饭","木须肉饭","冬瓜排骨饭","红烧狮子头饭","香干回锅肉饭","蒜苔肉丝饭","地三鲜饭","咖喱土豆饭","红烧鸡块饭","梅菜扣肉饭","菌菇鸡丁饭","香煎豆腐饭","酸菜鱼饭","香辣虾饭","水煮肉片饭","香辣牛肉面","香菇鸡汤面","酸菜肉丝面","炸酱面","担担面","热干面","凉皮","牛肉米线","番茄米线","三鲜米线","酸辣粉","清汤河粉","鸡丝河粉","鸡蛋炒面","扬州炒饭","蛋炒饭","虾仁炒饭","菠萝鸡肉饭","烤鸡胸沙拉","金枪鱼蔬菜碗","鸡蛋藜麦碗","菌菇荞麦面","番茄鸡蛋汤","紫菜蛋花汤","冬瓜丸子汤","玉米排骨汤","海带豆腐汤","菌菇汤","蒸玉米","烤红薯","南瓜饼","萝卜糕","香煎土豆饼","蒸蛋羹","水果酸奶碗","红豆双皮奶","银耳莲子羹","绿豆汤","水果拼盘","鸡肉卷饼","牛肉卷饼","蔬菜饭团"];
extraNames.forEach((name,i)=>{const breakfast=i<20;const category=breakfast?'早餐':i<40?'米饭':i<54?'面食':i<62?'轻食':i<68?'汤品':'小吃';dishes.push({id:'d'+(i+19),stallId:'s'+(i%7+1),name,sub:'校园示例菜单 · 按你的口味选一餐',price:breakfast?3+i%8:8+i%15,category,taste:breakfast?'不辣':['不辣','微辣','不辣','中辣'][i%4],art:category==='面食'?'noodle':category==='轻食'?'salad':category==='早餐'?'dumpling':'rice',color:['#e8d5b8','#cfddba','#eac5ac'][i%3],tags:[category,'示例菜品'],base:i%9===0?null:4+(i%2)*.5,meals:breakfast?['早餐']:['午餐','晚餐']});});
// Keep the expanded fictional catalogue internally consistent by dish type.
for(const d of dishes.slice(18)){
 if(/饭$/.test(d.name)){d.category='米饭';d.art='rice';d.stallId=/蒸|排骨/.test(d.name)?'s3':/咖喱|照烧|菠萝/.test(d.name)?'s5':'s1';}
 else if(/面|粉|米线|凉皮/.test(d.name)){d.category='面食';d.art='noodle';d.stallId='s2';}
 else if(/沙拉|藜麦|蔬菜碗/.test(d.name)){d.category='轻食';d.art='salad';d.stallId='s6';}
 else if(d.meals.includes('早餐'))d.stallId='s7';
 else if(/汤$/.test(d.name)){d.category='汤品';d.stallId='s3';}
 else d.stallId='s7';
 d.taste=/香辣|酸辣|水煮|担担/.test(d.name)?'中辣':/鱼香|回锅|咖喱/.test(d.name)?'微辣':'不辣';
 if(d.category==='小吃'||d.category==='汤品')d.price=4+(Number(d.id.slice(1))%7);
 d.tags=[d.category,d.taste,'示例菜品'];
}
