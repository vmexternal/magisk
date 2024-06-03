import { Divider } from "@nextui-org/divider";
import { SiDiscord, SiFivem } from "react-icons/si";
import { Github, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Divider />
        <div className="flex justify-between items-center py-10">
          <p className="flex font-light">
<b>Infinity AntiCheat</b>, created & developed by Infinity
          </p>
          <div className="px-5 py-2 flex gap-5">
          <div className="text-tiny"><SiDiscord size={18} className="inline-block mr-1" />https://discord.gg/q4w4pHfPFU</div>
        </div>
        </div>
      </div>
    </footer>
  );
}

