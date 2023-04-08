import ar from "./ar";
import en from "./en";

const data = {
    ar: ar,
    en: en
}
const lang = (get) => {
   let local ;
  for (const lang in data) {
        if (Object.hasOwnProperty.call(data, lang)) {
            local = data;
        }
    }
console.log({
    local : local[get]
})
return local[get]
};

export default lang;
