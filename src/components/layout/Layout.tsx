import { LayoutProps } from "../../interface";
import Header from "../header/Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[url('src/assets/blue-yellow-background.jpg')] bg-no-repeat bg-cover p-4">
      <div className="max-w-[1440px] m-auto">
        <Header />
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
