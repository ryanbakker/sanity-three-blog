import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://ryanbakker.nz/wp-content/uploads/2022/09/IMG_0099new.jpg"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
