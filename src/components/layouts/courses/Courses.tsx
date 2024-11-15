import CoursesHeader from "@/components/ui/CoursesHeader/CoursesHeader";
import SideBarFilter from "@/components/ui/aside/SideBarFilter";
import SortBtns from "@/components/ui/button-group/SortBtns";
import StoreProvider from "@/context/StoreProvider";
import { CatBodytype, CourseBodyType, FilterReqType } from "@/types/services/course&category.t";
import { MenuBodyType } from "@/types/services/menu.t";
import ClientLayout from "../ClientLayout/ClientLayout";
import { CompaignTableData } from "@/types/services/compaign.t";

function Courses({
  menu,
  allCourses,
  categories,
  compaignData,
  initCourses
}: {
  menu: MenuBodyType[];
  initCourses:CourseBodyType[]
  allCourses: FilterReqType;
  categories: CatBodytype[];
  compaignData:CompaignTableData[]
}) {
  return (
    <ClientLayout compaignData={compaignData} menu={menu}>
      <div className="container  mt-8 sm:mt-10 relative">
        <CoursesHeader
          mainTitle="دوره ها"
          qs={false}
          totalAmount={`${initCourses.length} عنوان آموزشی`}
        />
        <StoreProvider>
          <section
            className="grid  grid-rows-1 lg:grid-cols-3 xl:grid-cols-4 
        gap-3.5 sm:gap-5 mt-9 sm:mt-25"
          >
            <SideBarFilter
              categories={categories}
              className="hidden md:grid grid-cols-2 lg:grid-cols-1 gap-5"
            />
            <div
              className="col-span-1 lg:col-span-2 xl:col-span-3
           order-1 lg:order-2 "
            >
              <SortBtns
                categories={categories}
                allCourses={allCourses as FilterReqType}
              />
              <div className="w-full mx-auto flex justify-center mt-14"></div>
            </div>
          </section>
        </StoreProvider>
      </div>
    </ClientLayout>
  );
}

export default Courses;
