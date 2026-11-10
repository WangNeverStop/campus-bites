// Local device time determines the suggested meal slot; date-only values stay local.
export function mealSlot(now){const h=now.getHours();return h<10?'早餐':h<15?'午餐':h<22?'晚餐':'夜宵';}
export function localDay(now){return [now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');}
export function visiblePage(sorted,count=20){return sorted.slice(0,Math.max(20,count));}

// Add integer cents; planned meals never count as spending.
export function mealTotals(records,today){let todayCents=0,plannedCents=0,totalCents=0,todayCount=0,plannedCount=0;for(const m of records){if(!Number.isFinite(m.cost)||m.cost<0)continue;const cents=Math.round(m.cost*100);if(m.status==='已用餐'){totalCents+=cents;if(m.date===today){todayCents+=cents;todayCount++;}}else if(m.status==='计划用餐'&&m.date===today){plannedCents+=cents;plannedCount++;}}return {todaySpent:todayCents/100,todayPlanned:plannedCents/100,totalSpent:totalCents/100,todayCount,plannedCount};}
