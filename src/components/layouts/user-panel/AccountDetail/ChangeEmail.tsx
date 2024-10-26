import PrimaryBtn from '@/components/ui/button/PrimaryBtn';
import MainTextField from '@/components/ui/textField&inputs/MainTextField';
import ResponsiveImage from '@/components/utils-components/ResponsiveImage/ResponsiveImage';
import { useUpdateUserMutation, useUserDataQuery } from '@/services/users/userApiSlice';
import { useForm } from 'react-hook-form';
import InputSkelton from './InputSkelton';
import { useEffect } from 'react';
import Loader from '@/components/ui/loader/Loader';
import { useAlert } from '@/context/AlertProvider';

function ChangeEmail() {
  const {data,isLoading}= useUserDataQuery();
  const [updateEmail,{isLoading:isUpdating}] = useUpdateUserMutation();
  const {showAlert} = useAlert();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm<{email:string}>({defaultValues:{email:data?.email as string}});
      useEffect(()=>{
        if(data){
          reset({
            email:data.email as string
          })
        }
      },[reset,data])

      const updateHanlder = async(data:{email:string})=>{
        try {
          const result = await updateEmail({email:data.email}).unwrap();
            showAlert("success",result.message)
        } catch (error:any) {
          if(error?.message){
            showAlert("error",error.message)
          }
         else{
          showAlert("error",`خطای غیر منتظره رخ داد`)
         }
        }
      }
  return (
    <div className="xl:col-span-2 bg-white dark:bg-gray-800 p-4.5 rounded-2xl">
    <div className="pb-4.5 border-b border-b-gray-200 dark:border-b-slate-500">
      <span className="font-DanaMedium  md:text-xl text-zinc-700 dark:text-white">
        جزییات حساب کاربری
      </span>
    </div>
    <form
    onSubmit={handleSubmit(updateHanlder)}
    className="p-3.5 pt-8">
      <div className="relative mb-11">
        <ResponsiveImage
          alt="user"
          className="w-32 md:w-44  h-32 md:h-44 rounded-full"
          imageStyles="rounded-full  !w-full !h-full !object-cover"
          src={"/images/user_sample.png"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 w-full">
        <div>
          {isLoading ? <InputSkelton label='نام کاربری' count={1}/>:
          <MainTextField
          register={register}
          name="userName"
          id="userName"
          variant="rounded"
          readOnly={true}
          label="نام کاربری"
          required={false}
          value={data?.username}
          type="text"
          errors={errors}
          size="mediumSize"
          />
        }
        </div>
        <div>
          <MainTextField
            register={register}
            name="email"
            id="email"
            variant="rounded"
            label="ایمیل"
            type="email"
            errors={errors}
            size="mediumSize"
          />
        </div>
      </div>
      <div className="mt-6">
        <PrimaryBtn
          type="submit"
          variant="fill"
          size="xl"
          className="!rounded-lg mr-auto"
        >
          {isUpdating ? <Loader loadingCondition={isUpdating}/>:"ثبت اطلاعات"}
        </PrimaryBtn>
      </div>
    </form>
  </div>
  )
}





export default ChangeEmail