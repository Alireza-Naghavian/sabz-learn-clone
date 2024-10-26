"use client"
import PrimaryBtn from '@/components/ui/button/PrimaryBtn'
import Loader from '@/components/ui/loader/Loader'
import MainTextField from '@/components/ui/textField&inputs/MainTextField'
import { useAlert } from '@/context/AlertProvider'
import { useCreateDeptMutation } from '@/services/tickets&depts/ticketApiSlice'
import React from 'react'
import { useForm } from 'react-hook-form'

function DeptForm() {
    const {handleSubmit,register,formState:{errors},reset} = useForm<{title:string}>()
    const {showAlert} = useAlert();
    const [createDept,{isLoading}] = useCreateDeptMutation();
   
    const createHandler = async(data:{title:string})=>{
        try {
            const result = await createDept({title:data.title}).unwrap();
            showAlert("success",result.message)
        } catch (error:any) {
            if(error.message){
                showAlert("error",error.message)
            }else{
                showAlert("error","خطا هنگام ایجاد دپارتمان جدید")
            }
        }finally{
            reset();
        }
    }
  return (
    <form onSubmit={handleSubmit(createHandler)} className='py-8 relative w-full'>
        <div className="w-1/2">
        <MainTextField
        register={register}
        name='title'
        id='title'
        variant='rounded'
        className='w-1/2'
        type='text'
        errors={errors}
        size='mediumSize'
        label='عنوان دپارتمان'
        required
        validattionschema={{required:"عنوان دپارتمان الزامی است"}}
        />
        </div>
    <PrimaryBtn
    variant='fill'
    size='xl'
    disabled={isLoading}
    className='mr-auto mt-4 rounded-xl px-12 font-DanaMedium'
    >
        {isLoading ? <Loader loadingCondition={isLoading}/>:"ایجاد"}
    </PrimaryBtn>
    
    </form>
  )
}

export default DeptForm