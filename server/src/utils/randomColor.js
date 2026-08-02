import {AVATAR_COLORS} from "../constants.js"

 function getRandomAvatarColor() {
   
       return AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];
   
}

export default getRandomAvatarColor