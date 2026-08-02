import { twMerge } from "tailwind-merge";

const avatarColors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
    pink: "bg-pink-100 text-pink-600",
    cyan: "bg-cyan-100 text-cyan-600",
};

const getAvatarInitials = (name) => {
    if (!name?.trim()) return "?";

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    return (words[0][0] + words[1][0]).toUpperCase();
  };

function Avatar({ className, name, color }) {

  return (
    <div className={twMerge(
      "flex justify-center items-center bg-yellow-100 text-yellow-400 rounded-md h-10 w-10 p-4",
      avatarColors[color] ||  avatarColors.blue,
      className
    )}>
      {getAvatarInitials(name)}
    </div>
  )
}

export default Avatar

