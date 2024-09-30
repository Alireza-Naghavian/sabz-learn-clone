export type MenuBodyType = {
  href: string;
  title: string;
  _id?:string
  submenus:[],
  parent: string |undefined 
};
export type MenuTableData = Omit<MenuBodyType,"parent">&{
  parent:{_id:string,title:string,href:string};
}
