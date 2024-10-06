export type MenuBodyType = {
  href: string;
  title: string;
  _id?:string
  submenus:[{title:string,href:string,_id?:string}],
  parent: string |undefined 
};
export type MenuTableData = Omit<MenuBodyType,"parent">&{
  parent:{_id:string,title:string,href:string};
}
