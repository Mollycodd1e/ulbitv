import { classNames } from "shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink"

interface INavbarProps {
  className?: string
}

export const Navbar = ({
  className,
}: INavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to={"/"} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>На главную</AppLink>
      <AppLink to={"/about"} theme={AppLinkTheme.RED}>О сайте</AppLink>
    </div>
    </div>
  )
}
