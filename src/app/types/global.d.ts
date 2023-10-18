declare module "*css" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"

declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare const __IS_DEV__: boolean