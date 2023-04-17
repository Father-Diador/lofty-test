const newFunc = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
  let result = await promise;
  return result;
};

let newTime = 1000;

const memFunc = () => {
  let cache = {};
  return async (func, time) => {
    if (func.name in cache) {
      console.log("ИСПОЛЬЗУЕМ КЭШ", cache[func.name]);
      return cache[func.name];
    } else {
      let result = await func();
      cache[func.name] = result;
      console.log("НЕ ИСПОЛЬЗУЕМ КЭШ", result);
      setTimeout(() => (cache = {}), time);
      return result;
    }
  };
};

const newA = memFunc();

async function genialnoeReshenie() {
  await newA(newFunc, newTime);
  await newA(newFunc, newTime);
}

genialnoeReshenie();
