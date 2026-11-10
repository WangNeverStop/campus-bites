// Original vector illustrations. These are not photographs of actual dishes.
export function foodArt(d, hero=false) {
  const leaves=(x,y,angle,color='#4e7948')=>`<ellipse cx="${x}" cy="${y}" rx="15" ry="7" fill="${color}" transform="rotate(${angle} ${x} ${y})"/><path d="M${x-10} ${y}h20" stroke="#b7ce81" stroke-width="1" transform="rotate(${angle} ${x} ${y})"/>`;
  const name=d.name,seed=Number(d.id.replace(/\D/g,''))||1;
  const kind=artKind(d);
  const palette=/牛肉|牛柳|牛腩|肥牛/.test(name)?['#845037','#a66a45','#633b2c']:/鸡/.test(name)?['#b67c49','#dba260','#9b6139']:/豆腐/.test(name)?['#ead2a0','#f4dfb3','#ceae73']:/蛋/.test(name)?['#edc365','#f4d985','#dfaa42']:['#a66b44','#c58a58','#885235'];
  let food='';
  if(kind==='porridge'||kind==='soup'||kind==='dessert'){
    const bg=kind==='porridge'?(/紫薯/.test(name)?'#b5a0bc':/南瓜/.test(name)?'#edc36e':'#eee0bc'):kind==='dessert'?(/芝麻/.test(name)?'#62594f':/红豆/.test(name)?'#bd8d7e':'#f5e8ce'):/番茄/.test(name)?'#dca075':'#decfa3';
    food=`<ellipse cx="140" cy="107" rx="66" ry="48" fill="${bg}"/>`;
    for(let i=0;i<32;i++){let x=90+(i*17+seed)%96,y=78+(i*13+seed)%58;food+=`<ellipse cx="${x}" cy="${y}" rx="${kind==='soup'?5:2.5}" ry="${kind==='soup'?3:1.4}" fill="${kind==='soup'?['#f0e4b9','#78945d','#e6bc6b'][i%3]:['#fff2d9','#c8b586','#ad8d6d'][i%3]}"/>`;}
    if(kind==='soup'&&/丸子|排骨/.test(name))for(let i=0;i<5;i++)food+=`<circle cx="${108+i*17}" cy="${101+i%2*22}" r="9" fill="#b78b67" stroke="#966d4c"/>`;
    food+='<path d="M110 57q-8 -9 0 -17m28 17q-8 -9 0 -17m28 17q-8 -9 0 -17" fill="none" stroke="#fff8eb" stroke-width="2" opacity=".8"/>';
  }else if(kind==='bun'){
    for(let i=0;i<4;i++){let x=112+i%2*48,y=87+Math.floor(i/2)*43;food+=`<ellipse cx="${x}" cy="${y}" rx="25" ry="21" fill="${/红糖/.test(name)?'#bd8e5e':'#f3e3bc'}" stroke="#c9ad7c" stroke-width="1.4"/><path d="M${x-13} ${y-5}q13 -15 26 0m-23 -4q10 9 20 0" fill="none" stroke="#d4bd91" stroke-width="1.5"/>`;}
  }else if(kind==='pancake'){
    for(let i=0;i<3;i++){let y=119-i*12;food+=`<ellipse cx="140" cy="${y}" rx="58" ry="28" fill="${['#ce944d','#dca85e','#ebbe70'][i]}" stroke="#b98443" stroke-width="2"/>`;}
    for(let i=0;i<18;i++)food+=`<ellipse cx="${98+(i*19+seed)%82}" cy="${82+(i*11)%29}" rx="3" ry="1.5" fill="${i%3?'#8c9b53':'#b17d40'}"/>`;
  }else if(kind==='sandwich'||kind==='wrap'){
    for(let i=0;i<2;i++){let x=94+i*47;food+=kind==='sandwich'?`<path d="M${x} 133l20 -64 36 64z" fill="#ddba7d"/><path d="M${x+4} 125l17 -48 29 48z" fill="#f7e8bd"/><path d="M${x+3} 127h51" stroke="#78934d" stroke-width="6"/><path d="M${x+7} 117h41" stroke="#d88952" stroke-width="5"/>`:`<g transform="rotate(-25 ${x+20} 110)"><rect x="${x}" y="73" width="38" height="76" rx="12" fill="#ead4a2" stroke="#c4a778"/><ellipse cx="${x+19}" cy="78" rx="17" ry="10" fill="#76914f"/><path d="M${x+8} 79h22" stroke="#bd774e" stroke-width="5"/><path d="M${x+4} 101l30 15m-30 -2 30 15" stroke="#d2b580" stroke-width="2"/></g>`;}
  }else if(kind==='corn'){
    food='<ellipse cx="139" cy="112" rx="65" ry="31" fill="#88a15c" transform="rotate(-20 139 112)"/>';
    for(let i=0;i<10;i++)for(let j=0;j<4;j++)food+=`<rect x="${93+i*9}" y="${84+j*10}" width="8" height="9" rx="3" fill="${(i+j)%2?'#e5b74d':'#f0ce69'}" transform="rotate(-20 139 107)"/>`;
  }else if(kind==='sweetpotato'){
    food='<ellipse cx="124" cy="112" rx="42" ry="24" fill="#a76954" transform="rotate(-25 124 112)"/><ellipse cx="158" cy="105" rx="36" ry="23" fill="#9e604f" transform="rotate(25 158 105)"/><ellipse cx="158" cy="102" rx="29" ry="17" fill="#e8b257" transform="rotate(25 158 102)"/>';
  }else if(kind==='fruit'){
    food='<ellipse cx="140" cy="111" rx="62" ry="45" fill="#fff1d9"/>';
    for(let i=0;i<12;i++){let x=96+(i*23+seed)%86,y=82+(i*17)%53;food+=`<circle cx="${x}" cy="${y}" r="10" fill="${['#c96951','#e8bc58','#95ad64','#b2848b'][i%4]}"/><circle cx="${x-2}" cy="${y-2}" r="5" fill="#fff0bb" opacity=".35"/>`;}
  }else if(kind==='egg'){
    food='<ellipse cx="140" cy="108" rx="59" ry="43" fill="#f3d589"/><ellipse cx="140" cy="108" rx="53" ry="37" fill="#f4dda1"/>';
    for(let i=0;i<12;i++)food+=`<rect x="${104+i*23%72}" y="${85+i*17%43}" width="5" height="3" rx="1" fill="#72904d"/>`;
  }else if(kind==='breakfastset'){
    food='<rect x="86" y="79" width="44" height="65" rx="8" fill="#eee3c9" stroke="#d2c09b"/><ellipse cx="108" cy="80" rx="22" ry="9" fill="#f7edce"/>';
    if(/红薯/.test(name))food+='<ellipse cx="159" cy="112" rx="26" ry="40" fill="#a76954" transform="rotate(25 159 112)"/><ellipse cx="159" cy="106" rx="19" ry="29" fill="#e8b257" transform="rotate(25 159 106)"/>';else for(let i=0;i<2;i++)food+=`<rect x="${142+i*19}" y="72" width="17" height="80" rx="8" fill="#d7a25b" stroke="#ba894a" transform="rotate(13 155 110)"/>`;
  }else if(kind==='riceball'){
    food='<path d="M95 137q-10 -6 0 -22l32 -49q12 -16 25 0l34 49q10 20 -5 22z" fill="#f4e8cb" stroke="#d6c5a4"/><path d="M122 110h35v30h-35z" fill="#536948"/>';
  }else if(kind==='stew'){
    food='<ellipse cx="140" cy="110" rx="63" ry="46" fill="#b67b4a"/>';
    for(let i=0;i<13;i++)food+=`<rect x="${93+(i*23)%83}" y="${80+(i*17)%52}" width="22" height="18" rx="6" fill="${['#94613d','#dfb765','#c4754d'][i%3]}" transform="rotate(${i*17} 140 110)"/>`;
  }else
  if(kind==='rice') {
    food='<ellipse cx="147" cy="104" rx="49" ry="41" fill="#f6eacf"/>';
    for(let i=0;i<35;i++){const x=108+(i*19%75),y=76+(i*13%55);food+=`<ellipse cx="${x}" cy="${y}" rx="4" ry="1.5" fill="#fff9e9" transform="rotate(${i*37} ${x} ${y})"/>`;}
    for(let i=0;i<13;i++){const x=82+((i*29+seed*7)%55),y=76+((i*21+seed*3)%66);food+=`<rect x="${x}" y="${y}" width="19" height="17" rx="6" fill="${palette[i%3]}" transform="rotate(${i*23} ${x} ${y})"/><path d="m${x+4} ${y+4} 8 2" stroke="#e7ad69" stroke-width="2"/>`;}
    if(/菌菇|香菇/.test(name))for(let i=0;i<4;i++)food+=`<path d="M${105+i*15} 95q8 -16 16 0z" fill="#8f7957"/><path d="M${113+i*15} 95v8" stroke="#decaaa" stroke-width="4"/>`;
    food+=leaves(160,136,-35)+leaves(176,124,-45)+leaves(166,150,25);
    food+='<circle cx="111" cy="128" r="4" fill="#b54426"/><circle cx="137" cy="87" r="4" fill="#bb432d"/>';
  } else if(kind==='noodle') {
    food='<ellipse cx="140" cy="109" rx="64" ry="49" fill="#bd773c"/>';
    for(let i=0;i<12;i++)food+=`<path d="M${93+i*4} ${82+i*3}c70 -20 77 35 14 42s-39 -20 15 -23" fill="none" stroke="${i%2?'#e5bf75':'#f5d595'}" stroke-width="3" stroke-linecap="round"/>`;
    if(/蛋|鸡汤|三鲜/.test(name))food+='<ellipse cx="168" cy="91" rx="21" ry="16" fill="#fff2d1" transform="rotate(30 168 91)"/><circle cx="169" cy="90" r="9" fill="#e7a324"/>';
    if(/牛肉|牛腩|肉丝|炸酱/.test(name))for(let i=0;i<5;i++)food+=`<rect x="${142+i*9}" y="${75+i%2*13}" width="14" height="12" rx="4" fill="${palette[i%3]}"/>`;
    food+=leaves(105,122,40)+leaves(100,108,-20)+leaves(114,136,20);
  } else if(kind==='salad') {
    for(let i=0;i<19;i++)food+=leaves(90+(i*37%100),76+(i*19%66),i*25,['#557b3d','#87a34e','#a9bc66'][i%3]);
    for(let i=0;i<7;i++)food+=`<rect x="${102+i*13%70}" y="${77+i*21%55}" width="22" height="15" rx="5" fill="#e6aa4a" transform="rotate(${i*22} 140 110)"/>`;
    food+='<circle cx="112" cy="120" r="12" fill="#c35438"/><circle cx="112" cy="120" r="8" fill="#e89059"/><circle cx="171" cy="94" r="11" fill="#c35438"/>';
    for(let i=0;i<12;i++)food+=`<circle cx="${90+i*29%100}" cy="${85+i*17%55}" r="3" fill="#f1d5a0"/>`;
  } else if(kind==='tofu') {
    food='<ellipse cx="140" cy="110" rx="61" ry="46" fill="#b45f32"/>';
    for(let i=0;i<14;i++){let x=90+(i*27%83),y=77+(i*23%57);food+=`<rect x="${x}" y="${y}" width="24" height="20" rx="4" fill="${i%2?'#f2c48a':'#deb17a'}" transform="rotate(${i*9} ${x+10} ${y+10})"/>`;}
    food+=leaves(145,112,20);for(let i=0;i<15;i++)food+=`<circle cx="${96+i*23%90}" cy="${85+i*17%52}" r="2" fill="#4d713c"/>`;
  } else {
    for(let i=0;i<7;i++){const a=i*.9,x=140+Math.cos(a)*39,y=108+Math.sin(a)*27;food+=`<g transform="rotate(${i*50} ${x} ${y})"><path d="M${x-19} ${y}q19 -29 38 0q-19 17 -38 0" fill="#eedcaa" stroke="#c9a770" stroke-width="2"/><path d="m${x-11} ${y-1} 2 -8m7 7v-10m8 10 2 -8" stroke="#c3a16a" stroke-width="1.5"/></g>`;}
    food+=leaves(139,108,35);
  }
  return `<svg class="food-art ${hero?'hero-art':''}" viewBox="0 0 280 210" role="img" aria-label="${d.name}插画示意"><rect width="280" height="210" fill="${d.color}"/><path d="M0 190 280 40M0 160 280 10M20 210 280 70" stroke="#fff" stroke-opacity=".12" stroke-width="1"/><ellipse cx="145" cy="120" rx="90" ry="67" fill="#4b362c" opacity=".13"/><ellipse cx="140" cy="105" rx="88" ry="68" fill="#f8f1df"/><ellipse cx="140" cy="105" rx="76" ry="57" fill="#e3d7be"/><ellipse cx="140" cy="105" rx="71" ry="53" fill="#faf1da"/>${food}<path d="m218 35-22 145m31-144-23 146" stroke="#5d4832" stroke-width="5" stroke-linecap="round"/><circle cx="38" cy="37" r="14" fill="#fff" opacity=".2"/><text x="12" y="197" font-size="8" fill="#554b38" opacity=".7">饭点 · 插画示意</text></svg>`;
}

export function artKind(d){const n=d.name;if(/粥/.test(n))return "porridge";if(/芝麻糊|双皮奶|银耳|绿豆汤/.test(n))return "dessert";if(/水果|酸奶/.test(n))return "fruit";if(/豆浆/.test(n))return "breakfastset";if(/三明治/.test(n))return "sandwich";if(/卷饼|鸡蛋卷/.test(n))return "wrap";if(/饭团/.test(n))return "riceball";if(/包子|菜包|豆沙包|馒头|烧麦/.test(n))return "bun";if(/饼|萝卜糕/.test(n))return "pancake";if(/红薯/.test(n))return "sweetpotato";if(/蒸玉米|玉米鸡蛋/.test(n))return "corn";if(/蛋羹/.test(n))return "egg";if(/汤$/.test(n))return "soup";if(/炖牛肉/.test(n))return "stew";if(/饺|馄饨/.test(n))return "dumpling";return d.art;}
