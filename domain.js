import {dishes,stalls,canteens,reviewTags} from './data.js';
export const defaultFilters = {canteen:'all',budget:'all',taste:'all',category:'all',meal:'all',query:''};
export const stallFor = d => stalls.find(s=>s.id===d.stallId);
export const canteenFor = d => canteens.find(c=>c.id===stallFor(d)?.canteenId);
export function filterDishes(filters, source=dishes) {
  const f={...defaultFilters,...filters}; const q=f.query.trim().toLowerCase();
  return source.filter(d=> (f.canteen==='all'||stallFor(d)?.canteenId===f.canteen) &&
    (f.budget==='all'||(Number.isFinite(d.price)&&d.price<=Number(f.budget))) &&
    (f.taste==='all'||d.taste===f.taste) && (f.category==='all'||d.category===f.category) &&
    (f.meal==='all'||d.meals?.includes(f.meal)) && (!q||[d.name,stallFor(d)?.name,canteenFor(d)?.name,...d.tags].join(' ').toLowerCase().includes(q)));
}
export function stats(dishId,reviews) {
  const all=reviews.filter(r=>r.dishId===dishId&&Number.isInteger(r.overallRating)&&r.overallRating>=1&&r.overallRating<=5);
  const result={count:all.length,average:all.length?all.reduce((s,r)=>s+r.overallRating,0)/all.length:null,dimensions:{}};
  for(const key of ['taste','portion','value']) { const values=all.map(r=>r.ratings?.[key]).filter(v=>Number.isInteger(v)&&v>=1&&v<=5);result.dimensions[key]={count:values.length,average:values.length?values.reduce((a,b)=>a+b,0)/values.length:null}; }
  return result;
}
export function recentFeedback(dishId,reviews,now=Date.now()) {
  const recent=reviews.filter(r=>r.dishId===dishId&&Date.parse(r.createdAt)<=now&&Date.parse(r.createdAt)>=now-7*86400000);
  return ['口味偏咸','分量偏少'].map(tag=>({tag,count:recent.filter(r=>r.tags.includes(tag)).length,total:recent.length})).filter(x=>x.total>=5&&x.count>=3&&x.count/x.total>=.4);
}
export function rankDishes(candidates,reviews) {
  // A small-sample correction is used for ordering, never displayed as the raw rating.
  return [...candidates].sort((a,b)=>{
    const score=d=>{const s=stats(d.id,reviews);return s.count?(s.count*s.average+5*4)/(s.count+5):4;};
    return score(b)-score(a)||a.id.localeCompare(b.id);
  });
}
export function nextBatch(candidates,seen=[],limit=3) {
  const remaining=candidates.filter(d=>!seen.includes(d.id)); const chosen=[];
  for (const d of remaining) if(!chosen.some(c=>c.stallId===d.stallId)&&chosen.length<limit) chosen.push(d);
  for (const d of remaining) if(!chosen.includes(d)&&chosen.length<limit) chosen.push(d);
  return {items:chosen,seen:[...seen,...chosen.map(d=>d.id)],remaining:remaining.length-chosen.length};
}
export function chooseOne(candidates,random=Math.random) {return candidates.length?candidates[Math.min(candidates.length-1,Math.floor(random()*candidates.length))]:null;}
export function validateReview(input) {
  if(!dishes.some(d=>d.id===input.dishId)) throw new Error('未找到这道菜，请返回重新选择。');
  if(!Number.isInteger(input.overallRating)||input.overallRating<1||input.overallRating>5) throw new Error('请先选择 1–5 星总体评分。');
  if(typeof input.text!=='string'||input.text.length>300) throw new Error('评价文字请控制在 300 字以内。');
  if(!Array.isArray(input.tags)||input.tags.some(t=>!reviewTags.includes(t))) throw new Error('评价标签无效，请重新选择。');
  for(const value of Object.values(input.ratings||{})) if(!Number.isInteger(value)||value<1||value>5) throw new Error('分项评分必须为 1–5 分。');
  return true;
}
export function upsertReview(reviews,review) {validateReview(review);return [...reviews.filter(r=>r.id!==review.id),review];}
export function persist(storage,key,value) {storage.setItem(key,JSON.stringify(value));return value;}
export function recommendReason(d,f) {return [f.budget!=='all'&&d.price<=Number(f.budget)?`符合 ¥${f.budget} 预算`:`¥${d.price} 一餐`,f.taste!=='all'&&d.taste===f.taste?`符合${f.taste}偏好`:d.taste, f.canteen!=='all'&&stallFor(d).canteenId===f.canteen?'就在你选的食堂':canteenFor(d).short].join(' · ');}

export function randomBatch(candidates,previous=[],limit=3,random=Math.random){
 const pool=[...candidates]; for(let i=pool.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
 const items=pool.slice(0,limit);
 if(pool.length>limit&&items.every(d=>previous.includes(d.id))){const other=pool.find(d=>!previous.includes(d.id));if(other)items[items.length-1]=other;}
 return {items,seen:items.map(d=>d.id),remaining:Math.max(0,pool.length-limit)};
}
