import { socials } from "@/config/socials";

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <div key={index} className={iconStyles}>
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default Socials;
