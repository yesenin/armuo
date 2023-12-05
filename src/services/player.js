const getArmenianNumberInSounds = (n) => {
  if (n < 0) {
    return [];
  }
  if (n === 0) {
    return [];
  }

  if (n < 10) {
    return [`_${n}`];
  }

  let result = [];
  if (n >= 100) {
      const t = Math.floor(n / 100);
      if (t > 1) {
          result.push(`_${t}`);
      }
      result.push('_100');
      n = n % 100;
  }

  if (n === 0)
  {
      return result;
  }

    if (n < 10) {
        result.push(`_${n}`);
        return result;
    }

  const q = Math.floor(n / 10);
  const q_sound = q === 1 ? "_10n" : `_${q * 10}`;
  result.push(`${q_sound}s`);
  n = n % 10;
  if (n !== 0) {
      result.push(`_${n}`);
  }
  return result;
};

const getArmenianOrdinalNumberInSounds = (n) => {
    if (n < 0) {
        return [];
    }
    if (n === 0) {
        return [];
    }

    if (n < 10) {
        switch (n) {
            case 1:
                return ['_1st'];
            case 2:
                return ['_2nd'];
            case 3:
                return ['_3rd'];
            case 4:
                return ['_4th'];
            default:
                return [`_${n}`, '_th'];
        }
    }

    const result = getArmenianNumberInSounds(n);

    result.push('_th');
    return result;
};

const audioFolder = "/audio/numbers";

export const playNumber = (n) => {
  const sounds = getArmenianNumberInSounds(n);
  const innerSounds = sounds.map((i) => new Audio(`${audioFolder}/${i}.mp3`));
  waitNext(innerSounds[0], innerSounds.slice(1));
};

const waitNext = (a, tail) => {
  a.addEventListener("ended", () => {
    if (tail.length > 0) {
        const head = tail[0];
        const nextTail = tail.slice(1);
        if (head) {
            waitNext(head, nextTail);
        }
    }
  });
  // console.log(a.attributes["src"].value + " " + a.duration);
  a.play();
};

export const playOrdinalNumber = (n) => {
  const sounds = getArmenianOrdinalNumberInSounds(n);
  const innerSounds = sounds.map((i) => new Audio(`${audioFolder}/${i}.mp3`));
  const head = innerSounds[0];
  const tail = innerSounds.slice(1);
  waitNext(head, tail);
};
