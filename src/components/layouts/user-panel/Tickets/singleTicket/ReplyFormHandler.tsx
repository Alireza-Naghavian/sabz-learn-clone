"use client";
import PrimaryBtn from '@/components/ui/button/PrimaryBtn';
import Loader from '@/components/ui/loader/Loader';
import TextAriaField from '@/components/ui/textField&inputs/TextAriaField';
import { useAlert } from '@/context/AlertProvider';
import { useGetMeQuery } from '@/services/auth/authApiSlice';
import { useReplyUserMutation } from '@/services/tickets&depts/ticketApiSlice';
import { useForm } from 'react-hook-form';

function ReplyFormHandler({ticketID}:{ticketID:string}) {
    const {register,handleSubmit,formState: { errors },reset} = useForm<{body:string}>();
    const {showAlert} = useAlert();
    const [replyUser,{isLoading}] = useReplyUserMutation();
    const { data:userData} = useGetMeQuery();
      const sendHandler =async (data:{body:string}) => {
        try {
          const result = await replyUser({body:data.body as string,sender:userData?.user._id as string,ticketID}).unwrap()
          showAlert("success",result.message)
        } catch (error:any) {
          if(error.message){
            showAlert('error',error.message)
          }else{
            showAlert("error","خطا هنگام ارسال پاسخ لطفا بعدا تلاش کنید")
          }
        }finally{
          reset();
        }
      };
    return (
        <form
        className="flex flex-col gap-y-2"
        onSubmit={handleSubmit(sendHandler)}>
        <TextAriaField
          register={register}
          name="body"
          id="body"
          label="متن تیکت"
          required={true}
          placeHolder="متن تیکت خود را وارد کنید"
          variant="freeMode"
          validattionschema={{ required: "پر کردن این فیلد الزامی است" }}
          type="text"
          errors={errors}
        />
        <div className="mt-2">
          <PrimaryBtn
            type="submit"
            className="mr-auto !rounded-lg "
            variant="fill"
            size="lg"
          >
            {isLoading ? <Loader loadingCondition={isLoading}/>:"ارسال"}
          </PrimaryBtn>
        </div>
      </form>
      );
}

export default ReplyFormHandler