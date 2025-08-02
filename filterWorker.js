self.addEventListener('message', e => {
  const { type, data, conditions } = e.data;
  let res = [];
  if (type === 'AH') {
    res = data.filter(r => {
      // 在此處 implements AH 過濾邏輯，根據 conditions
      return true; // 範例：全部通過
    });
  }
  // TODO: 根據 type 同條件處理 OU, EU
  // 統計
  const stats = { total: res.length, win: 0, draw: 0, lose: 0 };
  if (type === 'AH') {
    res.forEach(r => {
      // 判斷勝平負，累計 stats.win, stats.draw, stats.lose
    });
  }
  self.postMessage({ type, filtered: res, stats });
});