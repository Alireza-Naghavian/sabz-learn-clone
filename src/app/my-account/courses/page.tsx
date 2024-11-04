import MyCourses from '@/components/layouts/user-panel/courses/MyCourses';
import StoreProvider from '@/context/StoreProvider';
 function page() {
  return (
    <StoreProvider>
  <MyCourses/>
    </StoreProvider>
  )
}

export default page