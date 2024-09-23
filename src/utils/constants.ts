import {
  AdminDropDownType,
  DeptType,
  RoeadMapType,
  SlogengType,
  SortType,
  UserPanelOpType,
} from "@/types/consts.t";
import {
  AdjustmentsVerticalIcon,
  Bars4Icon,
  BookOpenIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketSquareIcon,
  DocumentIcon,
  DocumentPlusIcon,
  DocumentTextIcon,
  FolderIcon,
  FolderMinusIcon,
  FolderOpenIcon,
  HomeIcon,
  ListBulletIcon,
  PercentBadgeIcon,
  PlusIcon,
  TicketIcon,
  UserIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Front_Icon, PythonIcon, SecurityIcon, SoftSkillIcon } from "./Icons";

export const customeBlurDataURL =
  "data:image/webp;base64,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bPgnEvY7bliCVg6/ULDjbuxWg14uf6/TloHyXrFRTMR/jS123fNOeWjm669d2HfT9ylDN+e/lbD1eZc6KSf0v1Sw+Z73yEI72z/Uafdg2g5F6OfwZ9jiAKb9qdDQ9a94HMGLN4dJRRn+GxmH0LS9uaCj/Z9oOId5ZxK0dP4DbA4CPG9LhZqm8e88jqLtm8JGT8H9s4TDSGVPLmjq9I8azmPckQRd3f8JmwMBN7ajQllb/hcXjiTVzWCjrRD/QcKpTHvhoK/rf9ZwLj1vRITCNvxfmYMBO7ahQGX7/wpHk+omDNJZKAcGSFvAFkqbxomB5w0IUNvXkYEdy5ehuPORAdXFa1Dd/cgAeenY6C53aBBWzkF5p0MDx8sWoL77oYHpi5ahv+2pAZUla9Dg8dQAacEGqTC0YwPPq8UWOtzwsYHjxfLQ4uHcwPSlStDj9dyAykIVKHLD5wZIy9Sgyv3JQVikQboM5eTA8QqxhTInPjkwfYEuqHN/dEB1eSIUejk6QF6cBI1OfHaQliZDp/vDA78wFVo9Hx44XpVOao348MD0NRkGev06PaC2Imyh2fPpAcp6sINqp3F8kFaDHZT7dX4QFuOCes/nBxevhId+p3F+YMc6BGj46wDB9FUI0PE5gUB1DSKUPGUQkFcg4lsxPV/E12J4uojvRcePFvDFaMeDBXwzmv5YAV+NVB/K48MxPxE7fDrG52GLj8fwNN3g89HxozTCB6QdD1IIn5CmPUbCVySVh/D4kMxPwA6fkmF+zeBj8uLJZXxP2jEzDviiNH1e3eKbksqsMr4r05TY48vS83yKwbelHZNhj89L06ZSCF+YeR7s8ZHpeQ6cCJ+Zts+gGHxq5p9rDl+bbvxU8/jgpPQ79cJHpym/USw+PE0cf20kg69PV/jvcL7wCUqh8F/gEggfoi61f1OTw/coXTE3/n/jmqPDl6lxPoSUck4xBu8I/9///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M//ExMA";

export const userPanelOptions: UserPanelOpType[] = [
  {
    target: "",
    title: "پیشخوان",
    variant: { hoverMode: "hoverMode", casual: "casual" },
    Icon: HomeIcon,
  },
  {
    target: "",
    title: "دوره های من",
    variant: { hoverMode: "hoverMode", casual: "casual" },
    Icon: FolderOpenIcon,
  },
  {
    target: "",
    title: "تیکت ها",
    variant: { hoverMode: "hoverMode", casual: "casual" },
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    target: "",
    title: "جزئیات حساب",
    variant: { hoverMode: "hoverMode", casual: "casual" },
    Icon: UserIcon,
  },
];
export const Roadmaps: RoeadMapType[] = [
  {
    gr_colors: "from-[#30c5e4] to-[#2ae558]",
    Icon: SecurityIcon,
    target: "امنیت",
    title: "امنیت",
  },
  {
    gr_colors: "from-[#FFB535] to-[#F2295B]",
    Icon: Front_Icon,
    target: "فرانت اند",
    title: "فرانت اند",
  },
  {
    gr_colors: " from-[#2E9EFF] to-[#9C33F7]",
    Icon: PythonIcon,
    target: "پایتون",
    title: "پایتون",
  },
  {
    gr_colors: "from-[#FF3571] to-[#880175] ",
    Icon: SoftSkillIcon,
    target: "مهارت های نرم",
    title: "مهارت های نرم",
  },
];

export const slogensOptions: SlogengType[] = [
  {
    Icon: ChatBubbleLeftRightIcon,
    title: "پشتیبانی دائمی",
    subTitle:
      "هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی.",
    Sl_color: "bg-amber-50 dark:bg-amber-400/20",
    Icon_Color: "text-amber-400",
  },
  {
    Icon: BookOpenIcon,
    title: "تضمین کاملترین محتوا",
    subTitle:
      "بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.",
    Sl_color: "bg-sky-50 dark:bg-sky-600/20",
    Icon_Color: "text-sky-600",
  },
  {
    Icon: ChartBarIcon,
    title: "پروژه محور در راستای بازار کار",
    subTitle:
      "کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد.",
    Sl_color: "bg-green-50 dark:bg-green-500/20",
    Icon_Color: "text-green-500",
  },
  {
    Icon: ClipboardDocumentCheckIcon,
    title: "سراغ حرفه ای ها رفتیم",
    subTitle:
      "به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید.",
    Sl_color: "bg-red-50 dark:bg-red-500/20",
    Icon_Color: "text-red-500",
  },
];

export const SortOption: SortType[] = [
  {
    title: "همه دوره ها",
    label: "normal",
  },
  {
    title: "ارزان ترین",
    label: "cheapest",
  },
  {
    title: "گرانترین",
    label: "expensive",
  },
  {
    title: "پر مخاطب",
    label: "popular",
  },
];

export const deptList: DeptType[] = [
  { label: "دپارتمان مورد نظر", value: "" },
  { label: "مالی", value: "financial" },
  { label: "پشتیبانی", value: "support" },
  { label: "مشاوره", value: "counseling" },
];

export const AdminDashboardNavItems: UserPanelOpType[] = [
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "نمای کلی",
    Icon: HomeIcon,
    target: "/admin",
  },
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "کاربران",
    Icon: UsersIcon,
    target: "/admin/users",
  },

  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "دسته بندی",
    Icon: FolderOpenIcon,
    target: "/admin/categories",
  },
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "کامنت ها",
    Icon: ChatBubbleBottomCenterIcon,
    target: "/admin/comments",
  },

  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "تیکت ها",
    Icon: TicketIcon,
    target: "/admin/tickets",
  },
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "تخفیفات",
    Icon: PercentBadgeIcon,
    target: "/admin/discount",
  },
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "ایجاد کمپین",
    Icon: CalendarDaysIcon,
    target: "/admin/campaign",
  },
];
export const AdminDashBoardDropDown: AdminDropDownType[] = [
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "دوره ها",
    subLabel: "افزودن",
    subLabel_2: "مدیریت دوره ها",
    subTargetLink: "/admin/courses/new-course",
    subTargetLink_2: "/admin/courses/list",
    subIcon: PlusIcon,
    subIcon_2: AdjustmentsVerticalIcon,
    Icon: CodeBracketSquareIcon,
    targetLink: "/admin/courses",
    id:"courses"
  },
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "جلسات",
    subLabel: "افزودن",
    subTargetLink: "/admin/sessions/add",
    subTargetLink_2: "/admin/sessions/sessions-list",
    subLabel_2: "مدیریت  جلسات",
    subIcon: PlusIcon,
    subIcon_2: AdjustmentsVerticalIcon,
    Icon: VideoCameraIcon,
    targetLink: "/admin/sessions",
    id:"sessions"
  },
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "منو ها",
    subLabel: "افزودن",
    subTargetLink: "/admin/menus/add",
    subTargetLink_2: "/admin/menus/menu-list",
    subLabel_2: "مدیریت  منوها",
    subIcon: DocumentPlusIcon,
    subIcon_2: AdjustmentsVerticalIcon,
    Icon: Bars4Icon,
    targetLink: "/admin/menus",
    id:"menus"
  },
  {
    variant: { hoverMode: "hoverMode", casual: "casual" },
    title: "مقالات",
    subLabel: "افزودن",
    subTargetLink: "/admin/blogs/add",
    subTargetLink_2: "/admin/blogs/blog-list",
    subLabel_2: "مدیریت  مقالات",
    subIcon: PlusIcon,
    subIcon_2: AdjustmentsVerticalIcon,
    Icon: DocumentIcon,
    targetLink: "/admin/blogs",
    id:"blogs"
  },
];

export const suppurtOptions = [
  { value: "", label: "روش پشتیبانی" },
  { value: "online", label: "آنلاین" },
];
