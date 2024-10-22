"use client"
import PrimaryBtn from '@/components/ui/button/PrimaryBtn'
import Loader from '@/components/ui/loader/Loader'
import TextLoader from '@/components/ui/loader/TextLoader'
import MainTextField from '@/components/ui/textField&inputs/MainTextField'
import TextAriaField from '@/components/ui/textField&inputs/TextAriaField'
import Select from '@/components/utils-components/Select/Select'
import { useAllDetpsQuery, useCreateTicketMutation } from '@/services/tickets&depts/ticketApiSlice'
import { OptionType } from '@/types/consts.t'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ContentList from '../ContentList'
import { DeptBodyType, TicketBodyType } from '@/types/services/tickets.t'
import { useAlert } from '@/context/AlertProvider'

function TicketForm() {
    const [dept,setDept] = useState("")
    const {register,handleSubmit,reset ,formState:{errors}} = useForm<TicketBodyType>();
    const {data,isLoading} = useAllDetpsQuery();
    const [createTicket,{isLoading:isCreateLoading}]= useCreateTicketMutation();
    const deptOptions= data?.map((dept)=>{
      return {value:dept._id,label:dept.title}
    }).concat( { label: "دپارتمان مورد نظر", value: "" }).reverse();
    const {showAlert} =useAlert(); 

    // create ticket
    const createHandler = async(data:TicketBodyType)=>{
      try {
        const {body,title} = data
        if(dept.trim().length ===0 || !dept){
          return showAlert("error","انتخاب دپارتمان الزامی است")
        }
        const result = await createTicket({body,title,departmentID:dept}).unwrap();
        showAlert("success",result.message)
      } catch (error:any) {
        if (error?.message) {
          showAlert("error", error?.message);
        } else {
          showAlert("error", "خطای هنگام تغییر کلمه عبور");
        }
      }finally{
        reset();
      }
    }
  return (
   <ContentList title='ارسال تیکت' >
    <form 
    onSubmit={handleSubmit(createHandler)}
    className='w-full h-full flex flex-col justify-center gap-y-8' >
            {isLoading ? <TextLoader loadingCondition={isLoading}/>:
            <Select
            selectTitle='دپارتمان '
            options={deptOptions as OptionType[]}
            onChange={(e)=>setDept(e.target.value)}
            value={dept}
            />
          }
            <MainTextField
            name='title'
            id='title'
            label='موضوع تیکت'
            variant='rounded'
            errors={errors}
            register={register}
            type='text'
            size={"largeSize"}
            placeHolder='موضوع تیکت خود را وارد کنید'
            validattionschema={{required:"پرکردن این فیلد الزامی است"}}
            />
            <TextAriaField
            register={register}
            name='body'
            id='body'
            label='متن تیکت'
            required={true}
            placeHolder='متن تیکت خود را وارد کنید'
            variant='freeMode'
            type='text'
            errors={errors}
            validattionschema={{required:"پرکردن این فیلد الزامی است"}}
            />
      <div className="">
      <PrimaryBtn type='submit' className='mr-auto !rounded-lg '
        variant='fill' size='lg'>
          {isCreateLoading ? <Loader loadingCondition={isCreateLoading}/>:"ارسال"}
        </PrimaryBtn>
      </div>
    </form>
   </ContentList>
  )
}

export default TicketForm