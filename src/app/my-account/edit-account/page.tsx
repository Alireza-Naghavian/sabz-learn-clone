import AccountDetail from '@/components/layouts/user-panel/AccountDetail/AccountDetail';
import StoreProvider from '@/context/StoreProvider';
 function page() {
  return (
    <StoreProvider>
    <AccountDetail/>
    </StoreProvider>
  )
}

export default page