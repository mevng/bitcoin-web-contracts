export default function timeDiff (inTimeStamp, daysLocked) {
  const msLocked = daysLocked * 24 * 60 * 60 * 1000;
  let diff = Date.now() - (new Date(inTimeStamp + msLocked));
  const unlocked = (diff > 0);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= d * (1000 * 60 * 60 * 24); // remove days
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  diff -= h * (1000 * 60 * 60); // remove hours
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const word = unlocked ? 'ago' : 'left';
  return {
    dhm: `${Math.abs(d)} days ${h} hours ${m} min ${word}`,
    dh: `${Math.abs(d)} days ${h} hours ${word}`,
    unlocked: unlocked
  };
}
