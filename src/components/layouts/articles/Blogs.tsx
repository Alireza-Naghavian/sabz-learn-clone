import BlogCard from "@/components/shared/BlogsCard/BlogCard";
import CoursesHeader from "@/components/ui/CoursesHeader/CoursesHeader";
import ClientLayout from "../ClientLayout/ClientLayout";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MenuBodyType } from "@/types/services/menu.t";

function Blogs({menu}:{menu:MenuBodyType[]}) {
  return (
    <ClientLayout menu={menu}>
      <section className="container mt-8 sm:mt-10">
        <CoursesHeader
          mainTitle="وبلاگ"
          totalAmount={`${130} مقاله`}
          qs={false}
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-5 gap-x-7">
          {/* content */}
          {/* <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard /> */}
        </div>
        <div className="w-full h-full">
          <PrimaryBtn
            variant="fill"
            size="xl"
            type="button"
            className="mx-auto mt-8"
          >
            <span>مشاهده بیشتر</span>
            <ChevronDownIcon className="size-6" />
          </PrimaryBtn>
        </div>
      </section>
    </ClientLayout>
  );
}

export default Blogs;
