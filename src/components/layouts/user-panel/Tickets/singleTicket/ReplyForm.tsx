import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import { useAlert } from "@/context/AlertProvider";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { useSetAnswerMutation } from "@/services/tickets&depts/ticketApiSlice";
import { SetState } from "@/types/global.t";
import React from "react";
import { useForm } from "react-hook-form";

const ReplyForm = ({ticketId,setIsReplyOpen}:{ticketId:string,setIsReplyOpen:SetState<boolean>}) => {
  const {data:userdata,isLoading}= useGetMeQuery();
  const [sendAnswer,{isLoading:isSending}] = useSetAnswerMutation();
  const {showAlert} = useAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{body:string}>();
  const sendHandler = async(data:{body:string}) => {
    try {
      const result = await sendAnswer({body:data.body as string,sender:userdata?.user._id as string,ticketID:ticketId as string}).unwrap();
      showAlert("success",result.message)
    } catch (error:any) {
      if(error.message){
        showAlert("error",error.message)
      }else{
        showAlert("error","خطا هنگام ارسال پاسخ لطفا بعدا تلاش کنید")
      }
    }finally{
      setIsReplyOpen(false);
      reset();
    }
  };
  return (
    <form
      className="flex flex-col gap-y-2"
      onSubmit={handleSubmit(sendHandler)}
    >
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
          {isSending?<Loader loadingCondition={isSending}/>:"ارسال"}
        </PrimaryBtn>
      </div>
    </form>
  );
};

export default ReplyForm;
